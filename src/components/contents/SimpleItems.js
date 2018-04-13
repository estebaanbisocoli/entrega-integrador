import React from 'react';
import PropTypes from 'prop-types';
import GridColumn, { Grid } from 'semantic-ui-react';
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
    <Grid columns={5} doubling={true}>
      {items.map(mapItems)}
    </Grid>
  );
};

SimpleItems.propTypes = {};

export default SimpleItems;
