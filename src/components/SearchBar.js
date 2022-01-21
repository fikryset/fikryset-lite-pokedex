import React from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

const SearchBar = (props) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Pokemon..."
          aria-label="Search Pokemon"
          aria-describedby="addon"
          value={props.value}
          onChange={(event) => props.setSearch(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              props.clicked();
            }
          }}
        />
        <Button variant="outline-secondary" id="addon" onClick={props.clicked}>
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
