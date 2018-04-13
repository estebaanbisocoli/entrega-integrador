import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Movie } from '../components/movie';
import {
  getMovieInfo,
  getMovieCrew,
  getMovieRecommendation,
} from '../api/moviedbapi';
const mapStateToProps = ({ pelicula, recomendacion }) => {
  return {
    movieId: pelicula.movieId,
    title: pelicula.title,
    crew: pelicula.crew,
    img: pelicula.img,
    overview: pelicula.overview,
    loading: pelicula.loading,
    error: pelicula.error,
    recommendations: recomendacion,
  };
};
/* {
    movieId: '',
    title: '',
    crew: '',
    img: '',
    overview: '',
    loading: 'false',
    error: null
  }
 */
const fetchMovie = movieId => {
  return dispatch => {
    dispatch({ type: 'REQUEST_MOVIE' });
    return getMovieInfo(movieId).then(res => {
      const movie = res.data;
      const formattedMovie = {
        overview: movie.overview,
        title: movie.title,
        img: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
        movieId: movie.id,
      };
      dispatch({
        type: 'UPDATE_MOVIE',
        movie: formattedMovie,
      });
    });
  };
};
//TODO: completar las acciones agregar loading error
const fetchCrew = movieId => {
  return dispatch => {
    return getMovieCrew(movieId).then(res => {
      const crew = res.data.crew.map((person, index) => {
        return {
          name: person.name,
          position: person.job,
        };
      });
      dispatch({ type: 'UPDATE_MOVIE', movie: { crew } });
    });
  };
};
//TODO: completar las acciones agregar loading error
const fetchRecommendations = movieId => {
  return dispatch => {
    return getMovieRecommendation(movieId).then(res => {
      const results = res.data.results;
      const formattedRecommendations = results.map(movie => {
        return {
          normalImg: 'https://image.tmdb.org/t/p/w185' + movie.poster_path,
          title: movie.title,
          movieId: movie.id,
          redirect: '/movie/' + movie.id,
        };
      });
      dispatch({
        type: 'UPDATE_RECOMMENDATION',
        movies: formattedRecommendations,
      });
    });
  };
};
class PeliculaContainer extends Component {
  componentDidMount() {
    console.log(this.props, 'router');
    this.props.dispatch(fetchMovie(this.props.match.params.movieId));
    this.props.dispatch(fetchCrew(this.props.match.params.movieId));
    this.props.dispatch(fetchRecommendations(this.props.match.params.movieId));
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props.movieId, nextProps.match.params.movieId);
    if (this.props.match.params.movieId !== nextProps.match.params.movieId) {
      console.log('refecching');
      this.props.dispatch(fetchMovie(nextProps.match.params.movieId));
      this.props.dispatch(fetchCrew(nextProps.match.params.movieId));
      this.props.dispatch(fetchRecommendations(nextProps.match.params.movieId));
    }
  }

  render() {
    return (
      <Movie
        crew={this.props.crew}
        title={this.props.title}
        overview={this.props.overview}
        img={this.props.img}
        loading={this.props.loading}
        error={this.props.error}
        movieId={this.props.movieId}
        recommendations={this.props.recommendations}
      />
    );
  }
}

export default connect(mapStateToProps)(PeliculaContainer);
