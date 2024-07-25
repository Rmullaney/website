class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                nav {
                    height: 20vh;
                }
                .options {
                    display: flex;
                    justify-content: flex-end;
                }
                a {
                    width: 10vw;
                    height: 20vh;
                    text-decoration: none;
                    font-weight: bold;
                    color: white;
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