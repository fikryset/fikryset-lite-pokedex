import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { Container, Row, Button, Col } from "react-bootstrap";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [counterHelper, setCounterHelper] = useState(20);
  const isFirstRun = useRef(true);

  const getPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=1118")
      .then(function (response) {
        // handle success
        setPokemonList(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const searchPokemon = () => {
    var temp = [];
    console.log(pokemonList);
    if (searchQuery !== "") {
      for (let i = 0; i < pokemonList.length; i++) {
        if (pokemonList[i].name.includes(searchQuery)) {
          temp.push(pokemonList[i]);
        }
      }
      setHasMore(false);
    } else {
      for (let i = 0; i < 20; i++) {
        temp.push(pokemonList[i]);
      }
      setHasMore(true);
    }
    setFilteredPokemonList(temp);
  };

  const getInfinitePokemonList = () => {
    if (counterHelper <= pokemonList.length) {
      var temp = [];
      console.log("a");
      temp = filteredPokemonList;
      for (let i = 0 + counterHelper; i < 20 + counterHelper; i++) {
        temp.push(pokemonList[i]);
      }
      setFilteredPokemonList(temp);
      setCounterHelper(counterHelper + 20);
    } else {
      setHasMore(false);
    }
  };

  const clickSearchHandler = () => {
    searchPokemon();
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    searchPokemon();
  }, [pokemonList]);

  return (
    <div>
      <SearchBar
        value={searchQuery}
        setSearch={setSearchQuery}
        clicked={clickSearchHandler}
      />
      <Container className="mainContent">
        <Row>
          {filteredPokemonList.map((pokemon) => (
            <Col md={3} sm={6} key={pokemon.name}>
              <PokemonCard pokemon={pokemon} />
            </Col>
          ))}
        </Row>
        {hasMore && (
          <Button className="mb-2" onClick={getInfinitePokemonList}>
            Load more
          </Button>
        )}
      </Container>
    </div>
  );
};

export default PokemonList;
