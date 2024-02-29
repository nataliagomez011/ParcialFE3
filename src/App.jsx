import React, { useState } from 'react';
import './App.css';
import Pelicula from './Components/Pelicula.jsx';
import Form from './Components/Form.jsx';

function App() {
  const [peliculas, setPeliculas] = useState([]);

  const handleFormSubmit = (pelicula) => {
    setPeliculas([...peliculas, pelicula]);
  };

  return (
    <div>
      <h1>Formulario de Peliculas</h1>
      <h5>Ingrese al menos 3 caracteres para el nombre, al menos 6 caracteres para el género y los 4 números del año.</h5>
      <Form onSubmit={handleFormSubmit} />
      {peliculas.length > 0 && (
        <div>
          <h2>Peliculas Añadidas:</h2>
          {peliculas.map((pelicula, index) => (
            <Pelicula key={index} {...pelicula} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

