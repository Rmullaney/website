class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                nav {
                    height: 10vh;
                }
                .options {
                    display: flex;
                    justify-content: flex-end;
                    align-items: flex-end;
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