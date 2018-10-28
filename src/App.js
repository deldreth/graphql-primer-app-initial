import React, { Component } from "react";

import { HashRouter, Route } from "react-router-dom";
import styled from "react-emotion";

import Locations from "./containers/Locations";
import Location from "./containers/Location";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Grid>
          <Route key="locations" path="/" component={Locations} />
          <Route key="location" path="/location/:id" component={Location} />
        </Grid>
      </HashRouter>
    );
  }
}

export default App;

const Grid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
