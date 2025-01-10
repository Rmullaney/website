import './2048-grid.js';

class Outer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <grid-2048></grid-2048>
        `;
    }
}

customElements.define('game-2048', Outer);