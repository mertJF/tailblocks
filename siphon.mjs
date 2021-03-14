import path from "path";
import fs from "fs";
import * as acorn from "acorn";
import jsx from "acorn-jsx";
import * as walk from "acorn-walk";
import { extend } from "acorn-jsx-walk";
import glob from "glob";

extend(walk.base);

/**
 * String.prototype.replaceAll() polyfill
 * https://gomakethings.com/how-to-replace-a-section-of-a-string-with-another-one-with-vanilla-js/
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!String.prototype.replaceAll) {
  // eslint-disable-next-line no-extend-native
  String.prototype.replaceAll = function (str, newStr) {
    // If a regex pattern
    if (
      Object.prototype.toString.call(str).toLowerCase() === "[object regexp]"
    ) {
      return this.replace(str, newStr);
    }

    // If a string
    return this.replace(new RegExp(str, "g"), newStr);
  };
}

const parser = acorn.Parser.extend(jsx());
const blockFiles = glob.sync("src/blocks/**/light/*.js");

for (const blockFile of blockFiles) {
  const lightBlockFile = blockFile;
  const darkBlockFile = blockFile.replace("light", "dark");

  const lightBlockContent = fs.readFileSync(lightBlockFile, "utf-8");
  const darkBlockContent = fs.readFileSync(darkBlockFile, "utf-8");

  const classes = [];

  // Step 1: walk the dark mode jsx, picking up the classNames
  const darkAst = parser.parse(darkBlockContent, {
    sourceType: "module",
    ecmaVersion: "2020",
  });
  walk.simple(darkAst, {
    JSXElement(node) {
      const attributes = node.openingElement?.attributes;
      const classAttribute = attributes?.find(
        (a) => a.name?.name === "className"
      );

      if (classAttribute) {
        const className = classAttribute.value.value;
        classes.push(className);
      }
    },
  });

  let i = 0;
  const lightAst = parser.parse(lightBlockContent, { sourceType: "module" });

  let replacements = new Map();

  // Step 2: walk the light mode jsx, picking up the classNames, calculates what replacements will be done
  walk.simple(lightAst, {
    JSXElement(node) {
      const attributes = node.openingElement?.attributes;
      const classAttribute = attributes?.find(
        (a) => a.name?.name === "className"
      );
      if (classAttribute) {
        const lightClassName = classAttribute.value.value;
        const darkClassName = classes[i];

        if (lightClassName !== darkClassName) {
          const merged = mergeClassNames(lightClassName, classes[i]);
          replacements.set(lightClassName, merged);
        }
        i++;
      }
    },
  });

  // step 3. do replacements
  let newContent = lightBlockContent;
  for (const [original, merged] of replacements.entries()) {
    newContent = newContent.replaceAll(original, merged);
  }

  // step 4. replace class name
  const componentNameParts = lightBlockFile
    .split(/[\\/]/)
    .slice(-3)
    .map((p) => p.replace(".js", ""));
  const lightComponentName = `${cap(componentNameParts[1])}${cap(
    componentNameParts[0]
  )}${componentNameParts[2].toUpperCase()}`;

  const componentName = `${cap(
    componentNameParts[0]
  )}${componentNameParts[2].toUpperCase()}`;
  newContent = newContent.replaceAll(lightComponentName, componentName);

  // step 5. output merged ile
  const outputFile = lightBlockFile.replace("light", "merged");
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, newContent);
}

function cap(text) {
  return text[0].toUpperCase() + text.slice(1);
}

function mergeClassNames(lightClassNames, darkClassNames) {
  if (!darkClassNames) {
    return lightClassNames;
  }

  const classes = darkClassNames.split(/\s/);

  const darkClasses = new Set();

  for (const className of classes) {
    if (
      className.match(/-[1-9]\d\d/) ||
      className.match(/-white/) ||
      className.match(/-black/)
    ) {
      darkClasses.add(`dark:${className}`);
    }
  }

  return [lightClassNames, ...darkClasses].join(" ");
}
