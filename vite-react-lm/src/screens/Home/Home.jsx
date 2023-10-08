/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
//import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
//import NavBar from '../../components/Navbar/Navbar.jsx';
import PokeCard from '../../components/PokeCard/PokeCard.jsx';
import './homeSyles.css';
import { Button, ButtonGroup } from 'react-bootstrap'
/* -------------------------------------------------- */
export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonPerPage, setPokemonPerPage] = useState(20) //l=> limit
  const [offset, setOffset] = useState(0)

  async function pedidoApi() {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonPerPage}&offset=${offset}`);
    let response = await data.json();
    let arrayPokemon = [];

    for (let i = 0; i < response.results.length; i++) {
      const element = response.results[i];

      let data = await fetch(element.url);
      let responseData = await data.json();

      arrayPokemon.push(responseData)
    }
    setPokemon(arrayPokemon);
  }

  useEffect(() => {
    pedidoApi();
  }, [offset]); // first render ONLY

  function prevPageHandler(e) {
    if (offset > 0) setOffset(offset - pokemonPerPage) 
  }

  function nextPageHandler(e) {
    setOffset(offset + pokemonPerPage)
  }

  return (
    <div>
      {/* <NavBar /> */}

      <div>
        <h1>WELCOME TO MY APLICATION</h1>
      </div>

      <div className="card-container">
        {pokemon.map((pokemon) => (
          <PokeCard pokemon={pokemon} />
        ))}
      </div> <br />
      
      <ButtonGroup className="mb-2">
        <Button onClick={(e) => prevPageHandler(e)}>◀ Anterior</Button>
        {/* <Button>Middle</Button> */}
        <Button onClick={(e) => nextPageHandler(e)}>Siguiente ▶</Button>
      </ButtonGroup>

      <div>FOOTER</div>
    
    </div>
  );
}
