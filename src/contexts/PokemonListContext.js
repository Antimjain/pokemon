import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const PokemonListContext = createContext();

export const PokemonListProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        const results = response.data.results;
        
        const pokemonDetails = await Promise.all(results.map(async (pokemon) => {
          const pokemonResponse = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: pokemonResponse.data.sprites.front_default,
          };
        }));
        
        setPokemons(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <PokemonListContext.Provider value={{ pokemons }}>
      {children}
    </PokemonListContext.Provider>
  );
};

export default PokemonListContext;