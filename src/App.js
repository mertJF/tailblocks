import React, { Component } from 'react';
import Frame from 'react-frame-component';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import getBlock from './blocks';
import getIcons from './icons';

const iconList = getIcons();
const themeList = ["indigo", "orange", "teal", "red", "purple", "pink", "blue", "green"];

const desktopIcon = (
  <svg
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
    <path d="M8 21h8m-4-4v4" />
  </svg>
);

const phoneIcon = (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
    <path d="M12 18h.01" />
  </svg>
);

const tabletIcon = (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
    <path d="M12 18h.01" />
  </svg>
);

const viewList = [
  {
    icon: desktopIcon,
    name: 'desktop'
  },
  {
    icon: tabletIcon,
    name: 'tablet'
  },
  {
    icon: phoneIcon,
    name: 'phone'
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      darkMode: false,
      sidebar: true,
      codeView: false,
      view: 'desktop',
      theme: 'indigo',
      blockType: 'Blog',
      blockName: 'BlogA',
      markup: ''
    }
    
    this.changeMode = this.changeMode.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeBlock = this.changeBlock.bind(this);
    this.handleContentDidMount = this.handleContentDidMount.bind(this);
    this.changeView = this.changeView.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.markupRef = React.createRef();
    this.textareaRef = React.createRef();
  }

  changeMode() {
    this.setState({ darkMode: !this.state.darkMode })
  }

  handleContentDidMount() {
     setTimeout(() => {
      this.setState({
        ready: true,
        markup: this.markupRef.current.innerHTML
      })
    }, 400);
  }

  beautifyHTML(codeStr) {
    const process = (str) => {
      let div = document.createElement('div');
      div.innerHTML = str.trim();
      return format(div, 0).innerHTML.trim();
    }
    
    const format = (node, level) => {
      let indentBefore = new Array(level++ + 1).join('  '),
        indentAfter = new Array(level - 1).join('  '),
        textNode;
    
      for (let i = 0; i < node.children.length; i++) {
        textNode = document.createTextNode('\n' + indentBefore);
        node.insertBefore(textNode, node.children[i]);
    
        format(node.children[i], level);
    
        if (node.lastElementChild === node.children[i]) {
          textNode = document.createTextNode('\n' + indentAfter);
          node.appendChild(textNode);
        }
      }

      return node;
    }
    return process(codeStr);
  }

  changeBlock(e) {
    const { currentTarget } = e;
    const blockType = currentTarget.getAttribute('block-type');
    const blockName = currentTarget.getAttribute('block-name');
    this.setState({
      blockType, blockName,
      codeView: false
    });

  }

  changeTheme(e) {
    const { currentTarget } = e;
    const theme = currentTarget.getAttribute('data-theme');
    this.setState({ theme });
  }

  changeView(e) {
    const { currentTarget } = e;
    const view = currentTarget.getAttribute('data-view');
    this.setState({ view, codeView: false });
  }

  toggleView(e) {
    this.setState({ codeView: !this.state.codeView, view: 'desktop', markup: this.markupRef.current.innerHTML })
  }

  themeListRenderer() {
    const { theme } = this.state;
    return themeList.map((t, k) => 
      <button key={k} data-theme={t} className={`theme-button bg-${t}-500${theme === t ? ' is-active' : ''}`} onClick={this.changeTheme}></button>
    )
  }

  listRenderer() {
    const { blockName } = this.state;
    return Object.entries(iconList).map(([type, icons]) => 
      <div className="blocks" key={type}>
        <div className="block-category">{type}</div>
        <div className="block-list">
        {Object.entries(icons).map(icon => <button key={icon[0]} onClick={this.changeBlock} className={`block-item${icon[0] === blockName ? ' is-active': ''}`} block-type={type} block-name={icon[0]}>{icon[1]}</button>)}
        </div>
      </div>
    );
  }

  viewModeRenderer() {
    const { view } = this.state;
    return viewList.map((v, k) => <button key={k} className={`device${view === v.name ? ' is-active' : ''}`} data-view={v.name} onClick={this.changeView}>{v.icon}</button>);
  }

  toggleSidebar() {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    const { darkMode, theme, blockName, blockType, sidebar, view } = this.state;
    return (
      <div className={`app${darkMode ? ' dark-mode' : ''}${sidebar ? ' has-sidebar' : ''} ${theme} ${view}`}>
        <textarea className="copy-textarea" ref={this.textareaRef} />
        <aside className="sidebar">
          {this.listRenderer()}
        </aside>
        <div className="toolbar">
          <button className="opener" onClick={this.toggleSidebar}>TAILBLOCKS</button>
          <button className="copy-the-block" onClick={this.toggleView}>
            {!this.state.codeView ?
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 18L22 12 16 6"></path>
                <path d="M8 6L2 12 8 18"></path>
              </svg>
              : 
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="css-i6dzq1"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            }
            <span>{!this.state.codeView ? 'VIEW CODE': 'PREVIEW'}</span>
          </button>
          <div className="switcher">
            {this.themeListRenderer()}
          </div>
          {this.viewModeRenderer()}
          <button className="mode" onClick={this.changeMode}></button>
        </div>
        <div className="markup" ref={this.markupRef}>{getBlock({ theme, darkMode })[blockType][blockName]}</div>
        <main className="main" style={{ opacity: this.state.ready ? '1' : '0' }}>
          <div className={`view${this.state.codeView ? ' show-code' : ''}`}>
            <Frame
              contentDidMount={this.handleContentDidMount}
              contentDidUpdate={this.handleContentDidUpdate}
              head={
                <>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css" rel="stylesheet" />
                {darkMode ? <style dangerouslySetInnerHTML={{__html:`img { filter: invert(1); mix-blend-mode: color-dodge }`}} /> : <style dangerouslySetInnerHTML={{__html:`img { filter: sepia(1) hue-rotate(180deg) opacity(.9) grayscale(.7) }`}} />}
                </>
              }
            >
              {getBlock({ theme, darkMode })[blockType][blockName]}
            </Frame>
            <div className="codes">
              <SyntaxHighlighter language="html" style={darkMode ? vs2015 : docco} showLineNumbers>
                {this.beautifyHTML(this.state.markup)}
              </SyntaxHighlighter>
            </div>
          </div>
        </main>
        <a href="https://github.com/mertJF/tailblocks" className="github" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
    );
  }
}

export default App;
