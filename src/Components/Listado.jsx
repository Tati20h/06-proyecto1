import React, { useEffect } from 'react'
import { useState } from 'react';

export const Listado = () => {

  const [listadoState, setListadoState] = useState([]);

  useEffect(() => {
    console.log("listado de peliculas cargado ")
    conseguirPeliculas();


  }, [])

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));


    setListadoState(peliculas);
    console.log(peliculas);
  }



  return (
    <>
      {listadoState != null ?
        listadoState.map(peli => {
          return (

            <article key={peli.id} className="peli-item">
              <h3 className="title"> {peli.titulo}Desarrollo Web</h3>
              <p className="description"> {peli.descripcion} Tatiana Maria
              </p>
              <button className="edit">Editar </button>
              <button className="delete">Eliminar </button>
            </article>

          );
        })
        : <h2> No hay Peliculas para mostrar </h2>
      }
    </>

  )
}
