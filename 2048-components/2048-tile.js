class Tile extends HTMLElement {
    constructor() {
        super();
        this._value = 0;
    }

    // Specify which attributes to observe
    static get observedAttributes() {
        return ['value'];  // We'll observe the 'value' attribute
    }

    // This callback runs when the 'value' attribute is set or changed
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'value') {
            this._value = parseInt(newValue, 10);  // Convert the attribute to a number
            this.render();  // Re-render the element when the value changes
        }
    }

    render() {
        if (this._value != 0){
            this.innerHTML = `<div>${this._value}</div>`;
        } else {
            this.innerHTML = `<div></div>`
        }

        
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define('tile-2048', Tile);