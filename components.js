

//NAVIGATION BAR COMPONENT
class Navigation extends HTMLElement {
    constructor() {
        super();
    }

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
                    box-sixing: border-box;
                    height: 10vh;
                    width: 50vw;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                }

                .fifty-width-rightside-container {
                    box-sizing: border-box;
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
                    margin-right: 3vw;
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


//ABOUT PAGE SECTION COMPONENT
class AboutComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const imageUrl = this.getAttribute('img') || 'default.jpg';
        const text = (this.getAttribute('text') || 'Text Cannot Load').trim();
        const side = (this.getAttribute('img-side') || 'left').trim();

        const flexDirection = (side == 'left') ? 'row' : 'row-reverse'

        this.innerHTML = `
            <style>
                .about-image-and-text-box {
                    width: 100vw;
                    display: flex;
                    flex-direction: ${flexDirection};
                    justify-content: space-evenly;
                    align-items: center;
                }

                .about-image-box {
                    display: flex;
                    justify-content: ${side};
                    align-items: flex-start;
                }

                .about-text-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .about-text {
                    color: #1b0aad;
                }

                .temp-img {
                    height: auto;
                    width: 20vw;
                    border-radius: 10vw;
                }
            </style>
            <div class="about-image-and-text-box">
                <div class="about-image-box">
                    <img class="temp-img" src=${imageUrl} alt="Image Cannot Load">
                </div>
                <div class="about-text-box">
                    <h3 class="about-text">${text == "TEST" ? "pass" : text}</h3>
                </div>
            </div>
        `
    }
}

customElements.define('about-page-box', AboutComponent);