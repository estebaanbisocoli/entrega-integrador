import React from 'react';
import { Header, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { MovieCrew } from './';
const MovieTitle = styled(Header)`
  font-size: 2em !important;
`;
const MovieInfo = ({ title, overview, crew }) => {
  global.crew = crew;
  return (
    <Grid>
      <Grid.Row>
        <MovieTitle as="h1" size="huge">
          {title}
        </MovieTitle>
      </Grid.Row>
      <Grid.Row>
        <Header as="h3">Overview</Header>
      </Grid.Row>
      <Grid.Row>
        <Header.Subheader as="p">{overview}</Header.Subheader>
      </Grid.Row>
      <Grid.Row>
        <MovieCrew crew={crew} />
      </Grid.Row>
    </Grid>
  );
};

export default MovieInfo;
