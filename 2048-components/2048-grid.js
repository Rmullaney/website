import '2048-tile'

class Grid extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <2048-tile></2048-tile>

            <2048-tile></2048-tile>
        `;
    }
}

customElements.define('2048-grid', Grid);