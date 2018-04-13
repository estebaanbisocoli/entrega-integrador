import React from 'react';
import { Section } from '../Section';
const MovieRecommendations = ({ recommendations }) => {
  return recommendations ? (
    <Section
      sectionTitle="Peliculas Similares"
      items={recommendations.movies}
      {...recommendations}
    />
  ) : null;
};

export default MovieRecommendations;
