class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                nav {
                    height: 20vh;
                    align-items: end;
                }
                a {
                    width: 15vw;
                    text-decoration: none;
                    font-weight: bold;
                }
            </style>
            <nav>
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
            </nav>
        `;
    }
}

customElements.define('nav-bar', Navigation);