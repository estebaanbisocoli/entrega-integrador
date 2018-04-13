import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Section } from '../components/Section';

import { getPopularMovies } from '../api/moviedbapi';
const mapStateToProps = ({ peliculasPopulares }) => {
  return {
    sectionTitle: 'Peliculas Populares',
    movies: peliculasPopulares.movies,
    link: peliculasPopulares.link,
    loading: peliculasPopulares.loading,
    error: peliculasPopulares.error,
  };
};
/* movies = {
  * title
  * url
  * movieId
*/
const loadMovies = () => {
  return dispatch => {
    dispatch({ type: 'REQUEST_POPULAR_MOVIES' });
    return getPopularMovies()
      .then(res => {
        const movieList = res.data.results;
        const formatedMovies = movieList.map(movie => {
          return {
            title: movie.title,
            normalImg: 'https://image.tmdb.org/t/p/w185' + movie.poster_path,
            bigImg: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            giantImg: 'https://image.tmdb.org/t/p/w780' + movie.poster_path,
            movieId: movie.id,
            redirect: '/movie/' + movie.id,
          };
        });

        dispatch({ type: 'UPDATE_POPULAR_MOVIES', data: formatedMovies });
      })
      .catch(e => {
        dispatch({
          type: 'FAIL_POPULAR_MOVIES',
          error: e.message,
        });
      });
  };
};
class PeliculasFavoritas extends Component {
  componentDidMount() {
    this.props.dispatch(loadMovies());
  }
  render() {
    return (
      <Section
        sectionTitle={this.props.sectionTitle}
        items={this.props.movies}
        link={this.props.link}
        loading={this.props.loading}
        error={this.props.error}
      />
    );
  }
}

export default connect(mapStateToProps)(PeliculasFavoritas);
