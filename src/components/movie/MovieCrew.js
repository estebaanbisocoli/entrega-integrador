import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

const mapCrew = (person, index) => {
  if (index < 6) {
    return (
      <Grid.Column key={index}>
        <Header as="h5">{person.name}</Header>
        {person.position}
      </Grid.Column>
    );
  }
};
const MovieCrew = ({ crew = [] }) => {
  return <Grid columns={3}>{crew.map(mapCrew)}</Grid>;
};

export default MovieCrew;
