import React from 'react'


export const Buscador = () => {
  return (
    <>
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form>
          <input type="text"
          id='text'
          name='text' />
          <button>Buscar </button>
        </form>
      </div>

    </>
  )
}
