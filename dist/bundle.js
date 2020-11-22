!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Paragraph=t():e.Paragraph=t()}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n(1).toString();var i=function(){function e(t){var n=t.data,a=t.config,r=t.api;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=r,this.config=a,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph",alignment:{left:"ce-paragraph--left",center:"ce-paragraph--center",right:"ce-paragraph--right"}},this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive},this.settings=[{name:"left",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 23h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 45h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>'},{name:"center",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 23c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 45c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>'},{name:"right",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 19h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 41h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/></svg>'}],this.onKeyUp=this.onKeyUp.bind(this),this._placeholder=a.placeholder?a.placeholder:e.DEFAULT_PLACEHOLDER,this._data={text:n.text||"",alignment:n.alignment||a.defaultAlignment||e.DEFAULT_ALIGNMENT},this._element=this.drawView(),this.data=n,this._preserveBlank=void 0!==a.preserveBlank&&a.preserveBlank}return r(e,null,[{key:"DEFAULT_PLACEHOLDER",get:function(){return""}},{key:"ALIGNMENTS",get:function(){return{left:"left",center:"center",right:"right"}}},{key:"DEFAULT_ALIGNMENT",get:function(){return e.ALIGNMENTS.left}}]),r(e,[{key:"onKeyUp",value:function(e){"Backspace"!==e.code&&"Delete"!==e.code||""===this._element.textContent&&(this._element.innerHTML="")}},{key:"drawView",value:function(){var e=document.createElement("DIV");return e.classList.add(this._CSS.wrapper,this._CSS.block,this._CSS.alignment[this.data.alignment]),e.contentEditable=!0,e.dataset.placeholder=this.api.i18n.t(this._placeholder),e.innerHTML=this.data.text,e.addEventListener("keyup",this.onKeyUp),e}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(e){var t={text:this.data.text+=e.text,alignment:this.data.alignment};this._element.innerHTML=this.data.text,this.data=t}},{key:"validate",value:function(e){return!(""===e.text.trim()&&!this._preserveBlank)}},{key:"save",value:function(e){return Object.assign(this.data,{text:e.innerHTML})}},{key:"onPaste",value:function(t){console.log("onpaset"),console.log(t);var n={text:t.detail.data.innerHTML,alignment:this.config.defaultAlignment||e.DEFAULT_ALIGNMENT};this.data=n}},{key:"renderSettings",value:function(){var e=this,t=document.createElement("div");return this.settings.map((function(n){var a=document.createElement("div");return a.classList.add("cdx-settings-button"),a.innerHTML=n.icon,a.classList.toggle(e.CSS.settingsButtonActive,n.name===e.data.alignment),t.appendChild(a),a})).forEach((function(t,n,a){t.addEventListener("click",(function(){e._toggleTune(e.settings[n].name),a.forEach((function(t,n){var a=e.settings[n].name;t.classList.toggle(e.CSS.settingsButtonActive,a===e.data.alignment),e._element.classList.toggle(e._CSS.alignment[a],a===e.data.alignment)}))}))})),t}},{key:"_toggleTune",value:function(e){this.data.alignment=e}},{key:"data",get:function(){return this._data},set:function(t){this._data={text:t.text||"",alignment:t.alignment||this.config.defaultAlignment||e.DEFAULT_ALIGNMENT},this._element.innerHTML=this._data.text||""}}],[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{text:{br:!0},alignment:{}}}},{key:"pasteConfig",get:function(){return{tags:["P"]}}},{key:"toolbox",get:function(){return{icon:n(5).default,title:"Text"}}}]),e}();e.exports=i},function(e,t,n){var a=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function c(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},a=[],r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var h=c(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==h?(o[h].references++,o[h].updater(d)):o.push({identifier:u,updater:m(d,t),references:1}),a.push(u)}return a}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=n.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,h=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=h(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function p(e,t,n){var a=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,g=0;function m(e,t){var n,a,r;if(t.singleton){var i=g++;n=f||(f=l(t)),a=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=l(t),a=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=c(n[a]);o[r].references--}for(var i=s(e,t),l=0;l<n.length;l++){var u=c(n[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=i}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n.ce-paragraph--right {\n    text-align: right;\n}\n.ce-paragraph--center {\n    text-align: center;\n}\n.ce-paragraph--left {\n    text-align: left;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n\n\n.svg-icon {\n    width: 1em;\n    height: 1em;\n}\n\n.svg-icon path,\n.svg-icon polygon,\n.svg-icon rect {\n    fill: #4691f6;\n}\n\n.svg-icon circle {\n    stroke: #4691f6;\n    stroke-width: 1;\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var r=(o=a,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var o,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);a&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t),t.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n'}])}));
