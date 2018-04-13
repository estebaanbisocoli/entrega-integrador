import React from 'react';

import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { SimpleItem } from './';
const mapItems = item => {
  return (
    <Link key={item.id} to={item.link}>
      <Grid.Column>
        <SimpleItem alt={item.title} url={item.url} />
      </Grid.Column>
    </Link>
  );
};
const SimpleItems = ({ items }) => {
  return (
    <Grid columns={6} doubling>
      {items.map(mapItems)}
    </Grid>
  );
};

export default SimpleItems;
