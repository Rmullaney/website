

//NAVIGATION BAR COMPONENT
class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

            <header class="sticky-top bg-primary">
                <nav class="navbar navbar-expand-lg navbar-dark container">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="https://www.linkedin.com/in/ronanmullaney" target="_blank">
                            <img class="img-fluid" style="max-width: 30px; max-height:30px;" src="images/linkedin.png" alt="Linkedin">
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="navbar-collapse collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">About Me</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="experience.html">My Experience</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('nav-bar', Navigation);


//ABOUT PAGE SECTION COMPONENT
//Side is either 'row' for image on left or 'row-reverse' for image on right
class AboutComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const imageUrl = this.getAttribute('img') || 'default.jpg';
        const text = this.getAttribute('text') || 'Text Cannot Load';
        const side = this.getAttribute('img-side') || 'column';

        const content = side == 'left' ? 
        `
            <div class="about-image-and-text-box">
                <div class="about-image-box">
                    <img class="temp-img" src=${imageUrl} alt="Image Cannot Load">
                </div>
                <div class="about-text-box">
                    <h3 class="about-text">${text}</h3>
                </div>
            </div>
            `
        :
            `
            <div class="about-image-and-text-box">
                <div class="about-text-box">
                    <h3 class="about-text">${text}</h3>
                </div>
                <div class="about-image-box">
                    <img class="temp-img" src=${imageUrl} alt="Image Cannot Load">
                </div>
            </div>
            `
        ;

        this.innerHTML = `
            <style>
                .about-image-and-text-box {
                    width: 100vw;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    align-items: center;
                }

                .about-image-box {
                    display: flex;
                    justify-content: center;
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
            ${content}
        `
    }
}

customElements.define('about-page-box', AboutComponent);