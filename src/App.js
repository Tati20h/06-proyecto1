import { useState } from "react";
import { Buscador } from "./Components/Buscador";
import { Crear } from "./Components/Crear";
import { Listado } from "./Components/Listado";

function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <>
      <div className="layout">
        {/* cabecera*/}
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>
          <h1>MisPelis</h1>

        </header>
        {/*Barra de Navegacion*/}
        <nav className="nav">
          <ul>
            <li> <a href="/#">Inicio </a> </li>
            <li> <a href="/#">Peliculas </a> </li>
            <li> <a href="/#">Blog </a> </li>
            <li> <a href="/#">Contacto </a> </li>
          </ul>
        </nav>

        {/*Contenido principal*/}
        <section className="content">
          {/*aqui van las pelis*/}
          <Listado listadoState={listadoState} setListadoState={setListadoState} />
        </section>
        {/*Barra lateral*/}
        <aside className="lateral">
          <Buscador listadoState={listadoState} setListadoState={setListadoState}/>

          <Crear setListadoState={setListadoState}/>
        </aside>

        {/*Pie de pagina*/}
        <footer className="footer">
          &copy; Master en JavaScritp ES12 y TypeScript - <a href="https://github.com/Tati20h"> GitHub-Tati20h</a>
        </footer>




      </div>
    </>

  );
}

export default App;
