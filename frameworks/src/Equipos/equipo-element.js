import { html, css, LitElement } from 'lit-element';
import equipoStyles from './Styles/equipoStyles';

class equipos extends LitElement {

  static get styles(){
    return[equipoStyles]
}
render() {
return html`
<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>

<div class="bg-light vw-100 vh-100 d-flex">
  <div class="w-25 bg-grayWhite shadow-inset m-3 border-20 p-3">
      <div>
        <div class="d-flex">
          
          <button class="w-100 mt-5 p-3 text-big text-start border-10 border-0"><i class="fas fa-user mx-3"></i>Usuarios</button>
        </div>

        <div class="d-flex">
          
          <button class="w-100 mt-3 p-3 text-big text-start border-10 border-0"><i class="fas fa-user mx-3"></i>Campañas</button>
        </div>
          
        <div class="d-flex">
          
          <button class="w-100 mt-3 p-3 text-big text-start border-10 border-0"><i class="fas fa-user mx-3"></i>Equipos</button>
        </div>             
      </div>
  </div>
  <div class="w-75 bg-light d-flex flex-column m-3">
    <div class="d-flex justify-content-between m-3 h-25">
      <div class="container d-flex justify-content-center align-items-center h-100 w-100">
        <div class="h-50 w-50 bg-icon container d-flex justify-content-center align-items-center border-left text-center num-big"><p class="text-white">10 m</p></div>
        <div class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"><p class="text-white">Tiempo <br>llamadas</p></div>
      </div>
      <div class="container d-flex justify-content-center align-items-center h-100 w-100">
        <div class="h-50 w-50 bg-icon container d-flex justify-content-center align-items-center border-left text-center num-big"><p class="text-white">10 m</p></div>
        <div class="h-50 w-50 text-center container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"><p class="text-white">Tiempo <br>llamada actual</p></div>
      </div>
      <div class="container d-flex justify-content-center align-items-center h-100 w-100">
        <div class="h-50 w-50 bg-icon container d-flex justify-content-center align-items-center border-left text-center text-big"><p class="text-white">campaña 1</p></div>
        <div class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"><p class="text-white">Campañas <br>activas</p></div>
      </div>
    </div>
    <div class="h-75 bg-light border border-dark border-20 d-flex p-3 ">
      <div class="w-25 mx-1 border-20 border-1 border border-dark">
        <div class="d-flex flex-column p-3 bg-secondary border-20">
          <input class="m-2 p-2 border-10 border-0" placeholder="Número">
          <input class="m-2 p-2 border-10 border-0" placeholder="Nombre">
          <div class="d-flex justify-content-center aling-items-center">
            <button class="m-2 w-50  border-10 bg-icon text-white border-0 p-2">Buscar</button>
          </div>
        </div>
      </div>
      <div class="w-75 bg-light d-flex flex-column mx-3">
        <div>
        <button class="border-10 p-2 text-big border-1">Datos de llamada</button>
        <button class="bg-icon text-white p-2 text-big border-10 float-end px-5">10:00:00 <i class="fa-solid fa-clock fa-spin"></i></button>
        </div>
        <div class="bg-light mt-3 h-100 border border-dark border-20 d-flex flex-column">
        <div class="h-75 m-3 border-dark border">
            
        </div>
        <div class="h-25 m-3 border-dark border">
            
        </div>
        </div>
      </div>
    </div>
  </div>
</div>

 `;

}


}

customElements.define('equipos-element', equipos);