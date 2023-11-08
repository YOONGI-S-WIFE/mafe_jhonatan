import { html, css, LitElement } from 'lit-element';
import usuarioStyles from './styles/usuarioStyles';

class usuarios extends LitElement {

  static get styles() {

    return [usuarioStyles]

}

render() {
    
    return html`

 `;

}


}

customElements.define('usuarios-element', usuarios);