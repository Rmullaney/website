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

customElements.define('2048-tile', Tile);