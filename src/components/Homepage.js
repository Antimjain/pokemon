import React, { useContext, useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import PokemonListContext from "../contexts/PokemonListContext";
import axios from "axios";

const Homepage = () => {
  const { pokemons } = useContext(PokemonListContext);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        setPokemonTypes(response.data.results);
      } catch (error) {
        console.error('Error fetching types:', error);
      }
    };

    fetchTypes();
  }, []);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100'); // Adjust the limit as needed
        const pokemonData = response.data.results;

        const pokemonDetails = await Promise.all(pokemonData.map(async (pokemon) => {
          const pokemonResponse = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: pokemonResponse.data.sprites.front_default,
          };
        }));

        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error('Error fetching all Pokémon:', error);
      }
    };

    if (selectedType === 'all') {
      fetchAllPokemons();
    } else {
      const fetchPokemonsByType = async () => {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/type/${selectedType}`);
          const pokemonData = response.data.pokemon.map(p => p.pokemon);

          const pokemonDetails = await Promise.all(pokemonData.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return {
              name: pokemon.name,
              image: pokemonResponse.data.sprites.front_default,
            };
          }));

          setPokemonList(pokemonDetails);
        } catch (error) {
          console.error('Error fetching Pokémon by type:', error);
        }
      };

      fetchPokemonsByType();
    }
  }, [selectedType]);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="pb-5">
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <select
                  id="selectDropdown"
                  className="form-control"
                  value={selectedType}
                  onChange={handleTypeChange}
                >
                  <option value="all">-- Select an option --</option>
                  {pokemonTypes.map((type) => (
                    <option key={type.name} value={type.name}>
                      {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-8"></div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button" onClick={handleSearchChange}>
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-8"></div>
          </div>
        </div>
      </div>
      <div className="row">
        {filteredPokemon.map((pokemon) => {
          return <PokemonList key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
