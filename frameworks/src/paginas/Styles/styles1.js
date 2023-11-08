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
  align-items: center;
  padding: 5px;
  background-color: #ffffff;
  margin: 2px;
  height: 50px;   
  width: 600px;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  left: 60px;
  top: -8px

}

#usuariosConectados,
#usuariosAusentes,
#campañasActivas,
#usuarios_llamados {

    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 05px;
    height: 50px;   
    display: flex;
    width:300px;
    margin-left: 22px;
    margin-right: 10px;
    margin-top: 20px;
    flex-direction: row;
    justify-content: center;


  }

  #mitadDerecha,
  #mitadDerecha2,
  #mitadDerecha3,
  #mitadDerecha4 {

    background-color: #FF7400;
    height: 50px;   
    display: flex;
    width:80px;
    border: 2px solid #ccc;
    border-radius: 10px;

  }
  
  #mitadIzquierda,
  #mitadIzquierda2,
  #mitadIzquierda3,
  #mitadIzquierda4 {

    background-color: #FFffff;
    height: 50px;   
    display: flex;
    width:80px;
    border: 2px solid #ccc;
    border-radius: 10px;

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

  #ultimoContenedor {

    width: 700px;
    height: 370px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    margin: 10px;

  }
`;