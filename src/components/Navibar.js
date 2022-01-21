import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navibar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container>
        <Link to={"/"} className="navbarBrand">
          <Navbar.Brand>
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Pokedex Lite
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navibar;
