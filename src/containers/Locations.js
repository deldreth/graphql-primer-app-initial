import React, { memo } from 'react';

import styled from 'react-emotion';
import { Link } from 'react-router-dom';

import AddLocation from './AddLocation';

function Locations(props) {
  return (
    <Container>
      <AddLocation />

      <h5>
        <Link to="/location/null">Todo: Locations</Link>
      </h5>
    </Container>
  );
}

export default memo(Locations);

const Container = styled('div')`
  margin: 1em;
`;
