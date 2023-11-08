import { html, css, LitElement } from "lit-element";
import styles1 from "./Styles/styles1";

const usuariosTotales = [

  { nombre: "Usuario 1", estado: "Conectado" },
  { nombre: "Usuario 2", estado: "conectado" },
  { nombre: "Usuario 3", estado: "Conectado" },
  { nombre: "Usuario 3", estado: "Conectado" },
  { nombre: "Usuario 4", estado: "Ausente" },
  { nombre: "Usuario 5", estado: "Conectado" },
  { nombre: "Usuario 6", estado: "Conectado" },
  { nombre: "Usuario 7", estado: "Ausente" },
  { nombre: "Usuario 8", estado: "Conectado" },

];

const campañasActivas = [

  { nombre: "yoongi", estado: "activa" },
  { nombre: "tae", estado: "activa" },
  { nombre: "jimin", estado: "activa" },
  { nombre: "jin", estado: "inactiva" },
  { nombre: "hoseok", estado: "inactiva" },
  { nombre: "namjoon", estado: "activa" },
  { nombre: "jungkook", estado: "activa" },

];

const usuarios_conectados = usuariosTotales.filter((usuario) => usuario.estado === "Conectado");
const usuarios_totales = usuariosTotales;
const usuarios_ausentes = usuariosTotales.filter((usuario) => usuario.estado === "Ausente");
const campañas_activas = campañasActivas.filter((usuario) => usuario.estado === "activa");

class pagina1 extends LitElement {

  static get styles() {

    return [styles1];

  };


 ingresar_campaña (parameters) {

  const usuario=document.createElement('campañas-element');
            document.body.innerHTML='';
            document.body.appendChild(usuario);
  
}

ingresar_equipo (parameters) {

  const usuario=document.createElement('equipos-element');
            document.body.innerHTML='';
            document.body.appendChild(usuario);
  
}

ingresar_llamadas (parameters) {

  const usuario=document.createElement('pagina2-element');
            document.body.innerHTML='';
            document.body.appendChild(usuario);
  
}

ingresar_usuario (parameters) {

  const usuario=document.createElement('usuarios-element');
            document.body.innerHTML='';
            document.body.appendChild(usuario);
  
}

ingresar_clientes (parameters) {

  const usuario=document.createElement('pagina1-element');
            document.body.innerHTML='';
            document.body.appendChild(usuario);
  
}

  render() {
    
    return html`

      <style>

        @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
      
        </style>

        <!-- Contenedor principal -->

        <div id = "contenedorPagina">

            <div class ="" id = "contenedorPrincipal">
                
                <!-- Contenedor izquierdo -->
          
                <div class= "navbar-left navbar-nav pull-left" id = "contenedorIzquierdo">
          
                    <!-- Botones en el contenedor izquierdo -->

                    <button class="btn btn-primary mb-3" id="clientes-button" @click=${(e) => this.ingresar_clientes()}><i class="bi bi-people"></i> clientes </button>

                    <button class="btn btn-primary mb-3" id="llamadas-button" @click=${(e) => this.ingresar_llamadas()}><i class="bi bi-people"></i> llamadas </button>
          
                    <button class="btn btn-primary mb-3" id="usuarios-button" @click=${(e) => this.ingresar_usuario()}><i class="bi bi-people"></i> Usuarios </button>
                    
                    <button class="btn btn-primary mb-3" id="campañas-button" @click=${(e) => this.ingresar_campaña()}><i class="bi bi-megaphone"></i> Campañas </button> 
                    
                    <button class="btn btn-primary mb-3" id="equipos-button" @click=${(e) => this.ingresar_equipo()}><i class="bi bi-people"></i> Equipos </button>
                    
                </div>
                
                </div>
        
                <div class ="" id = "contenedorSecundario">
        
                    <!-- Espacios en la parte superior -->
          
                    <div class= "container-fluid list-inline" id = "cardsUsuarios">
                      
                      <div id = "usuariosConectados">
        
                        <div  id = "mitadDerecha">
        
                          Usuarios Conectados:
        
                        </div>
                        
                        <div  id = "mitadIzquierda"> ${usuarios_conectados.length} </div>
        
                      </div>
        
                      <div id ="usuariosAusentes" >
        
                        <div id = "mitadDerecha3" >
        
                          Usuarios Ausentes:
        
                        </div>
                        
                        <div id = "mitadIzquierda" > ${usuarios_ausentes.length} </div>
        
                      </div>
        
                      <div id="campañasActivas">
        
                        <div id = "mitadDerecha2">
        
                          Campañas Activas:
        
                        </div>
        
                        <div id = "mitadIzquierda2"> ${campañasActivas.length} </div>
        
                      </div>

                      <div id="usuarios_llamados">
        
                        <div id = "mitadDerecha4">
        
                          Usuarios llamados
        
                        </div>
        
                        <div id = "mitadIzquierda4"> ${usuariosTotales.length} </div>
        
                      </div>
        
                    </div>
                  
                  <!-- Contenedor derecho -->
          
                  <div class="pull-left panel-body" id = "contenedorDerecho">
        
                    <!-- Formulario en el contenedor derecho -->
          
                    <div class="navbar-form" id = "contenedorFormulario">
          
                      <div class="navbar-form" id = "formulario">
          
                        <label for="numero">Número:</label>
                        <input type="text" class="form-control" id="numero" />
        
                        <label for="nombre">Nombre:</label>
                        <input type="text" class="form-control" id="nombre" />

                        <br>
        
                        <button class="btn btn-primary"> Buscar </button>
                        
                      </div>
        
                      </div>
        
                      <!-- Botones en la parte superior del contenedor derecho -->
        
                      <div id = "segundo_contenedor">

                    <div id="filtrarNuevo" class = "container-fluid list-inline">
        
                      <button id="filtrar">Filtrar</button>
                      <button id="nuevo">Nuevo</button>
        
                    </div>
                                
                    <div id = "ultimoContenedor">
                      
                      Contenido del contenedor
                    
                    </div>

                  </div>

                  </div>
        
                  </div>

        </div>

    `;
  }

}

customElements.define("pagina1-element", pagina1);
