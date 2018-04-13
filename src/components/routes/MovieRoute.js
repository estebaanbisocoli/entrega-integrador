import React from 'react';
import PropTypes from 'prop-types';
import PeliculaContainer from '../../containers/PeliculaContainer';
const crew = [
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
];
const MovieRoute = props => {
  return <PeliculaContainer {...props} />;
};
MovieRoute.propTypes = {};

export default MovieRoute;
