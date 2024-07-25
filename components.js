class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                nav {
                    background-color: gray;
                    height: 10vh;
                    width: 100vw;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                }
                a {
                    background-color gray: 
                    width: 30vw
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