import { html, css, LitElement } from 'lit-element';
import campañaStyle from './Styles/campañaStyles';

class campañas extends LitElement {

  Constructor(){
    super();
    this.objetoUsuarios={
      Usuarios:[
          {
          id:'1',
          nombre:'Brayan',
          numeroTel:'3214243125',
          direccion:'Carrera 6',
          estado: '1',
          idCampaña:'1',
          campaña:'Q-Vision Huellas al rescate'
        },
        {
          id:'2',
          nombre:'Hector',
          numeroTel:'51412421421',
          direccion:'Carrera 6',
          estado: '2',
          idCampaña:'1',
          campaña:'Q-Vision Huellas al rescate'
        },
        {
          id:'3',
          nombre:'Juan',
          numeroTel:'421521412441',
          direccion:'Carrera 6',
          estado: '1',
          idCampaña:'1',
          campaña:'Q-Vision Huellas al rescate'
        },
        {
          id:'4',
          nombre:'Laura',
          numeroTel:'421421421444',
          direccion:'Carrera 6',
          estado: '1',
          idCampaña:'1',
          campaña:'Q-Vision Huellas al rescate'
        },
        {
          id:'5',
          nombre:'Mafe',
          numeroTel:'421421412414',
          direccion:'Carrera 6',
          estado: '2',
          idCampaña:'2',
          campaña:'Prueba'
        },
        {
          id:'6',
          nombre:'Sebas',
          numeroTel:'421421122155',
          direccion:'Carrera 6',
          estado: '2',
          idCampaña:'2',
          campaña:'Prueba'
        },
        {
          id:'6',
          nombre:'Sebas',
          numeroTel:'54645646464',
          direccion:'Carrera 6',
          estado: '2',
          idCampaña:'2',
          campaña:'Prueba'
        }
        ],
        Camapañas:[
          {
            id: '1',
            nombreCamapaña: 'Q-Vision Huellas al rescate',
            director:'Brayan',
            empresa: 'Q-Vision',
            equipo:'1',
            estado:'1',
            fechaDeInicio:'22-10-2023',
            fechaDeFin:'10-12-2023'
          },
          {
            id: '2',
            nombreCamapaña: 'Prueba',
            director:'Hector',
            empresa: 'Q-Vision',
            equipo:'2',
            estado:'2',
            fechaDeInicio:'22-10-2023',
            fechaDeFin:'10-12-2023'
          },          {
            id: '3',
            nombreCamapaña: 'Prueba2',
            director:'Juan',
            empresa: 'Globant',
            equipo:'2',
            estado:'1',
            fechaDeInicio:'22-10-2023',
            fechaDeFin:'10-12-2023'
          }
        ],
        Equipos:[
          {
            id:'1',
            idCampaña:'1',
            nombreCamapaña:'Q-Vision Huellas al restcate',
            integrante1:'Estiven',
            integrante2:'Arley',
            integrante3:'Mateo',
            integrante4:'Vanessa'
          }
        ]
      }

    

      this.usuariosConectados=this.calcularusuariosConectados();
      this.usuariosAusentes=this.calcularusuariosAusentes();
      this.usuariosLlamados=0
      this.campañasActivas=this.calcularCampañasActivas();
      this.campañasDesactivadas=this.calcularCamapañasDesactivadas();
      this.hola='';
      this.tablaFiltrada='';
      this.resultadoBusqueda='';
      this.tablaFiltradaCamapaña='';
      this.tablaEquipos='';


  }

  static get styles(){
    return[campañaStyle]
}


