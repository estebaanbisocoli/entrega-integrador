import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { SectionHeader, SectionItem, SectionLoading } from './';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import recomendacion from '../../reducers/recomendacion';

const mapMovies = ({ normalImg, title, movieId, redirect }, index) => {
  if (index < 6) {
    return (
      <Grid.Column key={movieId}>
        <Link to={redirect}>
          <SectionItem url={normalImg} alt={title} />
        </Link>
      </Grid.Column>
    );
  }
};
const MyContainer = styled(Container)`
  padding: 2vw;
  background-color: ${props => props.link && 'lightgrey'};
`;
/* movies = {
  * title
  * url
  * movieId
*/
const Section = ({ sectionTitle, link, items, loading, error }) => {
  global.items = items;
  return items ? (
    <MyContainer link={link}>
      <SectionHeader title={sectionTitle} link={link} />

      <Grid textAlign="center" doubling={true} columns={6}>
        {loading && <SectionLoading />}
        {error && error}
        {items !== [] && items.map(mapMovies)}
      </Grid>
    </MyContainer>
  ) : (
    'No hay recomendacion'
  );
};

Section.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  lik: PropTypes.string,
  movies: PropTypes.array,
};

export default Section;
