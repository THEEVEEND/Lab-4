import { getNeko } from "./data/data";
import { AttributeCard } from "./components/cards/cards";
import "../src/components/export"

class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){
        const data = await getNeko();
        this.render(data)
    }

    render(data:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        data.forEach((wink: any) => { 
            const card = this.ownerDocument.createElement("anime-card");
            card.setAttribute(AttributeCard.anime_name, wink.anime_name);
            card.setAttribute(AttributeCard.url, wink.url);
            this.shadowRoot?.appendChild(card);
        });
          
    }
}
customElements.define("app-container", AppContainer)