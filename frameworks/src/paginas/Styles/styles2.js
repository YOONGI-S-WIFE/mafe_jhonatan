import { css } from "lit-element";

export default css `

#contenedorPagina {

  width: 98%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 10px;
  padding-left: 10px;

}

#contenedorPrincipal {

  width: 25%;
  height: 90%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 10px;
  padding-left: 10px;

}

#contenedorSecundario {

  width: 80%;
  height: 500px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
  padding-left: 10px;

}

#contenedorIzquierdo {

  height: 500px;   
  width: 250px;
  margin: 10px;
  background-color: #f0f0f0;
  border: 2px solid #ccc;
  border-radius: 20px;
  flex-direction: column;
  padding: 10px;
  display: flex;
  align-items: column;
  flex-grow:0;
  align-self: flex-start;

}

.contenedorIzquierdo button {

  height: 40px;
  margin-bottom: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;

}

#cardsUsuarios {

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 5px;
  background-color: #ffffff;
  height: 50px;   
  width: 700px;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  left: -40px;

}

#usuariosConectados,
#usuariosAusentes,
#campañasActivas {

    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 05px;
    height: 50px;   
    display: flex;
    width:500px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    flex-direction: row;

  }

  #mitadDerecha,
  #mitadDerecha2,
  #mitadDerecha3 {


  }
  
  #mitadIzquierda,
  #mitadIzquierda2,
  #mitadIzquierda3 {



  }

  #contenedorDerecho {

    height: 570px;   
    width: 100%;
    margin: 10px;
    background-color: #f9f9f9;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    display: flex;
    padding: 05px;
    flex-direction: row;
    position: relative;
    left: -30px

  }

  #contenedorFormulario {

    width: 30%;
    height: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    float:right;

  }
  
  #formulario {

    width: 100%;
    height: 25%;

  }

  #segundo_contenedor{

    flex-direction: column;
    display: flex;

  }

  #filtrarNuevo {

    width: 450px;
    height: 10%;
    display: flex;
    margin-bottom: 10px;
    justify-content: flex-start;

  }

  #filtrar,
  #nuevo {

    width: 30%;
    height: 30px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;

  }

  #ultimoContenedor,
  #penultimoContenedor {

    width: 700px;
    height: 50%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    margin-left: 10px;
    margin-right: 10px;

  }

` ;
