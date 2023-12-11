import React from 'react'

export const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {

  const titulo_componente = "Editar pelicula";

  const guardarEdicion = (e, id) => {
    e.preventDefault();


    //Conseguir target del evento 
    let target = e.target;



    //Bucar el indice del objeto de la pelicula a actualizar 
    const pelis_almacenadas = conseguirPeliculas();

    const indice = pelis_almacenadas.findIndex(peli => peli.id === id)
    console.log(indice)

    //Crear objeto con ese id de ese indice, con ese titilo y descripcion del formulario 
    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    }

    // Actualizar el elemento con ese indice 
    pelis_almacenadas[indice] = peli_actualizada;

    console.log(pelis_almacenadas)

    // Guardar nuevo arrayn de objetos en el localStorage
    localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));
    //Actualizaar estados
    setListadoState(pelis_almacenadas);
    setEditar(0);

  }

  return (
    <>
      <div className='edit_form'>Editar

        <h3 className='title' > {titulo_componente}:{peli.titulo}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)} >
          <input
            type='text'
            name='titulo'
            className='titulo_editado'
            defaultValue={peli.titulo}
          />
          <textarea
            name='descripcion'
            defaultValue={peli.descripcion}
            className='descripcion_editada '>

          </textarea>

          <button
            type='submit'
            className="editar "
            value="actualizar">Actualizar
          </button>

        </form>
      </div>
    </>

  )
}
