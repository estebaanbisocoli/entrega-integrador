import React from 'react';
import Section from '../Section/Section';
import PeliculasPopulares from '../../containers/PeliculasPopulares';
import SeriesPopulares from '../../containers/SeriesPopulares';
const Main = () => {
  return (
    <div>
      <PeliculasPopulares />
      <SeriesPopulares />
    </div>
  );
};

export default Main;