  static get properties(){
    return{
        usuariosConectados:{
          type: String
        },
        usuariosAusentes:{
          type: String
        },
        campañasActivas:{
          type: String
        },
        objetoUsuarios:{
          type:Object
        },
        hola:{
          type:String
        },
        tablaFiltrada:{
          type:String
        },
        resultadoBusqueda:{
          type:String
        },
        tablaFiltradaCamapaña:{
          type:String
        },
        tablaEquipos:{
          type:String
        }
    }
}

calcularusuariosConectados(){
  let usuariosConectados = 0;
  for (let usuario of this.objetoUsuarios.Usuarios) {
  if (usuario.estado === '1') {
    usuariosConectados += 1;
  }
}

return usuariosConectados
}
calcularusuariosAusentes(){
  let  usuariosAusentes = 0;
  for (let usuario of this.objetoUsuarios.Usuarios) {
    if (usuario.estado === '2') {
      usuariosAusentes += 1;
    }
  }

  return usuariosAusentes
}



calcularCamapañasDesactivadas(){
  let  campañasDesactivadas = 0;
  for (let camapaña of this.objetoUsuarios.Camapañas) {
    if (camapaña.estado === '2') {
      camapaña += 1;
    }
  }
  return campañasDesactivadas
}
calcularCampañasActivas(){
  let  campañasActivas = 0;
  for (let camapaña of this.objetoUsuarios.Camapañas) {
    if (camapaña.estado === '1') {
      campañasActivas += 1;
    }
  }

  return campañasActivas
}

getCampañaActiva(campañaId) {
  const campaña = this.objetoUsuarios.Camapañas.find(camapañaActiva => camapañaActiva.id === campañaId);
  return campaña ? campaña.estado === '1' : false;
}


  mostrarUsuarios(y){
    
    if(y==1){
      this.tablaFiltradaCamapaña=html``
      this.tablaFiltrada=html``
      this.tablaEquipos=html``
      this.hola= html`
      <table class="w-100 table table-hover" style="border: 1px solid black">
        <tr class="thead-dark">
          <th class="">Id</th>
          <th class="">Nombre</th>
          <th class="">Numero de telefono</th>
          <th class="">Campaña</th>
          <th class="">Otros datos</th>
        </tr>
        ${this.objetoUsuarios.Usuarios.filter(usuario => this.getCampañaActiva(usuario.idCampaña)).map(
          (usuario) => html`
          <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.numeroTel}</td>
            <td>${usuario.campaña}</td>
            <td><button class="bg-icon text-white p-2 border-10" @click=${() => this.modalInfoUsuarios(usuario.id)}>Ver mas</button></td>
          </tr>
          <div class="modal" id="modalUsuario${usuario.id}">
            <div class="modal-dialog modal-dialog-centered bg-transparent" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Información del Usuario</h5>
                  <button type="button" @click=${() => this.cerrarmodalInfoUsuarios(usuario.id)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>ID: ${usuario.id}</p>
                  <p>Nombre: ${usuario.nombre}</p>
                  <p>Número de teléfono: ${usuario.numeroTel}</p>
                  <p>Dirección: ${usuario.direccion}</p>
                  <p>Estado: ${usuario.estado}</p>
                  <p>Campaña: ${usuario.campaña}</p>
                </div>
              </div>
            </div>
          </div>
          `
        )}
      </table>
      `
      
    }
    return this.hola
    
  }

  modalInfoUsuarios(id){
    let modalId=`#modalUsuario${id}`
    let modal=this.shadowRoot.querySelector(modalId)

    modal.style.display="block"
    modal.style.background="rgb(0,0,0,0.7)"
    
  }
  cerrarmodalInfoUsuarios(id){
    let modalId=`#modalUsuario${id}`
    let modal=this.shadowRoot.querySelector(modalId)

    modal.style.display="none"
    modal.style.background="none"
  }

  abrirAgregarUsuario(){
    let modal=this.shadowRoot.querySelector("#agregarUsuarioModal")
    modal.style.display="block"
    modal.style.background="rgb(0,0,0,0.7)"

  }
  cerrarAgregarUsuario(){
    let modal=this.shadowRoot.querySelector("#agregarUsuarioModal")
    modal.style.display="none"
    modal.style.background="none"
  }
  
  mostrarLlamadaConectada(usuario) {
    const llamadaConectadaDiv = this.shadowRoot.querySelector(`#div1-${usuario}`);
    const conectandoLlamadaDiv = this.shadowRoot.querySelector(`#div2-${usuario}`);
    llamadaConectadaDiv.style.display = "block";
    conectandoLlamadaDiv.style.display = "none";
  }
  
  abrirLlamarUsuario(usuario) {
    const modal = this.shadowRoot.querySelector(`#llamarUsuarioModal-${usuario}`);
    modal.style.display = "block";
    modal.style.background = "rgb(0,0,0,0.7)";
    setTimeout(() => this.mostrarLlamadaConectada(usuario), 3000);
  }
  
