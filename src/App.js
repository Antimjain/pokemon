import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./components/Homepage";
import PokemonDetails from "./components/PokemonDetails";
import { PokemonListProvider } from "./contexts/PokemonListContext";

const App = () => {
  return (
    <PokemonListProvider>
      <Router>
        <div className="container app">
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/:name" element={<PokemonDetails />} />
          </Routes>
        </div>
      </Router>
    </PokemonListProvider>
  );
};

export default App;