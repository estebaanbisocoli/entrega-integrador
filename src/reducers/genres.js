export default (
  state = {
    movies: [],
  },
  action,
) => {
  switch (action.type) {
    case 'MOVIE_GENRE_FETCH':
      return action.genres;

    default:
      return state;
  }
};