  agregarUsuarioLlamado(usuario) {
    this.usuariosLlamados += 1;
    this.requestUpdate();
    this.cerrarLlamarUsuario(usuario);
  }
  
  cerrarLlamarUsuario(usuario) {
    const modal = this.shadowRoot.querySelector(`#llamarUsuarioModal-${usuario}`);
    modal.style.display = "none";
    modal.style.background = "none";
  }
  
  abrirAgregarCampaña() {
    const modal = this.shadowRoot.querySelector(`#modalAgregarCamapaña`);
    modal.style.display = "block";
    modal.style.background = "rgb(0,0,0,0.7)";

  }

  cerrarAgregarCampaña() {
    const modal = this.shadowRoot.querySelector(`#modalAgregarCamapaña`);
    modal.style.display = "none";
    modal.style.background = "none";
  }

  abrirAgregarEquipo() {
    const modal = this.shadowRoot.querySelector(`#modalAgregarEquipo`);
    modal.style.display = "block";
    modal.style.background = "rgb(0,0,0,0.7)";

  }

  cerrarAgregarEquipo() {
    const modal = this.shadowRoot.querySelector(`#modalAgregarEquipo`);
    modal.style.display = "none";
    modal.style.background = "none";
  }

  agregarUsuario(){
    let nombreInput=this.shadowRoot.querySelector("#nombre");
    let telefonoInput=this.shadowRoot.querySelector("#tel");
    let direccionInput=this.shadowRoot.querySelector("#dire");
    let estadoInput=this.shadowRoot.querySelector("#estado");
    let idCampaña=this.shadowRoot.querySelector('#idcampaña')
    let campañaInput=this.shadowRoot.querySelector("#campaña");


    let nombre = nombreInput.value;
    let telefono = telefonoInput.value;
    let direccion = direccionInput.value;
    let estado = estadoInput.value;
    let idcampaña=idCampaña.value;
    let campaña = campañaInput.value;

    let id=this.objetoUsuarios.Usuarios.length+1
    console.log(id)

    const nuevoUsuario={
      id:id,
      nombre:nombre,
      numeroTel:telefono,
      direccion:direccion,
      estado:estado,
      idCampaña:idcampaña,
      campaña:campaña
    }
    this.objetoUsuarios.Usuarios.push(nuevoUsuario);

    this.usuariosConectados = this.calcularusuariosConectados();
    this.usuariosAusentes = this.calcularusuariosAusentes();

    nombreInput.value=''
    telefonoInput.value=''
    direccionInput.value=''
    estadoInput.value=''
    campañaInput.value=''

    this.mostrarUsuarios(1)
    this.requestUpdate();
    this.cerrarAgregarUsuario();


  }

  agregarCampaña(){
    let nombreInput=this.shadowRoot.querySelector("#nombrecampaña");
    let directorInput=this.shadowRoot.querySelector("#director");
    let empresaInput=this.shadowRoot.querySelector("#empresacampaña");
    let equipoInput=this.shadowRoot.querySelector("#equipocampaña");
    let estadocampañaInput=this.shadowRoot.querySelector('#estadocampaña');
    let fechaInicioInput=this.shadowRoot.querySelector("#fechaInicio");
    let fechaFinInput=this.shadowRoot.querySelector("#fechaFin");


    let nombre = nombreInput.value;
    let director = directorInput.value;
    let empresa = empresaInput.value;
    let equipo = equipoInput.value;
    let estado=estadocampañaInput.value;
    let fechaDeInicio = fechaInicioInput.value;
    let fechaDeFin = fechaFinInput.value;

    let id=this.objetoUsuarios.Camapañas.length+1
    console.log(id)

    const nuevaCampaña={
      id: id,
      nombreCamapaña: nombre,
      director:director,
      empresa: empresa,
      equipo:equipo,
      estado:estado,
      fechaDeInicio:fechaDeInicio,
      fechaDeFin:fechaDeFin
    }
    this.objetoUsuarios.Camapañas.push(nuevaCampaña);

    this.campañasActivas=this.calcularCampañasActivas()

    nombreInput.value=''
    directorInput.value=''
    empresaInput.value=''
    equipoInput.value=''
    estadocampañaInput.value=''
    fechaInicioInput.value=''
    fechaFinInput.value=''

    this.campañasActivas=this.calcularCampañasActivas()
    this.mostrarTablaCampañas(1)
    this.cerrarAgregarCampaña();
  }

