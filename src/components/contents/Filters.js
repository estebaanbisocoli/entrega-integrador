// Esto deberia estar conectado!!
import React from 'react';
import PropTypes from 'prop-types';
import GridColumn, { Grid, Container } from 'semantic-ui-react';
import { FilterContent } from './';

const years = () => {
  const yearArray = [];
  for (let i = new Date().getFullYear(); i > 1940; i--) {
    yearArray.push({ key: i, value: i, text: i });
  }
  return yearArray;
};

const yearList = years();
const Filters = ({ year, genres, onChangeYear, onChangeGenre }) => {
  console.log(onChangeYear);
  return (
    <Container>
      <FilterContent
        value={year}
        placeholder={'Año'}
        options={yearList}
        onChange={onChangeYear}
      />

      <FilterContent
        onChange={onChangeGenre}
        placeholder="Generos"
        options={genres.map(genre => ({
          key: genre.id,
          value: genre.id,
          text: genre.name,
        }))}
      />
    </Container>
  );
};

Filters.propTypes = {};

export default Filters;
