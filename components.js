const taDesc = `I have been a teaching assistant for COSC208 - Introduction to Computer Systems - for two semesters and a teaching assistant for COSC215 - Software Analysis and Testing - for one semester 
                <br><br>
                My duties include assisting students with questions and concepts during lab periods while also providing an open office hour where I answer questions about class material and assist students with course projects
                <br><br>
                This position has helped me develop my communication skills, as I often have to explain difficult and complex technical concepts in simple or non-technical contexts
                <br><br>
                Furthermore, by continuously familiarizing and mastering the content of these courses in order to help students, I have a fantastic grasp on the C language, large-scale computer systems and programs, and different software analysis and testing principles`;
const softEngDesc = `Soft Eng Description`;
const raidRidesDesc = `In the summer of my sophomore year I co-developed a ride-share app for a student business venture at Colgate
                <br><br>
                I taught myself SQL, NoSQL, JavaScript and React Native before and as we developed the app, which relied on Google Cloud and Firebase for our backend
                <br><br>
                I was the key developer for many of our major APIs like Google Places, Expo Image Picker, and Stripe payments, and I also integrated Googel Cloud functions into our program
                <br><br>
                Over the course of this experience I also learned about the typical Agile development process, as we incorporated 2 week sprints with daily stand-ups and sprint planning and retrospectives into our development process`;
const websiteDesc = `I developed this website in HTML and CSS and initially set out to create all of the CSS myself. However, in realizing how daunting this task is, I began to utilize Bootstrap which made my visuals far cleaner than they were before
                <br><br>
                I have alsoleveraged custom HTML components for each page header and these modals in order to DRY out my code (ensuring that I won't repeat code)
                `;
const OCSDesc = `OCS Description`;
const bRoomDesc = `The Boardroom Description`;
const habitatDesc = `Habitat for Humanity Description`;
const letProjDesc = `Letter Project Description`;
const linkDesc = `Link Staff Description`;

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
        let description = "Description Failed to Load"
        switch (id){
            case "raidRidesId":
                description = raidRidesDesc;
                break;
            case "thisSiteId":
                description = websiteDesc;
                break;
            case "teachAssistId":
                description = taDesc;
                break;
            case "softEngProjId":
                description = softEngDesc;
                break;
            case "OCSId":
                description = OCSDesc;
                break;
            case "theBoardroomId":
                description = bRoomDesc;
                break;
            case "habitatId":
                description = habitatDesc;
                break;
            case "letterProjId":
                description = letProjDesc;
                break;
            case "linkId":
                description = linkDesc;
                break;
            default:
                description = "Description Failed to Load";
                break;
        }

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
