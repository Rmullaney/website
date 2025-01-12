

class Grid extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="d-flex flex-column" style="height:32vw; width:32vw;">
                <div class="d-flex flex-row">
                    <tile-2048 id="tile-0" value="2"></tile-2048>
                    <tile-2048 id="tile-1" value="4"></tile-2048>
                    <tile-2048 id="tile-2" value="8"></tile-2048>
                    <tile-2048 id="tile-3" value="16"></tile-2048>
                </div>
                <div class="d-flex flex-row">
                    <tile-2048 id="tile-4" value="2"></tile-2048>
                    <tile-2048 id="tile-5" value="4"></tile-2048>
                    <tile-2048 id="tile-6" value="8"></tile-2048>
                    <tile-2048 id="tile-7" value="16"></tile-2048>
                </div>
                <div class="d-flex flex-row">
                    <tile-2048 id="tile-8" value="2"></tile-2048>
                    <tile-2048 id="tile-9" value="4"></tile-2048>
                    <tile-2048 id="tile-10" value="8"></tile-2048>
                    <tile-2048 id="tile-11" value="16"></tile-2048>
                </div>
                <div class="d-flex flex-row">
                    <tile-2048 id="tile-12" value="2"></tile-2048>
                    <tile-2048 id="tile-13" value="4"></tile-2048>
                    <tile-2048 id="tile-14" value="8"></tile-2048>
                    <tile-2048 id="tile-15" value="16"></tile-2048>
                </div>
            </div>
        `;
    }
}

customElements.define('grid-2048', Grid);