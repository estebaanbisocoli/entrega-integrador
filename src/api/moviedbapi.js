import axios from 'axios';
const axiosInstace = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'bb3fa9e8630eb8881deec203879c4add',
    language: 'es-AR',
  },
});

const getPopularMovies = (page = 1) => {
  return axiosInstace.get('/movie/popular', {
    params: {
      page,
    },
  });
};

const getPopularSeries = (page = 1) => {
  return axiosInstace.get('/tv/popular', {
    params: {
      page,
    },
  });
};
const getMovieCrew = movieId => {
  return axiosInstace.get('/movie/' + movieId + '/credits');
};

const getMovieInfo = movieId => {
  return axiosInstace.get('/movie/' + movieId);
};
const getMovieRecommendation = movieId => {
  return axiosInstace.get(`/movie/${movieId}/recommendations`);
};

const getSerieInfo = serieId => {
  return axiosInstace.get('/tv/' + serieId);
};
const getSerieRecommendation = movieId => {
  return axiosInstace.get(`/tv/${movieId}/recommendations`, {});
};

const getPopularMoviesByFilter = (page, year, genreId) => {
  return axiosInstace.get('/discover/movie', {
    params: {
      page: page,
      sort_by: 'popularity.desc',
      primary_release_year: year || null,
      with_genres: genreId || null,
    },
  });
};

const getMoviesGenres = () => {
  return axiosInstace.get('/genre/movie/list');
};

const getPopularSeriesByFilter = (page, year, genreId) => {
  return axiosInstace.get('/discover/tv', {
    params: {
      page: page,
      sort_by: 'popularity.desc',
      primary_release_year: year || null,
      with_genres: genreId || null,
    },
  });
};

const getSeriesGenres = () => {
  return axiosInstace.get('/genre/tv/list');
};

export {
  getPopularSeriesByFilter,
  getSeriesGenres,
  getMoviesGenres,
  getPopularMoviesByFilter,
  getPopularMovies,
  getMovieRecommendation,
  getPopularSeries,
  getMovieInfo,
  getMovieCrew,
  getSerieInfo,
  getSerieRecommendation,
};
