import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Grid } from 'semantic-ui-react';
import { MovieImage, MovieInfo, MovieRecommendations } from './';

const Movie = ({
  recommendations,
  img,
  title,
  overview,
  crew,
  movieId,
  loading,
  error
}) => {
  console.log(img);
  return (
    <Container fluid={true}>
      <Grid>
        <Grid.Row>
          <Grid.Column
            mobile={16}
            tablet={4}
            computer={6}
            textAlign="center"
            width={4}
          >
            <MovieImage img={img} title={title} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={12} computer={10}>
            <MovieInfo
              title={title}
              crew={crew}
              overview={overview}
              title={title}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <MovieRecommendations recommendations={recommendations} />
        </Grid.Row>
      </Grid>
    </Container>
  );
};

Movie.propTypes = {};

export default Movie;
