import { LitElement, html, css } from "lit-element";
import loginStyle from "./Styles/loginStyle";

export class LoginElement extends LitElement {

    constructor() {
        super();
        this.saludo="Inicio de sesión";
        this.mensaje="";
        this.recordarUsuario = false; 

    }

    static get properties(){

        return{
            
            saludo:{
               type: String
            },
            mensaje:{
                type: String
            } 
        }
    }

    static get styles() {
        return [loginStyle]
    }

    // Cargar usuario almacenado en localStorage

    cargarUsuarioGuardado() {
        const usuarioGuardado = localStorage.getItem('usuario');
        if (usuarioGuardado) {
            this.shadowRoot.querySelector('#usuario').value = usuarioGuardado;
            this.recordarUsuario = true;
        }
    }

    firstUpdated() {

        // Cargar usuario almacenado cuando la página se inicie
        
        this.cargarUsuarioGuardado();
    }

    ingresarLogin(){
        console.log("Entrando...")
        let usuario = this.shadowRoot.querySelector('#usuario').value;
        let password = this.shadowRoot.querySelector('#password').value;

        if(usuario == null || usuario == undefined || usuario == ''){

            this.mensaje ='Atención... Campo usuario esta vacio.';
            this.mostrarError();
            return false;
            
        } else {

            this.mensaje = 'todo esta bn';
            console.log("ya no");

        }
        
        if(password == null || password == undefined || password == ''){

            this.mensaje = 'Atención... Campo password esta vacio.';
            this.mostrarError();
            console.log("si");
            return false;

        } else {

            this.mensaje = 'todo esta bn';
            console.log("ya no");
            
            const usuario=document.createElement('pagina1-element');
            document.body.innerHTML='';
            document.body.appendChild(usuario);
            
            }

    }

    mostrarError() {
        return html`<div>${this.mensaje}</div>`;
    }
    
    render() {
        return html`
        
        <style>

        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
        
        </style>

        <div class="container position-relative" style = "height: 500px; width: 500px; margin-top: 150px;">
            <div class="position-absolute bottom-50 start-50 translate-middle z-index-1" ><img src="./src/img/icon.png" style="height: 200px; width: 200px; margin-top: 215px;"></div>
                <div class="container border border-0 rounded px-5 py-5 bg-light position-relative">
            
                    <center><h2>Iniciar Sesión</h2></center>
                    <div class="mb-3 mt-5 d-flex">
                        <span class="input-group-text bg-icon"><i class="fa-solid fa-user" style="color: #FF7400"></i></span>
                        <input type="text" id="usuario" name="usuario" class="w-100 rounded form-control bg-input placeholder-white" placeholder="usuario" required>
                    </div>

                    <div class="mb-3 d-flex">
                        <span class="input-group-text bg-icon"><i class="fas fa-lock style="color: #FF7400"></i></span>
                        <input type="password" id="password" name="password" class="w-100 rounded form-control bg-input placeholder-white" placeholder="password" required>
                    </div>

                    <div class="d-flex justify-content-between">
                        <div class="form-check">
                            <input type="checkbox" name="remember" id="remember" class="form-check-input" @change=${this.recordarUsuarioCambiado}>
                            <label for="remember" class="form-check-label" >Recordar</label>
                        </div>
                        <div class="mi-auto">
                            <span>Recuperar contraseña</span>
                        </div>

                    </div>

                   ${this.mostrarError()} 

                </div>
                
                <button id="btn-login" class="btn position-absolute start-50 translate-middle-x mt-1 w-25 bottom-rounded p-3 text-blue" style="background-color: #FF7400;" @click=${(e)=>this.ingresarLogin()}><strong>INGRESAR<strong></button>
                    
            </div>
        </div>
    `
    }

    recordarUsuarioCambiado(e) {
        this.recordarUsuario = e.target.checked;
    }

}

customElements.define('login-element', LoginElement);