import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";


const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState({});
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  const { name } = useParams();

  const palindrome = (name) => {
    const pokemonName = name;
    const reversedName = name.split("").reverse().join("");

    if (pokemonName == reversedName) return true;

    return false;
  };

  console.log("PALINDROME", palindrome("eevee"));

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((data) => {
        setPokemon(data.data);
        setPokemonTypes(data.data.types);
        setPokemonStats(data.data.stats);
        setPokemonAbilities(data.data.abilities);
        setPokemonMoves(data.data.moves)
        setPokemonName(
          data.data.name[0].toUpperCase() + data.data.name.slice(1)
        );
      })
      .catch((e) => console.log(e));
  }, []);

  console.log("TYPES", pokemonTypes);
  console.log("STATS", pokemonStats);
  console.log("ABILITIES", pokemonAbilities);
console.log("image",`${pokemon.sprites?.front_shiny}`)
  return (
    <>
    <Navbar /> 

    <div className="pokemon-details-container">
        <div className="row">
            <div
                className="col-md-4 mt-5"
                style={{ width: "300px", height: "300px" }}
                >
                <div className="img-container">
                    <img
                    src={`${pokemon.sprites?.front_shiny}`}
                    alt={pokemonName}
                    width="250"
                    />
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-8 mt-2ß">
            <div className="d-flex flex-column gap-3">
                <div className="row align-items-center">
                <div className="col-md-3">
                    <span className="name-text">Name: </span>
                </div>

                <div className="col-md-9">
                    <span className="pokemon-detail">
                    <b>{pokemonName}</b>
                    </span>
                </div>
                </div>

                <div className="row align-items-start">
                <div className="col-md-3">
                    <span className="type-text">Types: </span>
                </div>

                <div className="col-md-9">
                    <span className="pokemon-detail">
                    {pokemonTypes.map((type) => {
                        return `${type.type.name}${
                        pokemonTypes.indexOf(type) == pokemonTypes.length - 1
                            ? ""
                            : ","
                        } `;
                    })}
                    </span>
                </div>
                </div>

                <div className="row align-items-start">
                <div className="col-md-3">
                    <span className="type-text">Abilities: </span>
                </div>

                <div className="col-md-9">
                    <span className="pokemon-detail">
                    {pokemonAbilities.map((ability) => {
                        return `${ability.ability.name}${
                        pokemonAbilities.indexOf(ability) ==
                        pokemonAbilities.length - 1
                            ? ""
                            : ","
                        } `;
                    })}
                    </span>
                </div>
                </div>


                <div className="row align-items-start">
                <div className="col-md-3">
                    <span className="type-text">Stats: </span>
                </div>

                <div className="col-md-9">
                    <span className="pokemon-detail">
                    {pokemonStats.map((stat) => {
                        return `${stat.stat.name}${
                            pokemonStats.indexOf(stat) ==
                            pokemonStats.length - 1
                            ? ""
                            : ","
                        } `;
                    })}
                    </span>
                </div>
                </div>


                <div className="row align-items-start">
                <div className="col-md-3">
                    <span className="type-text">Moves: </span>
                </div>

                <div className="col-md-9">
                    <span className="pokemon-detail">
                    {pokemonMoves.map((move) => {
                        return `${move.move.name}
                        ${
                            pokemonMoves.indexOf(move) ==
                            pokemonMoves.length - 1
                            ? ""
                            : ","
                        } 
                        `;
                    })}
                    </span>
                </div>
                </div>


            </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default PokemonDetails;