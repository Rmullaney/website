import './2048-tile.js'

class Grid extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="d-flex flex-column">
                <div class="d-flex flex-row">
                    <tile-2048 value="2"></tile-2048>
                    <tile-2048 value="4"></tile-2048>
                    <tile-2048 value="8"></tile-2048>
                    <tile-2048 value="16"></tile-2048>
                </div>
                <div class="d-flex flex-row">
                    <tile-2048 value="2"></tile-2048>
                    <tile-2048 value="4"></tile-2048>
                    <tile-2048 value="8"></tile-2048>
                    <tile-2048 value="16"></tile-2048>
                </div>
                <div class="d-flex flex-row">
                    <tile-2048 value="2"></tile-2048>
                    <tile-2048 value="4"></tile-2048>
                    <tile-2048 value="8"></tile-2048>
                    <tile-2048 value="16"></tile-2048>
                </div>
                <div class="d-flex flex-row">
                    <tile-2048 value="2"></tile-2048>
                    <tile-2048 value="4"></tile-2048>
                    <tile-2048 value="8"></tile-2048>
                    <tile-2048 value="16"></tile-2048>
                </div>
            </div>




           


        `;
    }
}

customElements.define('grid-2048', Grid);