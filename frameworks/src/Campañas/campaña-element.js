import { html, css, LitElement } from 'lit-element';
import campañaStyle from './Styles/campañaStyles';

class campañas extends LitElement {

  static get styles() {

    return [campañaStyle]

}

render() {
    return html`

 `;

}


}

customElements.define('campañas-element', campañas);