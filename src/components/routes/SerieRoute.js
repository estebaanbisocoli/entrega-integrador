import React from 'react';
import MovieContainer from '../../containers/SerieContainer';
import SerieContainer from '../../containers/SerieContainer';
const SerieRoute = props => {
  return (
    <div>
      <SerieContainer {...props} />
    </div>
  );
};

export default SerieRoute;
