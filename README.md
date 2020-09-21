![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Paragraph Tool with alignment for Editor.js

Basic text Tool for the [Editor.js](https://ifmo.su/editor).
forked by [paragraph plugin](https://github.com/editor-js/paragraph)

<img width="781" alt="スクリーンショット 2020-08-13 23 07 09" src="https://user-images.githubusercontent.com/2194021/90145742-39689700-ddbb-11ea-9eab-4b942048683b.png">

## Installation

### Install via NPM

Get the package

```shell
npm i --save editorjs-paragraph-with-alignment
```

Include module at your application

```javascript
const Paragraph = require('editorjs-paragraph-with-alignment');
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

### Load from CDN

`https://cdn.jsdelivr.net/npm/editorjs-paragraph-with-alignment@1.1.0`

## Usage

The Paragraph tool is included at editor.js by default, so you don't need to connect it manually.
If you want to connect your customized version of this tool, do not forget to use the [`initialBlock`](https://editorjs.io/configuration#change-the-default-block)
option of the editor config.

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...

  tools: {
    ...
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },
  }

  ...
});
```

## Config Params

The Paragraph Tool supports these configuration parameters:

| Field | Type     | Description        |
| ----- | -------- | ------------------ |
| placeholder | `string` | The placeholder. Will be shown only in the first paragraph when the whole editor is empty.  |
| preserveBlank | `boolean` | (default: `false`) Whether or not to keep blank paragraphs when saving editor data |

## Output data

| Field  | Type     | Description      |
| ------ | -------- | ---------------- |
| text   | `string` | paragraph's text |
| alignment   | `string` | left/center/right |


```json
{
    "type" : "paragraph",
    "data" : {
        "text" : "Check out our projects on a <a href=\"https://github.com/codex-team\">GitHub page</a>.",
        "alignment": "left"
    }
}
```

