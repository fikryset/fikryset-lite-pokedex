import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PokemonCard = (props) => {
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonDetail = async () => {
    await axios
      .get(props.pokemon.url)
      .then(function (response) {
        // handle success
        setPokemonDetail(response.data);
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
    getPokemonDetail();
  }, []);

  if (isLoading) {
    return (
      <div className="col-md-3" key={props.pokemon.name}>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <Card bg="light" className="my-4">
        <Card.Img variant="top" src={pokemonDetail.sprites.front_default} />
        <Card.Body>
          <Card.Title>{props.pokemon.name}</Card.Title>
          <Link to={`/pokemon/${props.pokemon.name}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PokemonCard;
