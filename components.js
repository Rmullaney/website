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
                    justify-content: flex-start;
                    align-items: center;
                }

                .fifty-width-leftside-container {
                    heigth: 10vh;
                    width: 50vw;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                }

                .fifty-width-rightside-container {
                    height: 10vh;
                    width: 50vw;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                }


                a {
                    text-decoration: none;
                    font-weight: bold;
                    color: #1b0aad;
                }
                a:hover {
                    text-decoration: underline;
                }
                p {
                    color: #1b0aad;
                    font-weight: bold;
                    margin-left: 3vw;
                    size: 1vw;
                }
                img {
                    margin-left: 1vw;
                    width: 2vw;
                    height: auto;
                    border-radius: 1vw;
                }  

                
            </style>
            <nav>

                <div class="fifty-width-leftside-container">
                    <p> Ronan Mullaney </p>
                    <a href=https://www.linkedin.com/in/ronanmullaney target="_blank">
                        <img src="images/linkedin.png" alt="Linkedin">
                    </a>
                </div>

                <div class="fifty-width-rightside-container">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="experience.html">Experience</a>
                </div>

            </nav>
        `;
    }
}

customElements.define('nav-bar', Navigation);