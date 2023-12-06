import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = () => {

  const tituloComponente = "Añadir pelicula";


  const [peliState, setPeliState] = useState({
    titulo: '',
    descripcion: '',

  });

  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = e => {
    e.preventDefault()

    alert("formuario ")

    //conseguir datos de formulario 
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //crear objeto de la pelicula 
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };

    //Guardar Estado 
    setPeliState(peli)

    //Guardar ene le almacenamiento local  \
    GuardarEnStorage("pelis" , peli);
    GuardarEnStorage("copia_datos" , peli);
  }


  return (
    <>
      <div className="add">
        <h3 className="title">
          {tituloComponente}
        </h3>
        <strong>
          {(titulo && descripcion) && "Se creo la pelicula :" + titulo}

        </strong>
        <form onSubmit={conseguirDatosForm}>
          <input
            id="titulo"
            type="text"
            name="titulo"
            placeholder="Titulo" />

          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Description"></textarea>

          <button
            id="save"
            type="submit"
            value="Guardar"
            name='save' >
            Guardar
          </button>

        </form>
      </div>
    </>
  )
}
