import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Image, Col, Container, Row } from "react-bootstrap";

const PokemonDetail = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonStats = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(function (response) {
        // handle success
        setPokemon(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getPokemonStats();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Container className="detailBox">
        <Row>
          <h1>{pokemon.name}</h1>
        </Row>
        <Row className="align-items-center">
          <Col md={3}>
            <Image
              fluid
              src={pokemon.sprites.front_default}
              className="spriteDetail"
            ></Image>
          </Col>
          <Col md={8}>
            <h3 className="mb-3">Stats:</h3>
            <h5>Type:</h5>
            <p>
              {pokemon.types[0].type.name}
              {pokemon.types[1] ? ", " + pokemon.types[1].type.name : ""}
            </p>
            <h5>Species:</h5>
            <p>{pokemon.species.name} </p>
            <h5>Abilities:</h5>
            {pokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PokemonDetail;
