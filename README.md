![](https://badgen.net/badge/CodeX%20Editor/v2.0/blue)

# Paragraph Tool for CodeX Editor

Basic text Tool for the [CodeX Editor](https://ifmo.su/editor).

## Installation

### Install via NPM

Get the package

```shell
npm i --save-dev codex.editor.paragraph
```

Include module at your application

```javascript
const Paragraph = require('codex.editor.paragraph');
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

### Load from CDN

You can load specific version of package from [jsDelivr CDN](https://www.jsdelivr.com/package/npm/codex.editor.papagraph).

`https://cdn.jsdelivr.net/npm/codex.editor.papagraph@2.0.2`

Then require this script on page with CodeX Editor.

```html
<script src="..."></script>
```

## Usage

Add a new Tool to the `tools` property of the CodeX Editor initial config.

```javascript
var editor = CodexEditor({
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

This Tool has no config params

## Output data

| Field  | Type     | Description      |
| ------ | -------- | ---------------- |
| text   | `string` | paragraph's text |


```json
{
    "type" : "paragraph",
    "data" : {
        "text" : "Check out our projects on a <a href=\"https://github.com/codex-team\">GitHub page</a>.",
    }
}
```

