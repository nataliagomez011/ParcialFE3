import React from 'react';

const Pelicula = ({ nombre, genero, anioEstreno }) => {
  return (
    <div>
      <h3>Nombre de la película: {nombre}</h3>
      <h4>Género de la película: {genero}</h4>
      <h4>Año de estreno de la película: {anioEstreno}</h4>
    </div>
  );
};

export default Pelicula;
