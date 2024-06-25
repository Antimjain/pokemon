import React from "react";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemon }) => {
  console.log("antimmm",pokemon)
  return (
    <div className="col-md-4 mt-5">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`${pokemon.name}`}
      >
        <div className="card">
          <p className="pokemon-name">{pokemon.name}</p>
          <img src={pokemon.image}/>

        </div>
      </Link>
    </div>
  );
};

export default PokemonList;