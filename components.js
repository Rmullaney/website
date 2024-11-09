const taDesc = `I have been a teaching assistant for COSC208 - Introduction to Computer Systems - for two semesters and a teaching assistant for COSC215 - Software Analysis and Testing - for one semester 
                <br><br>
                My duties include assisting students with questions and concepts during lab periods while also providing an open office hour where I answer questions about class material and assist students with course projects
                <br><br>
                This position has helped me develop my communication skills, as I often have to explain difficult and complex technical concepts in simple or non-technical contexts
                <br><br>
                Furthermore, by continuously familiarizing and mastering the content of these courses in order to help students, I have a fantastic grasp on the C language, large-scale computer systems and programs, and different software analysis and testing principles`;
const softEngDesc = `For my Software Engineering course our capstone project is to create a functional website of our choosing
                <br><br>
                My group and I decided on an adaptation of GoodReads, and are currently building the site with a Ruby on Rails framework
                <br><br>
                While participating in the development itself, I have taken on a leadership role in our iteration meetings, ensuring that we properly move from one sprint to the next`;
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
const OCSDesc = `For a year before the program, I trained almost every day to reach the physical state required to be accepted and succeed at Officer Candidate School
                <br><br>
                At Officer Candidate School I adjusted to the fast-paced and aggressive environment in which myself and other candidates were under constant pressure and stress from superiors
                <br><br>
                I polished my organization and communication skills while at OCS. I was able to prioritize tasks under heavy time constraints and communicate quickly and effectively with fellow candidates
                <br><br>
                While I was unable to finish the program due to personal reasons, my time there was invaluable and I was able to mature and develop as a person and a leader`;
const bRoomDesc = `Over the past three summers I have worked at a local restaurant, at first as a backserver but then promoted as an expediter
                <br><br>
                As an expediter I was the bridge between the chefs and the customer-facing staff. I ensured that the chefs were preparing the correct dishes on a satisfactory timeline, and that service staff properly delivered the food to the correct tables and seats
                <br><br>
                During busy nights I was able to hone my thinking and action under pressure, as I often had at least five different tasks at any given point, of which I had to understand their complex timeline in order to prioritize what I should do at any given point
                <br><br>
                Furthermore, I learned foster teamwork within a team of diverse backgrounds and perspectives. Some coworkers were 14 years old and others 60 years old, but we worked as an efficient team all the same`;
const habitatDesc = `This winter, I will be joining a week-long Habitat for Humanity service trip, where I'll work alongside other volunteers to help build and improve homes for families in need
                <br><br>
                Throughout the trip, I will contribute to construction efforts and engage directly with the local community, helping to create affordable housing and strengthen neighborhoods
                <br><br>
                I am excited for the chance to gain hands-on experience, learn more about housing challenges, and make a lasting impact by supporting Habitat for Humanity's mission of building a world where everyone has a decent place to live.`;
const letProjDesc = `As part of The Letter Project on campus, I have the unique opportunity to be a pen-pal to someone in jail, offering friendship and support through consistent correspondence
                <br><br>
                Through each letter, I hope to provide a connection to the outside world and offer encouragement. This experience has taught me the importance of empathy, communication, and building trust, even across challenging circumstances, and has deepened my understanding of resilience and the value of human connection.`;
const linkDesc = `This past fall, I served on the freshman orientation staff, or Link Staff, where I welcomed and guided new students through their first days on campus
                <br><br>
                After an intensive week of training, I spent four days guiding my group through orientation activities, creating a supportive and engaging environment
                <br><br>
                This role required enthusiasm, strong organizational skills, and effective time management to keep events running smoothly and on schedule. It also allowed me to grow my leadership skills as I helped students navigate their transition into college life, set goals, and get connected with campus resources`;

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
