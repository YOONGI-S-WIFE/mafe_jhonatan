import { html, css, LitElement } from "lit-element";
import styles1 from "./Styles/styles1";

class pagina1 extends LitElement {

  ingresarMainPage2() {
    const mainPage2 = document.createElement("main-element2");
    document.body.innerHTML = "";
    document.body.appendChild(mainPage2);
  }

  abrirModal() {
    const miModal = this.shadowRoot.querySelector("#miModal");
    miModal.style.display = "block";
  }

  cerrarModal() {
    const miModal = this.shadowRoot.querySelector("#miModal");
    miModal.style.display = "none";
  }

  abrirModalCamp() {
    const miModalCamp = this.shadowRoot.querySelector("#miModalCamp");
    miModal.style.display = "block";
  }

  cerrarModalCamp() {
    const miModalCamp = this.shadowRoot.querySelector("#miModalCamp");
    miModal.style.display = "none";
  }

  abrirModalEquipos() {
    const miModalEquipos = this.shadowRoot.querySelector("#miModalEquipos");
    miModalEquipos.style.display = "block";
  }
  
  cerrarModalEquipos() {
    const miModalEquipos = this.shadowRoot.querySelector("#miModalEuipos");
    miModalEquipos.style.display = "none";
  }

  static get styles() {
    return [styles1];
  }

  static get properties() {
    return {
      usuarios: { type: Array },
      identifi: { type: String },
      nombre: { type: String },
      campaña: { type: String },
      estado: { type: String },
      tel: { type: String },
      datos: { type: String },
      campañas: { type: Array },
      filtroCampaña: { type: String },
      mostrarFormulario: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.usuarios = [];
    this.identifi = "";
    this.nombre = "";
    this.campaña = "";
    this.estado = "";
    this.tel = "";
    this.datos = "";
    this.campañas = [];
    this.filtroCampaña = ""; // Inicialmente sin filtro
    this.mostrarFormulario = false; // Inicialmente ocultar el formulario
    this.mostrarFormularioCamp = false; 
    this.mostrarFormularioEquipos = false;
  }

  actualizarCampaña(e) {
    this.filtroCampaña = e.target.value;
  }

  aplicarFiltro() {
    // Filtrar usuarios según la campaña seleccionada
    if (this.filtroCampaña) {
      this.usuarios = this.usuarios.filter(
        (usuario) => usuario.campaña === this.filtroCampaña
      );
    } else {
      // Si no se selecciona ninguna campaña, mostrar todos los usuarios
      this.usuarios = [...this.usuarios];
    }
  }

  abrirFormulario() {
    this.mostrarFormulario = true;
  }

  cerrarFormulario() {
    this.mostrarFormulario = false;
  }

  abrirFormularioCamp() {
    this.mostrarFormularioCamp = true;
  }

  cerrarFormularioCamp() {
    this.mostrarFormulariocamp = false;
  }

  abrirFormularioEquipos() {
    this.mostrarFormularioEquipos = true;
  }
  
  cerrarFormularioEquipos() {
    this.mostrarFormularioEquipos = false;
  }
  
  registrarUsuario() {
    if (
      this.identifi &&
      this.nombre &&
      this.campaña &&
      this.estado &&
      this.tel
    ) {
      const nuevoUsuario = {
        identifi: this.identifi,
        nombre: this.nombre,
        campaña: this.campaña,
        estado: this.estado,
        tel: this.tel,
      };
      this.usuarios = [...this.usuarios, nuevoUsuario];
      console.log(this.usuarios);

      // Limpia los campos después de registrar
      this.identifi = "";
      this.nombre = "";
      this.campaña = "";
      this.estado = "";
      this.tel = "";
      this.actualizarEstadoUser();

      // Cierra el formulario después de registrar
      this.cerrarFormulario();
      this.tablaUser(1);
    }
  }

  registrarCampaña() {
    if (
      this.nombrecampaña &&
      this.tiempo &&
      this.equipocampaña &&
      this.estadocampaña
    ) {
      const nuevaCamp = {
        nombrecampaña: this.nombrecampaña,
        tiempo: this.tiempo,
        equipocampaña: this.equipocampaña,
        estadocampaña: this.estadocampaña,
      };
      this.campañas = [...this.campañas, nuevaCamp];
    }
  }

  registrarEquipo() {
    if (
      this.identificacion_equipo &&
      this.numero_integrantes &&
      this.estado_equipo &&
      this.campaña_equipo
    ) {
      const nuevoEquipo = {
        identificacion_equipo: this.identificacion_equipo,
        numero_integrantes: this.numero_integrantes,
        estado_equipo: this.estado_equipo,
        campaña_equipo: this.campaña_equipo,
      };
      this.equipos = [...this.equipos, nuevoEquipo];
    }
  }

  actualizarEstadoUser(){
    const usuarioActivo = this.usuarios.filter((usuario)=>usuario.estado==='activo').length;
    const usuarioInactivo = this.usuarios.filter((usuario)=>usuario.estado==='inactivo').length;

    this.shadowRoot.querySelector('#actualizar').textContent=usuarioActivo;
    this.shadowRoot.querySelector('#actualizar1').textContent=usuarioInactivo;
  }

  tablaUser(y) {
    if (y == 1) {
      this.datos = html`
        <table class="m-5 table table-striped table-bordered w-75">
          <thead>
            <tr>
              <th>Identificación</th>
              <th>Nombre</th>
              <th>Campaña</th>
              <th>Estado</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            ${this.usuarios.map(
              (usuario) => html`
                <tr>
                  <td>${usuario.identifi}</td>
                  <td>${usuario.nombre}</td>
                  <td>${usuario.campaña}</td>
                  <td>${usuario.estado}</td>
                  <td>${usuario.tel}</td>
                </tr>
              `
            )}
          </tbody>
        </table>
      `;
    }
    return this.datos;
  }

  BotonActivar(campaña) {
    const index = this.campaña.indexOf(campaña);
    if (index !== 1) {
      this.campaña[index].estadocampaña = "activo";
      console.log(`Se activo la campaña ${campaña.nombrecampaña}`);
      this.tablaCampañas(2);
      this.actualizarEstadoCampaña();
    }
  }

  BotonDesactivar(campaña) {
    const index = this.campaña.indexOf(campaña);
    if (index !== 1) {
      this.campaña[index].estadocampaña = "inactivo";
      console.log(`Se inactivo la campaña ${campaña.nombrecampaña}`);
      this.tablaCampañas(2);
      this.actualizarEstadoCampaña();
    }
  }

  tablaCampañas(y) {
    if (y == 1) {
      this.datos = html`
        <table class="m-5 table table-striped table-bordered w-75">
          <thead>
            <tr>
              <th>Nombre Campaña</th>
              <th>Tiempo</th>
              <th>Equipo</th>
              <th>Estado</th>
              <th>Activar</th>
              <th>Desactivar</th>
            </tr>
          </thead>
          <tbody>
            ${this.campañas.map(
              (campañas) => html`
                  <tr>
                    <td>${campañas.nombre_campaña}</td>
                    <td>${campañas.tiempo}</td>
                    <td>${campañas.equipo}</td>
                    <td>${campañas.estado}</td>
                    <td><button @click-'${() => this.fu}'>Activar</button></td>
                    <td><button @click-'${() =>
                      this.fu}'>Desactivar</button></td>
                  </tr>
                `
            )}
          </tbody>
        </table>
      `;
    }
    return this.datos;
  }

