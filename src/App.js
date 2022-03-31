import { useState } from 'react';
import Formulario from './components/Formulario'
import PintarDatos from './components/PintarDatos';

function App() {

  const [personaje, setPersonaje] = useState('')

  return (
    <>
      <Formulario setPersonaje={setPersonaje} />
      <PintarDatos personaje={personaje}/>
    </>
  );
}

export default App;
