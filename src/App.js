import { useState } from 'react';
import Formulario from './components/Formulario'
import PintarDatos from './components/PintarDatos';
import Header from './components/Header';

function App() {

  const [personaje, setPersonaje] = useState('')

  return (
    <>
      <Header className="form">
        <h1 style={{margin: 0}}>Personajes de Rick and Morty</h1>
        <Formulario setPersonaje={setPersonaje} />
      </Header>
      <PintarDatos personaje={personaje}/>
    </>
  );
}

export default App;
