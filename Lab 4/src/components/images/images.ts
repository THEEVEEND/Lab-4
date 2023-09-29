export enum AttributeImages {
    "anime_name" = "anime_name",
    "url" = "url",
}

export default class Images extends HTMLElement {
    anime_name?: string;
    url?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeImages, null> = {
            anime_name: null,
            url: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeImages,
        _: unknown,
        newValue: string
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/dist/images.css">
                <section>
                <h1>${this.anime_name}</h1>
                <img src="${this.url}">
                </section>
            `
        }
        
    }
    
}

customElements.define("anime-image",Images);