  agregarEquipo(){
    let idCampañaInput=this.shadowRoot.querySelector("#idcampañaEquipo");
    let nombreCamapañaInput=this.shadowRoot.querySelector("#campañaEquipo");
    let integrante1Input=this.shadowRoot.querySelector("#integrante1");
    let integrante2Input=this.shadowRoot.querySelector("#integrante2");
    let integrante3Input=this.shadowRoot.querySelector('#integrante3');
    let integrante4Input=this.shadowRoot.querySelector("#integrante4");
   


    let idcampaña = idCampañaInput.value;
    let nombrecampaña = nombreCamapañaInput.value;
    let integrante1 = integrante1Input.value;
    let integrante2 = integrante2Input.value;
    let integrante3 =integrante3Input.value;
    let integrante4 = integrante4Input.value;


    let id=this.objetoUsuarios.Equipos.length+1
    console.log(id)

    const nuevoEquipo={
      id:id,
      idCampaña:idcampaña,
      nombreCamapaña:nombrecampaña,
      integrante1:integrante1,
      integrante2:integrante2,
      integrante3:integrante3,
      integrante4:integrante4
    }
    this.objetoUsuarios.Equipos.push(nuevoEquipo);

    idCampañaInput.value=''
    nombreCamapañaInput.value=''
    integrante1Input.value=''
    integrante2Input.value=''
    integrante3Input.value=''
    integrante4Input.value=''

    this.mostrarTablaEquipos(1)
    this.cerrarAgregarEquipo();
  }