  tablaEquipos(y) {
    if (y == 1) {
      this.datos = html`
        <table class="m-5 table table-striped table-bordered w-75">
          <thead>
            <tr>
              <th>Identificacion del Equipo</th>
              <th>Numero de Integrantes</th>
              <th>Estado del Equipo</th>
              <th>Campaña del Equipo</th>
            </tr>
          </thead>
          <tbody>
            ${this.equipos.map(
              (equipos) => html`
                  <tr>
                    <td>${equipos.identificacion_equipo}</td>
                    <td>${equipos.numero_integrantes}</td>
                    <td>${equipos.estado_equipo}</td>
                    <td>${equipos.campaña_equipo}</td>
                  </tr>
                `
            )}
          </tbody>
        </table>
      `;
    }
    return this.datos;
  }

  render() {
    return html`
      <style>
        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
      </style>

      <div class="bg-fondo vw-100 vh-100 d-flex">
        <div class="bg-secondary1 w-25  m-3 border-20 p-3">
          <div class="bg-color-secondary">
            <button
              @click="${(e) => this.tablaUser(1)}"
              class="w-100 mt-5 p-2 border-10"
            >
              <i class="fas fa-user"></i>Usuarios
            </button>
            <button
              @click="${(e) => this.tablaCampañas(1)}"
              class="w-100 mt-5 p-2 border-10"
            >
              <i class="fas fa-bullhorn"></i>Campañas
            </button>
            <button
              @click="${(e) => this.tablaEquipos(1)}"
              class="w-100 mt-5 p-2 border-10"
            >
              <i class="fas fa-user"></i>Equipos
            </button>
            <br /><br />
          </div>
        </div>

        <div class="bg-color-dark w-75  d-flex flex-column m-3">
          <div class="d-flex justify-content-between m-3 h-25">
            <div
              class="container d-flex justify-content-center align-items-center h-100 w-100"
            >
              <div
                class="h-70 w-70 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big"
              >
                <p class="text-white" id="actualizar">0</p>
              </div>
              <div
                class="h-70 w-70 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"
              >
                <p class="text-white">Usuarios <br />Conectados</p>
              </div>
            </div>

            <div
              class="container d-flex justify-content-center align-items-center h-100 w-100"
            >
              <div
                class="h-70 w-70 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big"
              >
                <p class="text-white" id="actualizar1">0</p>
              </div>
              <div
                class="h-70 w-70 text-center container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"
              >
                <p class="text-white">Usuarios <br />Ausentes</p>
              </div>
            </div>

            <div
              class="container d-flex justify-content-center align-items-center h-100 w-100"
            >
              <div
                class="h-70 w-70 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big"
              >
                <p class="text-white">0</p>
              </div>
              <div
                class="h-70 w-70 text-center container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"
              >
                <p class="text-white">Numero<br />Llamadas</p>
              </div>
            </div>

            <div
              class="container d-flex justify-content-center align-items-center h-100 w-100"
            >
              <div
                class="h-70 w-70 bg-icon1 container d-flex justify-content-center align-items-center border-left text-center num-big "
              >
                <p class="text-white">0</p>
              </div>
              <div
                class="h-70 w-70 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"
              >
                <p class="text-white">Campañas <br />Activas</p>
              </div>
            </div>
          </div>
          <div class="bg-primary1 h-75 d-flex p-3">
            <div class="w-25 mx-3 border-20 border-1 border border-white  ">
              <div class="d-flex flex-column p-3 bg-color-secondary border-20">
                <div class="d-flex flex-row">
                  <i class="fas fa-hashtag" style="color: #d1ccccb9;"></i>
                  <input
                    class="m-2 p-2 border-10 border-0"
                    type="text"
                    placeholder="Numero"
                    style="width: 180px;"
                  />
                </div>

                <div class="d-flex flex-row">
                  <i class="fas fa-user" style="color: #d1ccccb9;"></i>
                  <input
                    class="m-2 p-2 border-10 border-0"
                    placeholder="Nombre"
                    style="width: 180px;"
                  />
                </div>

                <div class="d-flex justify-content-center aling-items-center">
                  <button
                    class="m-2 w-50  border-10 bg-icon text-white border-0 p-2"
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </div>
            <div class="w-75 bg-secondary d-flex flex-column">
              <br />
              <div class="row">
                <div class="col" style="margin: 10px;">
                  <select
                    id="selectCampaña"
                    .value="${this.filtroCampaña}"
                    @change="${this.actualizarCampaña}"
                  >
                    <option value="">Todas las Campañas</option>
                    ${this.campañas.map(
                      (c) => html`
                        <option value="${c.nombre}">${c.nombre}</option>
                      `
                    )}
                  </select>
                </div>

                <div class="col" style="margin: 10px;">
                  <button
                    id="botonFiltrar"
                    class="bg-icon text-white p-2 text-big border-10"
                    @click="${this.aplicarFiltro}"
                  >
                    Filtrar <i class="fas fa-gear fa-spin"></i>
                  </button>
                </div>

                <div class="col" style="margin: 10px;">
                  <button
                    id="botonAbrirModalCamp"
                    class="bg-icon text-white p-2 text-big border-10 float-end"
                    @click="${this.abrirFormularioCamp}"
                  >
                    Campaña <i class="fas fa-plus fa-beat-fade"></i>
                  </button>
                </div>

                <div class="col" style="margin: 10px;">
                  <button
                    id="botonAbrirModal"
                    class="bg-icon text-white p-2 text-big border-10 float-end"
                    @click="${this.abrirFormulario}"
                  >
                    Nuevo <i class="fas fa-plus fa-beat-fade"></i>
                  </button>
                </div>
                <div
        class="bg-color-secondary1 d-flex justify-content-center  align-items-center h-100"
      >
        <div class="border-dark col   w-75 h-75">${this.tablaUser(0)}
              </div>
              
            </div>
            
          </div>
      
        </div>
        
      </div>
      <div
        id="miModal"
        class="modal"
        style="display: ${this.mostrarFormulario ? "block" : "none"}"
      >
        <div class="modal-dialog">
          <div
            class="modal-content h-50 d-flex justify-content-center aling-item-center"
          >
            <button
              class="color  bg-transparent border-0"
              @click="${this.cerrarFormulario}"
            >
              X
            </button>
            <div>
              <!-- Formulario para ingresar datos de usuario -->
              <label>Identificación de Usuario:</label>
              <input
                type="text"
                .value="${this.identifi}"
                @input="${(e) => (this.identifi = e.target.value)}"
              /><br />

              <label>Nombre de Usuario:</label>
              <input
                type="text"
                .value="${this.nombre}"
                @input="${(e) => (this.nombre = e.target.value)}"
              /><br />

              <label>Campaña de Usuario:</label>
              <input
                type="text"
                .value="${this.campaña}"
                @input="${(e) => (this.campaña = e.target.value)}"
              /><br />

              <label>Estado de Usuario:</label>
              <input
                type="text"
                .value="${this.estado}"
                @input="${(e) => (this.estado = e.target.value)}"
              /><br />

              <label>Teléfono de Usuario:</label>
              <input
                type="text"
                .value="${this.tel}"
                @input="${(e) => (this.tel = e.target.value)}"
              /><br />

              <button @click="${this.registrarUsuario}">Registrar</button>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
      </div>
      </div>

    `;
  }

}

customElements.define("pagina1-element", pagina1);
