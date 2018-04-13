import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DisplayedContent } from '../components/contents';
import { getSeriesGenres, getPopularSeriesByFilter } from '../api/moviedbapi';

// que se encargue el formato el reducer
function mapStateToProps({ seriesPage }) {
  return {
    title: seriesPage.title,
    items: seriesPage.series,
    error: seriesPage.error,
    loading: seriesPage.loading,
    page: seriesPage.page,
    filters: seriesPage.filters,
    genres: seriesPage.genres,
    totalPages: seriesPage.totalPages,
  };
}

const fetchFilterSeries = (page = 1, year, genre) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SERIES_PAGE_FETCH',
        filters: { year, genre },
      });
      let res = await getPopularSeriesByFilter(page, year, genre);

      dispatch({ type: 'SERIES_PAGE_SUCCESS', series: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'SERIES_PAGE_FAIL', error });
    }
  };
};

const fetchGenres = () => {
  return async dispatch => {
    try {
      let res = await getSeriesGenres();

      dispatch({ type: 'FETCH_SERIES_GENRES', genres: res.data.genres });
    } catch (error) {
      console.log(error);
    }
  };
};

class seriesPageContainer extends Component {
  componentDidMount() {
    this.props.dispatch(
      fetchFilterSeries(
        this.props.page,
        this.props.filters.year,
        this.props.filters.genre,
      ),
    );
    this.props.dispatch(fetchGenres());
  }
  onChangeYear(year) {
    this.props.dispatch(fetchFilterSeries(1, year, this.props.filters.genre));
  }
  onChangeGenre(genreId) {
    this.props.dispatch(fetchFilterSeries(1, this.props.filters.year, genreId));
  }

  onPageChange(page) {
    console.log(this.props, 'mis props');

    this.props.dispatch(
      fetchFilterSeries(
        page,
        this.props.filters.year,
        this.props.filters.genre,
      ),
    );
  }

  render() {
    return (
      <DisplayedContent
        title={this.props.title}
        items={this.props.items}
        error={this.props.error}
        loading={this.props.loading}
        page={this.props.page}
        onChangeYear={this.onChangeYear.bind(this)}
        onChangeGenre={this.onChangeGenre.bind(this)}
        year={this.props.filters.year}
        genre={this.props.filters.genre}
        genres={this.props.genres}
        totalPages={this.props.totalPages}
        onPageChange={this.onPageChange.bind(this)}
      />
    );
  }
}

export default connect(mapStateToProps)(seriesPageContainer);
