import { html, css, LitElement } from 'lit-element';
import equipoStyles from './Styles/equipoStyles';

class equipos extends LitElement {

  static get styles() {

    return [equipoStyles]

}

render() {
    return html`

 `;

}


}

customElements.define('equipos-element', equipos);