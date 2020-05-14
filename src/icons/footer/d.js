import React from "react"

function FooterD(props) {
  return (
    <svg fill="none" viewBox="0 0 266 150" {...props}>
      <path fill="var(--solid)" d="M0 0h266v150H0z" />
      <path stroke="var(--base-300)" d="M266 112.5H0" />
      <circle cx={29} cy={131} r={9} fill="var(--main-500)" />
      <rect
        x={213}
        y={129}
        width={31}
        height={4}
        rx={2}
        fill="var(--base-500)"
      />
      <rect
        x={53}
        y={129}
        width={45}
        height={4}
        rx={2}
        fill="var(--base-500)"
      />
      <path fill="var(--base-400)" d="M45 120h1v22h-1z" />
    </svg>
  )
}

export default FooterD;
