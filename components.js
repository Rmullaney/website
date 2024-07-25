class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .component {
                    background-color: darkred
                }
            </style>
            <header class="component">
                <p>
                    testing navbar custom element
                </p>
            </header>
        
        `;
    }
}

customElements.define('nav-bar', Navigation)