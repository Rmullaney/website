class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                nav {
                    height: 10vh;
                    border-style: solid;
                    border-width: 3vw;
                    border-color: black;
                    display: flex;
                    justify-content: flex-end;
                    align-items: space-evenly;
                }
                .options {
                    display: flex;
                    justify-content: flex-end;
                    align-items: space-evenly;
                    border-style: solid;
                    border-width: 2vw;
                    border-color: white;
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