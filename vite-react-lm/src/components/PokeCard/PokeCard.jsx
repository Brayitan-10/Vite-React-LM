/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
//import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function PokeCard({ pokemon }) {

  function capitalizeFirstLetter(string) {
    const firstLetter = string.charAt(0);
    const uppercaseFirstLetter = firstLetter.toUpperCase();
    const capitalizedString = uppercaseFirstLetter + string.slice(1);

    return capitalizedString;
  }

  return (
    <Card key={pokemon.id} style={{ width: '18rem', padding: "2em" }}>
      <Card.Img
        variant="top"
        className='poke-img'
        src={pokemon.sprites.other.dream_world.front_default} />
      <Card.Body>
        <Card.Title>{capitalizeFirstLetter(pokemon.name)}</Card.Title>
        {/* <Card.Text>
          INFO DEL POKEMON
        </Card.Text> */}
        <Link to={`/pokemon/${pokemon.id}`}>
          <Button variant="primary">More Information</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}