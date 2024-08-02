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
                    justify-content: space-evenly;
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
                    text-decoration: none;
                    font-weight: bold;
                    color: #1b0aad;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 8vw;
                }
                a:hover {
                    text-decoration: underline;
                }
                p {
                    color: #1b0aad;
                    font-weight: bold;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: 3vw;
                }
                img {
                    margin-left: 1vw;
                    width: 2vw;
                    height: auto;
                    border-radius: 1vw;
                }
            </style>
            <nav>
                
                <div class="nav-options"></div>
                <div class="nav-options"></div>
                <div class="nav-options"></div>
                <div class="nav-options">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="experience.html">Experience</a>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-bar', Navigation);