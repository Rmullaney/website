class Tile extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div>craziest
            </div>
        `;
    }
}

customElements.define('tile-2048', Tile);