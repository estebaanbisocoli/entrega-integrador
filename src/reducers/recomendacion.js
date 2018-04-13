export default (
  state = {
    movies: [],
    loading: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case 'UPDATE_RECOMMENDATION':
      return { ...state, movies: action.movies };

    default:
      return state;
  }
};
