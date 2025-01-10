import './2048-tile.js'

class Grid extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <tile-2048 value="2"></tile-2048>

            <tile-2048 value="4"></tile-2048>
        `;
    }
}

customElements.define('grid-2048', Grid);