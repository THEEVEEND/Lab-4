import { AttributeImages } from "../images/images";


export enum AttributeCard {
    "anime_name" = "anime_name",
    "url" = "url",
}

export default class Card extends HTMLElement{
    anime_name: string = "";
    url: string = "";

    static get observedAttributes(){
        const attrs: Record <AttributeCard,null> = {
            anime_name: null,
            url: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeCard,
        _: unknown,
        newValue: string
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

        constructor(){
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback(){
            this.render();
        }

        render(){
            if(this.shadowRoot) this.shadowRoot.innerHTML = '';
            const container = this.ownerDocument.createElement('section');

            const images = this.ownerDocument.createElement("anime-image");
            images.setAttribute(AttributeImages.anime_name, this.anime_name);
            images.setAttribute(AttributeImages.url, this.url);

            container.appendChild(images);

            this.shadowRoot?.appendChild(container)
        }
}

customElements.define("anime-card", Card)