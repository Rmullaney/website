class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    /* Debug Borders

                    border-style: solid;
                    border-width: 3vw;
                    border-color: black;

                    border-style: solid;
                    border-width: 2vw;
                    border-color: white;

    */

    connectedCallback() {
        this.innerHTML = `
            <style>
                nav {
                    height: 10vh;
                    width: 100vw;
                    display: flex;
                    justify-content: flex-end;
                    align-items: space-evenly;
                }
                .options {
                    display: flex;
                    justify-content: flex-end;
                    align-items: space-evenly;
                    width: 25vw;
                }
                a {
                    width: 10vw;
                    height: 5vh;
                    text-decoration: none;
                    font-weight: bold;
                    color: #1b0aad;
                }
            </style>
            <nav>
                <div class="options">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-bar', Navigation);