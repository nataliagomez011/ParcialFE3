import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [anioEstreno, setAnioEstreno] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.trim().length >= 3 && genero.trim().length >= 6 && anioEstreno.trim().length == 4) {
      onSubmit({ nombre, genero, anioEstreno });
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Nombre de la película: </label>
        <input
          type='text'
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
        <label> Género de la película: </label>
        <input
          type='text'
          value={genero}
          onChange={(event) => setGenero(event.target.value)}
        />
        <label> Año de estreno de la película: </label>
        <input
          type='text'
          value={anioEstreno}
          onChange={(event) => setAnioEstreno(event.target.value)}
        />
        <button type='submit'> Enviar</button>
      </form>
      {error && <p>Por favor chequee que la información sea correcta</p>}
      <hr />
    </div>
  );
};

export default Form;
