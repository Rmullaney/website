import './2048-tile.js'

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
                </div>
                <br>
                <br>
            </div>
            
        `;
    }
}

customElements.define('game-2048', Outer);