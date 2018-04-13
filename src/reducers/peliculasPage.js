const mapMovie = movie => {
  if (movie.poster_path) {
    return {
      url: `https://image.tmdb.org/t/p/w185${movie.poster_path}`,
      id: movie.id,
      alt: movie.title,
      link: `/movie/${movie.id}`,
      active: false,
      releaseDate: movie.release_date,
    };
  }
};

const filterMovies = movie => {
  if (movie.poster_path) {
    return true;
  } else {
    return false;
  }
};
export default (
  state = {
    title: 'Peliculas',
    movies: [],
    page: 1,
    totalPages: 1,
    loading: false,
    error: null,
    filters: {
      year: null,
      genre: null,
    },
    genres: [],
  },
  action,
) => {
  switch (action.type) {
    case 'PELICULAS_PAGE_FETCH':
      let newFilters = Object.assign(state.filters);
      if (action.filters) {
        if (action.filters.year) {
          newFilters.year = action.filters.year;
        }
        if (action.filters.genre) {
          newFilters.genre = action.filters.genre;
        }
      }

      return { ...state, loading: true, filters: newFilters };
    case 'PELICULAS_PAGE_FAIL':
      return { ...state, loading: false, error: action.error };
    case 'PELICULAS_PAGE_SUCCESS':
      return {
        ...state,
        page: action.movies.page,
        totalPages: action.movies.total_pages,
        loading: false,
        error: false,
        movies: action.movies.results.filter(filterMovies).map(mapMovie),
      };
    case 'FETCH_MOVIES_GENRES':
      return { ...state, genres: action.genres };
    default:
      return state;
  }
};
