import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DisplayedContent } from '../components/contents';
import {
  getPopularMovies,
  getMoviesGenres,
  getPopularMoviesByFilter,
} from '../api/moviedbapi';
import { formatPromise } from '../controllers';
// que se encargue el formato el reducer
function mapStateToProps({ peliculasPage }) {
  return {
    title: peliculasPage.title,
    items: peliculasPage.movies,
    error: peliculasPage.error,
    loading: peliculasPage.loading,
    page: peliculasPage.page,
    filters: peliculasPage.filters,
    genres: peliculasPage.genres,
    totalPages: peliculasPage.totalPages,
  };
}
const fetchPopularMovies = page => {
  return async dispatch => {
    dispatch({ type: 'PELICULAS_PAGE_FETCH' });
    try {
      let res = await formatPromise(getPopularMovies());
      return dispatch({ type: 'PELICULAS_PAGE_SUCCESS', movies: res.data });
    } catch (error) {
      return dispatch({ type: 'PELICULAS_PAGE_FAIL', error });
    }
  };
};

const fetchFilterMovies = (page = 1, year, genre) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'PELICULAS_PAGE_FETCH',
        filters: { year, genre },
      });
      let res = await getPopularMoviesByFilter(page, year, genre);

      dispatch({ type: 'PELICULAS_PAGE_SUCCESS', movies: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'PELICULAS_PAGE_FAIL', error });
    }
  };
};

const fetchGenres = () => {
  return async dispatch => {
    try {
      let res = await getMoviesGenres();
      console.log(res);
      dispatch({ type: 'FETCH_MOVIES_GENRES', genres: res.data.genres });
    } catch (error) {
      console.log(error);
    }
  };
};

class PeliculasPageContainer extends Component {
  componentDidMount() {
    this.props.dispatch(
      fetchFilterMovies(
        this.props.page,
        this.props.filters.year,
        this.props.filters.genre,
      ),
    );
    this.props.dispatch(fetchGenres());
  }
  onChangeYear(year) {
    this.props.dispatch(fetchFilterMovies(1, year, this.props.filters.genre));
  }
  onChangeGenre(genreId) {
    this.props.dispatch(fetchFilterMovies(1, this.props.filters.year, genreId));
  }

  onPageChange(page) {
    console.log(this.props, 'mis props');

    this.props.dispatch(
      fetchFilterMovies(
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

export default connect(mapStateToProps)(PeliculasPageContainer);
