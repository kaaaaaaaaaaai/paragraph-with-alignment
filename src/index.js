/**
 * Build styles
 */
require('./index.css').toString();


class Paragraph {
    /**
     * Default placeholder for Paragraph Tool
     *
     * @return {string}
     * @constructor
     */
    static get DEFAULT_PLACEHOLDER() {
        return '';
    }

    /**
     * Allowed paragraph alignments
     *
     * @public
     * @returns {{left: string, center: string}}
     */
    static get ALIGNMENTS() {
        return {
            left: 'left',
            center: 'center',
            right: 'right',
            justify: 'justify'
        };
    }

    /**
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
        return true;
    }

    /**
     * Default paragraph alignment
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_ALIGNMENT() {
        return Paragraph.ALIGNMENTS.left;
    }

    /**
     *
     * @param data
     * @param config
     * @param api
     * @param readOnly
     */
    constructor({data, config, api, readOnly}) {
        this.api = api;
        this.config = config;
        this.readOnly = readOnly;
        this._CSS = {
            block: this.api.styles.block,
            wrapper: 'ce-paragraph',
            alignment: {
                left: 'ce-paragraph--left',
                center: 'ce-paragraph--center',
                right: 'ce-paragraph--right',
                justify: 'ce-paragraph--justify',
            }
        }
        this.CSS = {
            baseClass: this.api.styles.block,
            loading: this.api.styles.loader,
            input: this.api.styles.input,
            settingsButton: this.api.styles.settingsButton,
            settingsButtonActive: this.api.styles.settingsButtonActive,
        }

        this.settings = [
            {
                name: 'left',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 23h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 45h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>`
            },
            {
                name: 'center',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 23c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 45c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>`
            },
            {
                name: 'right',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 19h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 41h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/></svg>`
            },
            {
                name: 'justify',
                icon: `<svg viewBox="0 0 64 64" width="20" height="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="M 52.867 19 L 10.914 19 C 9.26 19 7.918 19.896 7.918 21 C 7.918 22.104 9.26 23 10.914 23 L 52.867 23 C 54.522 23 55.863 22.104 55.863 21 C 55.863 19.896 54.522 19 52.867 19 Z" style=""></path><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="M 52.779 41 L 11.113 41 C 9.469 41 8.136 41.896 8.136 43 C 8.136 44.104 9.469 45 11.113 45 L 52.779 45 C 54.421 45 55.754 44.104 55.754 43 C 55.754 41.896 54.421 41 52.779 41 Z" style=""></path></svg>`
            }
        ];

        this.onKeyUp = this.onKeyUp.bind(this)

        /**
         * Placeholder for paragraph if it is first Block
         * @type {string}
         */
        this._placeholder = config.placeholder ? config.placeholder : Paragraph.DEFAULT_PLACEHOLDER;

        this._data = {
            text: data.text || '',
            alignment: data.alignment || config.defaultAlignment || Paragraph.DEFAULT_ALIGNMENT
        };
        this._element = this.drawView();
        this.data = data;

        this._preserveBlank = config.preserveBlank !== undefined ? config.preserveBlank : false;

    }

    /**
     * Check if text content is empty and set empty string to inner html.
     * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
     *
     * @param {KeyboardEvent} e - key up event
     */
    onKeyUp(e) {
        if (e.code !== 'Backspace' && e.code !== 'Delete') {
            return;
        }

        const {textContent} = this._element;

        if (textContent === '') {
            this._element.innerHTML = '';
        }
    }

    /**
     * Create Tool's view
     * @return {HTMLElement}
     * @private
     */
    drawView() {
        let div = document.createElement('DIV');

        div.classList.add(this._CSS.wrapper, this._CSS.block, this._CSS.alignment[this.data.alignment]);
        div.contentEditable = !this.readOnly;
        div.dataset.placeholder = this.api.i18n.t(this._placeholder);
        div.innerHTML = this.data.text;

        div.addEventListener('keyup', this.onKeyUp);

        return div;
    }

