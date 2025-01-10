import './2048-tile.js'

class Grid extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <tile-2048 value="2"></tile-2048>
                    </div>
                    <div class="col-3">
                        <tile-2048 value="4"></tile-2048>
                    </div>
                    <div class="col-3">
                        <tile-2048 value="0"></tile-2048>
                    </div>
                    <div class="col-3">
                        <tile-2048 value="8"></tile-2048>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-3">
                        <tile-2048 value="2"></tile-2048>
                    </div>
                    <div class="col-3">
                        <tile-2048 value="4"></tile-2048>
                    </div>
                    <div class="col-3">
                        <tile-2048 value="0"></tile-2048>
                    </div>
                    <div class="col-3">
                        <tile-2048 value="8"></tile-2048>
                    </div>
                </div>

                <div class="row">
                    <div class="col-3">
                        <tile-2048 value="2"></tile-2048>
                    </div>
                    <div class="col-3">
                        <tile-2048 value="4"></tile-2048>
                    </div>
                    <div class="col-3">
                        <tile-2048 value="0"></tile-2048>
                    </div>
                    <div class="col-3">
                        <tile-2048 value="8"></tile-2048>
                    </div>
                </div>

                <div class="row">
                    <div class="col-3">
                        <tile-2048 value="2"></tile-2048>
                    </div>
                    <div class="col-3">
                        <tile-2048 value="4"></tile-2048>
                    </div>
                    <div class="col-3">
                        <tile-2048 value="0"></tile-2048>
                    </div>
                    <div class="col-3">
                        <tile-2048 value="8"></tile-2048>
                    </div>
                </div>
            </div>


        `;
    }
}

customElements.define('grid-2048', Grid);