import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import {
  MovieRoute,
  SeriesPageRoute,
  Main,
  SerieRoute,
  PeliculasPage,
} from '../routes';
import styled from 'styled-components';
const MyContainer = styled(Container)``;
const Content = props => {
  return (
    <MyContainer>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/movie/:movieId" component={MovieRoute} />
        <Route path="/serie/:serieId" component={SerieRoute} />
        <Route path="/movies" component={PeliculasPage} />
        <Route path="/series" component={SeriesPageRoute} />
      </Switch>
    </MyContainer>
  );
};

Content.propTypes = {};

export default Content;
