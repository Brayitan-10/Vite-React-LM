/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
//import React from "react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';
import "./detailStyle.css";
import Button from 'react-bootstrap/Button';

export default function Detail() {
  let params = useParams(); // HOOK   let {id} = useParams()
  const [pokemon, setPokemon] = useState(false);

  async function pedidoApi() {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    let response = await data.json();

    setPokemon(response);
  }

  function capitalizeFirstLetter(string) {
    const firstLetter = string.charAt(0);

    const uppercaseFirstLetter = firstLetter.toUpperCase();

    const caputalizedString = uppercaseFirstLetter + string.slice(1);

    return caputalizedString;
  }

  useEffect(() => {
    pedidoApi();
  }, [params]);

  return (
    <div>
      {pokemon ? (
        <>
          <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
          <img src={pokemon.sprites.other.dream_world.front_default} alt="" />  <br />
          <span>Peso: {pokemon.weight} kg</span> <br />
          <Link to={"/"}>
            <Button variant="primary" style={{ marginTop: "1.22rem" }}>◀ VOLVER</Button>
          </Link>
        </>
      ) : (
        <Spinner animation="grow" variant="danger" />
        // "CARGANDO POKEMON"
      )}
    </div>
  );
}
