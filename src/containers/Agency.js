import React, { memo } from "react";

import styled from "react-emotion";

import AddCat from "./AddCat";

function Agency(props) {
  return (
    <Container>
      <h1>Todo location</h1>

      <AddCat locationId={props.match.params.id} />

      <hr />

      <h2>Cats at this location</h2>

      <Cats>
        <Cat>
          <h5>Todo cat</h5>
        </Cat>
      </Cats>
    </Container>
  );
}

export default memo(Agency);

const Container = styled("div")`
  padding: 1em;
  border-left: 1px solid #efefef;
`;

const Cats = styled("div")`
  display: grid;
  grid-gap: 1em;

  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 750px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Cat = styled("div")`
  border: 1px solid #efefef;
  padding: 1em;
`;
