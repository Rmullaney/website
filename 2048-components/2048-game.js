import './2048-grid.js';

class Outer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        window.addEventListener("keydown", function onEvent(event) {
            console.log(event.key)
        });
        this.innerHTML = `
            <div class="justify-content-center d-flex flex-column" style="margin:0; padding:0;">
                <br>
                <br>
                <div class="d-flex justify-content-center">
                    <grid-2048></grid-2048>
                </div>
                <br>
                <br>
            </div>
            
        `;
    }
}

customElements.define('game-2048', Outer);