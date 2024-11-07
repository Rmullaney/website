const taDesc = `I have been a teaching assistant for COSC208 - Introduction to Computer Systems - for two semesters and a teaching assistant for COSC215 - Software Analysis and Testing - for one semester 
                <br>
                My duties include assisting students with questions and concepts during lab periods while also providing an open office hour where I answer questions about class material and assist students with course projects
                <br>
                This position has helped me develop my communication skills, as I often have to explain difficult and complex technical concepts in simple or non-technical contexts
                <br>
                Furthermore, by continuously familiarizing and mastering the content of these courses in order to help students, I have a fantastic grasp on the C language, large-scale computer systems and programs, and different software analysis and testing principles`;

//NAVIGATION BAR COMPONENT
class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `


            <header class="sticky-top container-fluid" style="background-color: #0B3D91; margin: 0">
                <nav class="navbar navbar-expand-lg navbar-dark container-fluid">
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
                </nav>
            </header>
        `;
    }
}

customElements.define('nav-bar', Navigation);

//Experience page modal component
class ModalComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const id = this.getAttribute('modal_id')
        const title = this.getAttribute('modal_title')
        const description = taDesc

        this.innerHTML  = `
            <div class="modal fade" id=${id} tabindex="-1" aria-labelledby="modalLabel${id}" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="modalLabel">${title}</h4>
                        </div>

                        <div class="modal-body">
                            ${description}
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `

    }
}

customElements.define('experience-modal', ModalComponent);


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