  buscarUsuario(){
    let nombreInput=this.shadowRoot.getElementById("buscarNombre")
    let numeroInput=this.shadowRoot.getElementById("buscarTel")

    let nombre=nombreInput.value;
    let numero=numeroInput.value

    const usuarioEncontrado = this.objetoUsuarios.Usuarios.find(usuario => {
      return usuario.nombre === nombre && usuario.numeroTel === numero;
    });
  
    if (usuarioEncontrado) {
      this.resultadoBusqueda = html`
      <div class="m-2 border border-10 bg-input text-white p-2">
      <h5>Usuario encontrado</h5>
      <p> <strong>Nombre:</strong> <br>${usuarioEncontrado.nombre} <br>
      <strong>N° telefono:</strong> <br>${usuarioEncontrado.numeroTel} <br>
      <strong>campaña:</strong> <br>${usuarioEncontrado.campaña}<br>
      </p>
      <div class="d-flex aling-items-center justify-content-center">
        <button class="bg-icon text-white p-2 border-10" @click=${(e)=>this.abrirLlamarUsuario(usuarioEncontrado.id)}>Llamar</button>
      </div>
    </div>
    ${console.log(usuarioEncontrado.estado)}
    ${usuarioEncontrado.estado==1  ? html `
    <div class="modal" id="llamarUsuarioModal-${usuarioEncontrado.id}">
      <div class="modal-dialog modal-dialog-centered bg-transparent" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Llamando usuario</h5>
            <button type="button" @click=${(e)=>this.cerrarLlamarUsuario(usuarioEncontrado.id)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div id="div2-${usuarioEncontrado.id}" style="display:block;">
              <h1>conectando a la llamada...por favor espere.</h1>
            </div>
            <div id="div1-${usuarioEncontrado.id}" style="display:none;">
              <div>
                <h2>Llamada conectada con el usuario ${usuarioEncontrado.nombre}</h2>
                <i class="fa-solid fa-volume-high float-end w-25 fa-5x mb-3"></i>
              </div>
              <div class="d-flex justify-content-center align-items-center mt-3" >
                <button class="bg-icon text-white p-2 border-10" @click=${(e)=>this.agregarUsuarioLlamado(usuarioEncontrado.id)}>Finalizar llamada</buttton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`: html`
    <div class="modal" id="llamarUsuarioModal-${usuarioEncontrado.id}">
    <div class="modal-dialog modal-dialog-centered bg-transparent" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Llamando usuario</h5>
          <button type="button" @click=${(e)=>this.cerrarLlamarUsuario(usuarioEncontrado.id)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <h1>Usuario ausente, lo sentimos.</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}`
  nombreInput.value=''
  numeroInput.value=''
    } else {
      this.resultadoBusqueda= html`
      <div class="m-2 border border-10 bg-input text-white p-2">
        <h3>Usuario no encontrado</h3>
      </div>
    `
    }
    nombreInput.value=''
    numeroInput.value=''
  }

  ingresarCampañas() {
    const mainPage2 = document.createElement('main-2');
    document.body.innerHTML = ''; 
    document.body.appendChild(mainPage2);
  }
  filtrarUsuPorCampaña(y){

    this.hola=html``
  
    if(y==1){  
      this.tablaFiltradaCamapaña=html``
      this.tablaEquipos=html``
      let campañaSeleccionada=this.shadowRoot.querySelector("#campañaSeleccionada").value
      
      if(campañaSeleccionada!=="0"){
        this.tablaFiltrada= html`
        <table class="w-100 table table-hover" style="border: 1px solid black">
        <tr>
          <th class="">Id</th>
          <th class="">Nombre</th>
          <th class="">Numero de telefono</th>
          <th class="">Campaña</th>
          <th class="">Otros datos</th>
        </tr>
        ${this.objetoUsuarios.Usuarios.filter((usuarioC)=>usuarioC.idCampaña==campañaSeleccionada).map(
          (usuario) => html`
          <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.numeroTel}</td>
            <td>${usuario.campaña}</td>
            <td><button class="bg-icon text-white p-2 border-10" @click=${() => this.modalInfoUsuarios(usuario.id)}>Ver mas</button></td>
          </tr>
          <div class="modal" id="modalUsuario${usuario.id}">
            <div class="modal-dialog modal-dialog-centered bg-transparent" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Información del Usuario</h5>
                  <button type="button" @click=${() => this.cerrarmodalInfoUsuarios(usuario.id)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>ID: ${usuario.id}</p>
                  <p>Nombre: ${usuario.nombre}</p>
                  <p>Número de teléfono: ${usuario.numeroTel}</p>
                  <p>Dirección: ${usuario.direccion}</p>
                  <p>Estado: ${usuario.estado}</p>
                  <p>Campaña: ${usuario.campaña}</p>
                </div>
              </div>
            </div>
          </div>
          `
        )}
      </table>`  
      }else{
        this.mostrarUsuarios(1)
      }
    }
      
    return this.tablaFiltrada

  }

  cambiarEstadoAActivo(idCampaña){
    let camapaña=this.objetoUsuarios.Camapañas.find((campaña)=>campaña.id==idCampaña)
    camapaña.estado='1'
    this.mostrarTablaCampañas(1)
    this.campañasActivas=this.calcularCampañasActivas()
  }
  cambiarEstadoADesactivado(idCampaña){
    let camapaña=this.objetoUsuarios.Camapañas.find((campaña)=>campaña.id==idCampaña)
    camapaña.estado='2'
    this.mostrarTablaCampañas(1)
    this.campañasActivas=this.calcularCampañasActivas()
  }


  mostrarTablaCampañas(y){
    if(y==1){
      this.tablaFiltrada=html``
      this.tablaEquipos=html``
      this.tablaFiltradaCamapaña=html`
      <table class="w-100 table table-hover" style="border: 1px solid black">
        <tr>
          <th class="">Id</th>
          <th class="">Nombre</th>
          <th class="">Director</th>
          <th class="">Empresa</th>
          <th class="">Equipo</th>
          <th class="">Estado</th>
          <th class="">Fecha inicio</th>
          <th class="">Fecha fin</th>
          <th class="">Cambiar estado</th>
        </tr>
        ${this.objetoUsuarios.Camapañas.map(
          (campaña) => html`
          <tr>
            <td>${campaña.id}</td>
            <td>${campaña.nombreCamapaña}</td>
            <td>${campaña.director}</td>
            <td>${campaña.empresa}</td>
            <td>${campaña.equipo}</td>
            <td>${campaña.estado}</td>
            <td>${campaña.fechaDeInicio}</td>
            <td>${campaña.fechaDeFin}</td>
            ${campaña.estado==1 ? html`<td><button class="bg-icon text-white p-2 border-10" @click=${() => this.cambiarEstadoADesactivado(campaña.id)}>Desactivar</button></td>`
            :html`<td><button class="bg-icon text-white p-2 border-10" @click=${() => this.cambiarEstadoAActivo(campaña.id)}>Activar</button></td>` }
            
          </tr>
          `
        )}
      </table>
      `
    }
    return this.tablaFiltradaCamapaña
  }

  mostrarTablaEquipos(y){
    if(y==1){
      this.hola=html``
      this.tablaFiltradaCamapaña=html``
      this.tablaFiltrada=html``
      this.tablaEquipos=html`
      <table class="w-100 table table-hover" style="border: 1px solid black">
        <tr>
          <th class="">Id del equipo</th>
          <th class="">Id de la campaña</th>
          <th class="">Nombre campaña</th>
          <th class="">Integrante 1</th>
          <th class="">Integrante 2</th>
          <th class="">Integrante 3</th>
          <th class="">Integrante 4</th>
        </tr>
        ${this.objetoUsuarios.Equipos.map(
          (equipo) => html`
          <tr>
            <td>${equipo.id}</td>
            <td>${equipo.idCampaña}</td>
            <td>${equipo.nombreCamapaña}</td>
            <td>${equipo.integrante1}</td>
            <td>${equipo.integrante2}</td>
            <td>${equipo.integrante3}</td>
            <td>${equipo.integrante4}</td>
          </tr>
          `
        )}
      </table>`
    }
    return this.tablaEquipos
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
              
              <button class="w-100 mt-5 p-3 text-big text-start border-10 border-0" @click=${(e)=>this.mostrarUsuarios(1)}><i class="fas fa-user mx-3"></i>Usuarios</button>
            </div>

            <div class="d-flex">
              
              <button class="w-100 mt-3 p-3 text-big text-start border-10 border-0" @click=${(e)=>this.mostrarTablaCampañas(1)}><i class="fas fa-user mx-3"></i>Campañas</button>
            </div>
              
            <div class="d-flex">
              
              <button class="w-100 mt-3 p-3 text-big text-start border-10 border-0" @click=${(e)=>this.mostrarTablaEquipos(1)}><i class="fas fa-user mx-3"></i>Equipos</button>
            </div>             
          </div>
      </div>
      <div class="w-75 bg-light d-flex flex-column m-3">
        <div class="d-flex justify-content-between m-3 h-25">
          <div class="container d-flex justify-content-center align-items-center h-100 w-100">
            <div class="h-50 w-50 bg-icon container d-flex justify-content-center align-items-center border-left text-center num-big"><p class="text-white">${this.usuariosConectados}</p></div>
            <div class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"><p class="text-white">Usuarios <br>conectados</p></div>
          </div>
          <div class="container d-flex justify-content-center align-items-center h-100 w-100">
            <div class="h-50 w-50 bg-icon container d-flex justify-content-center align-items-center border-left text-center num-big"><p class="text-white">${this.usuariosAusentes}</p></div>
            <div class="h-50 w-50 text-center container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"><p class="text-white">Usuarios <br>ausentes</p></div>
          </div>
          <div class="container d-flex justify-content-center align-items-center h-100 w-100">
            <div class="h-50 w-50 bg-icon container d-flex justify-content-center align-items-center border-left text-center num-big"><p class="text-white">${this.campañasActivas}</p></div>
            <div class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"><p class="text-white">Campañas <br>activas</p></div>
          </div>
          <div class="container d-flex justify-content-center align-items-center h-100 w-100">
            <div class="h-50 w-50 bg-icon container d-flex justify-content-center align-items-center border-left text-center num-big"><p class="text-white">${this.usuariosLlamados}</p></div>
            <div class="h-50 w-50 container d-flex justify-content-center align-items-center border-right bg-input text-center text-big"><p class="text-white">Usuarios <br>llamados</p></div>
          </div>
        </div>
        <div class="h-75 bg-light border border-dark border-20 d-flex p-3 ">
          <div class="w-25 mx-1 border-20 border-1 border border-dark">
            <div class="d-flex flex-column p-3 bg-secondary border-20">
              <input class="m-2 p-2 border-10 border-0" id="buscarTel" placeholder="Número">
              <input class="m-2 p-2 border-10 border-0" id="buscarNombre" placeholder="Nombre">
              <div class="d-flex justify-content-center aling-items-center">
                <button class="m-2 w-50  border-10 bg-icon text-white border-0 p-2" @click=${(e)=>this.buscarUsuario()}>Buscar</button>
              </div>
            </div>
            <div>
                ${this.resultadoBusqueda}
            </div>
          </div>
          <div class="w-75 bg-light d-flex flex-column mx-3">
            <div>
              <select id="campañaSeleccionada" class="border-10 p-3
              estado:'1',"> 
                <option selected value="0"> Todos </option>
                ${this.objetoUsuarios.Camapañas.filter((campañaFiltrada)=>campañaFiltrada.estado==1).map((campañas)=>
                  html `
                <option value="${campañas.id}">${campañas.nombreCamapaña}</option>
              `)}
              </select>
              <button class="border-10 p-2 text-big border-1" @click=${(e)=>this.filtrarUsuPorCampaña(1)}>Filtrar</button>
              <button class="bg-icon text-white p-2 text-big border-10 float-end" @click=${(e)=>this.abrirAgregarUsuario()}>Nuevo</button>
              <div class="modal" id="agregarUsuarioModal">
                <div class="modal-dialog modal-dialog-centered bg-transparent" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Agregar nuevo usuario</h5>
                      <button type="button" @click=${(e)=>this.cerrarAgregarUsuario()}>
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p>Por favor diligencia los siguientes datos</p>
                      <div class="d-flex flex-column">
                        <label for="nombre">Nombre:</label>
                        <input class=" p-2 border-10 border-1" id="nombre" name="nombre" placeholder="nombre">
                      </div>
                      <div class="d-flex flex-column">
                        <label for="tel">Número de telefono:</label>
                        <input class=" p-2 border-10 border-1" id="tel" name="tel" placeholder="Telefono">
                      </div>
                      <div class="d-flex flex-column">
                        <label for="dire">Dirección:</label>
                        <input class=" p-2 border-10 border-1" id="dire" name="dire" placeholder="Dirección">
                      </div>
                      <div class="d-flex flex-column">
                        <label for="estado">Estado:</label>
                        <select id="estado" class="border-10 p-2">
                        <option value="1">Activo</option>
                        <option value="2">Ausente</option>
                        </select>
                      </div>
                      <div class="d-flex flex-column">
                      <label for="idcampaña">Id de la campaña:</label>
                      <select id="idcampaña" class="border-10 p-2">
                      ${this.objetoUsuarios.Camapañas.map((campaña)=>
                        html`             
                          <option value="${campaña.id}">${campaña.id}--${campaña.nombreCamapaña}
                          </option>`
                        )}
                        </select>
                      </div>
                      <div class="d-flex flex-column">
                      <label for="campaña">Nombre de la campaña:</label>
                        <select id="campaña" class="border-10 p-2">
                        ${this.objetoUsuarios.Camapañas.map((campaña)=>
                          html`             
                            <option value="${campaña.nombreCamapaña}">${campaña.nombreCamapaña}
                            </option>`
                          )}
                          </select>
                      </div>
                      <div class="d-flex justify-content-center aling-items-center mt-3">
                        <button class="bg-icon text-white p-2 border-10" @click=${(e)=>this.agregarUsuario()}>Agregar</buttton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-light mt-3 h-100 border border-dark border-20 p-3" id="div-table">
              ${this.mostrarUsuarios(0)}
              ${this.filtrarUsuPorCampaña(0)}
              ${this.mostrarTablaCampañas(0)}
              ${this.mostrarTablaEquipos(0)}
            </div>
            <div class="w-100">
              <button class="float-end m-3 bg-icon text-white p-2 border-10 border-1" @click=${(e)=>this.abrirAgregarCampaña()}>Nueva campaña</button>
                <div class="modal" id="modalAgregarCamapaña">
                  <div class="modal-dialog modal-dialog-centered bg-transparent" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Agregar nueva campaña</h5>
                        <button type="button" @click=${(e)=>this.cerrarAgregarCampaña()}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="d-flex flex-column">
                          <label for="nombrecampaña">Nombre de la campaña:</label>
                          <input class=" p-2 border-10 border-1" id="nombrecampaña" name="nombrecampaña" placeholder="nombre de la campaña">
                        </div>
                        <div class="d-flex flex-column">
                          <label for="director">Director:</label>
                          <input class=" p-2 border-10 border-1" id="director" name="director" placeholder="Director">
                        </div>
                        <div class="d-flex flex-column">
                          <label for="empresacampaña">Empresa:</label>
                          <input class=" p-2 border-10 border-1" id="empresacampaña" name="empresacampaña" placeholder="Empresa">
                        </div>
                        <div class="d-flex flex-column">
                          <label for="equipocampaña">Equipo:</label>
                          <select id="equipocampaña" class="border-10 p-2">
                          ${this.objetoUsuarios.Equipos.map((equipo)=> html`
                          <option value="${equipo.id}">${equipo.id}</option>
                          `)}
                          </select>
                        </div>
                        <div class="d-flex flex-column">
                          <label for="estadocampaña">Estado:</label>
                          <select id="estadocampaña" class="border-10 p-2">
                            <option value="1">Activa</option>
                            <option value="2">Desactivada</option>
                          </select>
                        </div>
                        <div class="d-flex flex-column">
                          <label for="fechaInicio">Fecha de inicio:</label>
                          <input type="date" class=" p-2 border-10 border-1" id="fechaInicio" name="fechaInicio" placeholder="Fecha de inicio">
                        </div>
                        <div class="d-flex flex-column">
                          <label for="fechaFin">Fecha de Fin:</label>
                          <input type="date" class=" p-2 border-10 border-1" id="fechaFin" name="fechaFin" placeholder="Fecha de Fin">
                        </div>
                      </div>
                      <div class="d-flex justify-content-center aling-items-center m-3">
                        <button class="bg-icon text-white p-2 border-10" @click=${(e)=>this.agregarCampaña()}>Agregar</buttton>
                      </div>
                    </div>
                  </div>
                </div>
              <button class="float-start m-3 bg-icon text-white p-2 border-10 border-1" @click=${(e)=>this.abrirAgregarEquipo()}>Nuevo equipo</button>
                <div class="modal" id="modalAgregarEquipo">
                  <div class="modal-dialog modal-dialog-centered bg-transparent" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Agregar nuevo equipo</h5>
                        <button type="button" @click=${(e)=>this.cerrarAgregarEquipo()}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="d-flex flex-column">
                          <label for="idcampañaEquipo">Id de la campaña:</label>
                          <select id="idcampañaEquipo" class="border-10 p-2">
                          ${this.objetoUsuarios.Camapañas.map((campaña)=>
                            html`             
                              <option value="${campaña.id}">${campaña.id}--${campaña.nombreCamapaña}
                              </option>`
                            )}
                          </select>
                        </div>
                        <div class="d-flex flex-column">
                          <label for="campañaEquipo">Nombre de la campaña:</label>
                          <select id="campañaEquipo" class="border-10 p-2">
                          ${this.objetoUsuarios.Camapañas.map((campaña)=>
                            html`             
                              <option value="${campaña.nombreCamapaña}">${campaña.nombreCamapaña}
                              </option>`
                            )}
                          </select>
                        </div>
                        <div class="d-flex flex-column">
                          <label for="integrante1">Integrante 1:</label>
                          <input class=" p-2 border-10 border-1" id="integrante1" name="integrante1" placeholder="Integrante 1">
                        </div>
                        <div class="d-flex flex-column">
                          <label for="integrante2">Integrante 2:</label>
                          <input class=" p-2 border-10 border-1" id="integrante2" name="integrante2" placeholder="Integrante 2">
                        </div>
                        <div class="d-flex flex-column">
                          <label for="integrante3">Integrante 3:</label>
                          <input class=" p-2 border-10 border-1" id="integrante3" name="integrante3" placeholder="Integrante 3">
                        </div>
                        <div class="d-flex flex-column">
                          <label for="integrante4">Integrante 4:</label>
                          <input class=" p-2 border-10 border-1" id="integrante4" name="integrante4" placeholder="Integrante 4">
                        </div>
                        </div>
                        <div class="d-flex justify-content-center aling-items-center m-3">
                          <button class="bg-icon text-white p-2 border-10" @click=${(e)=>this.agregarEquipo()}>Agregar</buttton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

 `;

}


}

customElements.define('campañas-element', campañas);