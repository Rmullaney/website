import './2048-grid';

class Outer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <2048-grid></2048-grid>
        `;
    }
}

customElements.define('2048-game', Outer);