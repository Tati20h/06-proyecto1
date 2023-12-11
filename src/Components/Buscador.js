import React, { useState } from 'react'


export const Buscador = ({ listadoState, setListadoState }) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncantrado] = useState(false)

  const buscarPeli = (e) => {
    //Crear estado y actul;a;izarlo 
    setBusqueda(e.target.value);

    //Filtrar busqueda 
    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());

    });

    if (busqueda.length <= 1 || pelis_encontradas <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncantrado(true);
    } else {
      setNoEncantrado(false);

    }

    // Actualizar estado del listado principal 
    setListadoState(pelis_encontradas);

  }

  return (
    <>
      <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>
        {(noEncontrado === true && busqueda.length > 1) && (
          <span className='no-encontrado'>
            No se ha encontrado ninguna considencia
          </span>
        )}

        <form>
          <input
            type="text"
            id='search_field'
            name='busqueda'
            autoComplete='off'
            value={busqueda}
            onChange={buscarPeli} />
          <button id='search'>Buscar </button>
        </form>
      </div>

    </>
  )
}
