class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                nav {
                    background-color: darkred;
                }
                a {
                    background-color grey: 
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