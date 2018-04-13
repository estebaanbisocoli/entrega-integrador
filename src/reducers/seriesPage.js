const mapSerie = serie => {
  if (serie.poster_path) {
    return {
      url: `https://image.tmdb.org/t/p/w185${serie.poster_path}`,
      id: serie.id,
      alt: serie.title,
      link: `/serie/${serie.id}`,
      active: false,
      releaseDate: serie.release_date,
    };
  }
};

const filterSeries = serie => {
  if (serie.poster_path) {
    return true;
  } else {
    return false;
  }
};
export default (
  state = {
    title: 'Series',
    series: [],
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
    case 'SERIES_PAGE_FETCH':
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
    case 'SERIES_PAGE_FAIL':
      return { ...state, loading: false, error: action.error };
    case 'SERIES_PAGE_SUCCESS':
      return {
        ...state,
        page: action.series.page,
        totalPages: action.series.total_pages,
        loading: false,
        error: false,
        series: action.series.results.filter(filterSeries).map(mapSerie),
      };
    case 'FETCH_SERIES_GENRES':
      return { ...state, genres: action.genres };
    default:
      return state;
  }
};
