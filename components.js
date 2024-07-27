class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    /* Debug Borders

                    border-style: solid;
                    border-width: 1vw;
                    border-color: black;

                    border-style: solid;
                    border-width: 1vw;
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
                .nav-options {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    width: 25vw;
                }
                .logo-and-media {
                    display: flex;
                    width: 25vw;
                    justify-content: flex-start;
                    align-items: center;
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
                <div class="logo-and-media">
                    testing spacing
                </div>
                <div class="nav-options"></div>
                <div class="nav-options"></div>
                <div class="nav-options">
                    <a href="index.html">Home</a>
                    <a href="experience.html">Experience</a>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-bar', Navigation);