    /**
     * Return Tool's view
     * @returns {HTMLDivElement}
     * @public
     */
    render() {
        return this._element;
    }

    /**
     * Method that specified how to merge two Text blocks.
     * Called by Editor.js by backspace at the beginning of the Block
     * @param {ParagraphData} data
     * @public
     */
    merge(data) {

        let newData = {
            text: this.data.text += data.text,
            alignment: this.data.alignment,
        };

        this._element.innerHTML = this.data.text;

        this.data = newData;
    }

    /**
     * Validate Paragraph block data:
     * - check for emptiness
     *
     * @param {ParagraphData} savedData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
    validate(savedData) {
        if (savedData.text.trim() === '' && !this._preserveBlank) {
            return false;
        }

        return true;
    }

    /**
     * Extract Tool's data from the view
     * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
     * @returns {ParagraphData} - saved data
     * @public
     */
    save(toolsContent) {
        return Object.assign(this.data, {
            text: toolsContent.innerHTML,
        });
    }

    /**
     * On paste callback fired from Editor.
     *
     * @param {PasteEvent} event - event with pasted data
     */
    onPaste(event) {
        const data = {
            text: event.detail.data.innerHTML,
            alignment: this.config.defaultAlignment || Paragraph.DEFAULT_ALIGNMENT
        };

        this.data = data;
    }

    /**
     * Get current Tools`s data
     * @returns {ParagraphData} Current data
     * @private
     */
    get data() {
        return this._data;
    }

    /**
     * Store data in plugin:
     * - at the this._data property
     * - at the HTML
     *
     * @param {ParagraphData} data — data to set
     * @private
     */
    set data(data) {
        this._data = {
            text: data.text || '',
            alignment: data.alignment || this.config.defaultAlignment || Paragraph.DEFAULT_ALIGNMENT
        }
        this._element.innerHTML = this._data.text || '';
    }


    /**
     * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
     */
    static get conversionConfig() {
        return {
            export: 'text', // to convert Paragraph to other block, use 'text' property of saved data
            import: 'text' // to covert other block's exported string to Paragraph, fill 'text' property of tool data
        };
    }

    /**
     * Sanitizer rules
     */
    static get sanitize() {
        return {
            text: {
                br: true,
            },
            alignment: {}
        };
    }

    /**
     * Used by Editor paste handling API.
     * Provides configuration to handle P tags.
     *
     * @returns {{tags: string[]}}
     */
    static get pasteConfig() {
        return {
            tags: ['P']
        };
    }

    /**
     *
     * @returns {HTMLDivElement}
     */
    renderSettings() {
        const wrapper = document.createElement('div');

        this.settings.map(tune => {
            /**
             * buttonのdomを作成して、alignのtoggleをactiveに設定する
             * @type {HTMLDivElement}
             */
            const button = document.createElement('div');
            button.classList.add('cdx-settings-button');
            button.innerHTML = tune.icon;

            button.classList.toggle(this.CSS.settingsButtonActive, tune.name === this.data.alignment);

            wrapper.appendChild(button);

            return button;
        }).forEach((element, index, elements) => {

            element.addEventListener('click', () => {

                this._toggleTune(this.settings[index].name);

                elements.forEach((el, i) => {
                    const {name} = this.settings[i];
                    el.classList.toggle(this.CSS.settingsButtonActive, name === this.data.alignment);
                    //paragraphのdivにalignmentのclassをつける。
                    this._element.classList.toggle(this._CSS.alignment[name], name === this.data.alignment)
                });
            });
        });

        return wrapper;
    }


    /**
     * @private
     * Click on the Settings Button
     * @param {string} tune — tune name from this.settings
     */
    _toggleTune(tune) {
        this.data.alignment = tune;
    }

    /**
     * Icon and title for displaying at the Toolbox
     *
     * @return {{icon: string, title: string}}
     */
    static get toolbox() {
        return {
            icon: require('./toolbox-icon.svg').default,
            title: 'Text'
        };
    }
}

module.exports = Paragraph;
