import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

  const tituloComponente = "Añadir pelicula";


  const [peliState, setPeliState] = useState({
    titulo: '',
    descripcion: '',

  });

  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = e => {
    e.preventDefault();

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

    //Actualizar estado del listado principal 
    setListadoState(elementos => {
      return [...elementos, peli];
    })


    //Guardar ene le almacenamiento local  
    GuardarEnStorage("pelis", peli);


    //
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
