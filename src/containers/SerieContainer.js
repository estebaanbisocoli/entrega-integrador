import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Movie as Serie } from '../components/movie';
import { getSerieInfo, getSerieRecommendation } from '../api/moviedbapi';
function mapStateToProps({ serie, recomendacion }) {
  return {
    serieId: serie.serieId,
    title: serie.title,
    crew: serie.crew,
    img: serie.img,
    loading: serie.loading,
    error: serie.error,
    overview: serie.overview,
    recommendations: recomendacion,
  };
}
const mapApiToReducer = serie => {
  return {
    serieId: serie.id,
    title: serie.name,
    img: 'https://image.tmdb.org/t/p/w500/' + serie.poster_path,
    overview: serie.overview,
    loading: serie.loading,
    error: serie.error,
  };
};
const loadSerie = serieId => {
  return dispatch => {
    return getSerieInfo(serieId).then(res => {
      console.log(res.data);
      dispatch({ type: 'UPDATE_SERIE', serie: mapApiToReducer(res.data) });
    });
  };
};
const fetchSerieRecommendations = movieId => {
  return dispatch => {
    return getSerieRecommendation(movieId).then(res => {
      const results = res.data.results;
      const formattedRecommendations = results.map(serie => {
        return {
          normalImg: 'https://image.tmdb.org/t/p/w185' + serie.poster_path,
          title: serie.title,
          movieId: serie.id,
          redirect: '/serie/' + serie.id,
        };
      });
      dispatch({
        type: 'UPDATE_RECOMMENDATION',
        movies: formattedRecommendations,
      });
    });
  };
};
class SerieContainer extends Component {
  componentDidMount() {
    this.props.dispatch(loadSerie(this.props.match.params.serieId));
    this.props.dispatch(
      fetchSerieRecommendations(this.props.match.params.serieId),
    );
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.serieId !== nextProps.match.params.serieId) {
      console.log('refecching');
      this.props.dispatch(loadSerie(nextProps.match.params.serieId));

      this.props.dispatch(
        fetchSerieRecommendations(nextProps.match.params.serieId),
      );
    }
  }

  render() {
    console.log(this.props.img);
    return (
      <Serie
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

export default connect(mapStateToProps)(SerieContainer);
