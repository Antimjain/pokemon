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
  console.log("POKEMONS", pokemons);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://pokeapi.co/api/v2/type/') // Replace with your actual API endpoint
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json(); // Return the parsed JSON data
        })
        .then((responseData) => {
          setPokemonTypes(responseData.results);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPokemon = () => {
      let url = 'https://pokeapi.co/api/v2/pokemon/?limit=100'; // limit
      console.log('url 1', url);
      if (selectedType !== 'all') {
        url += `&type=${selectedType}`;
      }
      console.log('url 2', url);

      fetch(url) // Replace with your actual API endpoint
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json(); // Return the parsed JSON data
        })
        .then((responseData) => {
          console.log('response', responseData);

          setPokemonList(responseData.results);
        });
    };
    fetchPokemon();
  }, [selectedType]);


  
  const handleTypeChange = async(event) => {
    // setSelectedType(event.target.value);
    const type = event.target.value

    if (type) {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
        const pokemonData = response.data.pokemon.map(p => p.pokemon);

        const pokemonDetails = await Promise.all(pokemonData.map(async (pokemon) => {
          const pokemonResponse = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: pokemonResponse.data.sprites.front_default,
          };
        }));
        console.log("harrr", pokemonData, pokemonDetails)

        
        // setPokemons(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    } else {
      // setPokemons([]);
    }
  
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredPokemon = pokemons.filter((pokemon) =>
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
                      {type.name}
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