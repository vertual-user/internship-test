import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
      .then(response => {
        setPokemon(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching the Pokémon data:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {pokemon.map((poke, index) => (
        <div key={index} style={{ border: '1px solid #ccc', borderRadius: '10px', margin: '10px', padding: '10px', width: '150px', textAlign: 'center' }}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={poke.name} />
          <h3>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
