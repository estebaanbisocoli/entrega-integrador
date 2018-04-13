import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Section } from '../components/Section';
import { getPopularSeries } from '../api/moviedbapi';

function mapStateToProps({ seriesPopulares }) {
  return {
    sectionTitle: 'Series Populares',
    series: seriesPopulares.series,
    loading: seriesPopulares.loading,
    error: seriesPopulares.error,
    link: seriesPopulares.link,
  };
}

const loadSeries = () => {
  return dispatch => {
    return getPopularSeries().then(res => {
      if (res.data.results) {
        const serieList = res.data.results;
        const formatedSerie = serieList.map(serie => {
          return {
            title: serie.title,

            normalImg: 'https://image.tmdb.org/t/p/w185' + serie.poster_path,
            bigImg: 'https://image.tmdb.org/t/p/w500' + serie.poster_path,
            giantImg: 'https://image.tmdb.org/t/p/w780' + serie.poster_path,
            serieId: serie.id,
            redirect: '/serie/' + serie.id,
          };
        });
        dispatch({
          type: 'UPDATE_POPULAR_SERIES',
          series: formatedSerie,
        });
      }
    });
  };
};
class SeriesPopulares extends Component {
  componentDidMount() {
    this.props.dispatch(loadSeries());
  }
  render() {
    return (
      <Section
        sectionTitle={this.props.sectionTitle}
        items={this.props.series}
        link={this.props.link}
        loading={this.props.loading}
        error={this.props.error}
      />
    );
  }
}

export default connect(mapStateToProps)(SeriesPopulares);
