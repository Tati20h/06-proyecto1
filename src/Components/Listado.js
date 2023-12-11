import React, { useEffect, useState } from 'react';
import { Editar } from '../Components/Editar';

export const Listado = ({ listadoState, setListadoState }) => {

  // const [listadoState, setListadoState] = useState([]);
  const [editar, setEditar] = useState(0);
  useEffect(() => {

    console.log("listado de peliculas cargado ")
    conseguirPeliculas();

  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);

    return peliculas;
  }

  const borrarPeli = (id) => {
    //conseguir paginas almacenadas 
    let peli_almacenadas = conseguirPeliculas();
    //Filtar pelicula para q  ue elimine del array la que no quiero
    let nuevo_array_pelis = peli_almacenadas.filter(peli => peli.id !== parseInt(id));


    //Actualizar estado del listado  
    setListadoState(nuevo_array_pelis);
    //Actualizar datos en el localStorage
    localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));
  }



  return (
    <>
      {listadoState != null ?
        listadoState.map(peli => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title"> {peli.titulo}</h3>
              <p className="description"> {peli.descripcion}
              </p>
              <button className="edit" onClick={() => {
                setEditar(peli.id);
              }}>Editar </button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}> Eliminar </button>

              {/*Aparece formulario de editar*/}
              {editar === peli.id && (

                <Editar
                  peli={peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />

              )}


            </article>

          );
        })
        : <h2> No hay Peliculas para mostrar </h2>
      }
    </>

  )
}
