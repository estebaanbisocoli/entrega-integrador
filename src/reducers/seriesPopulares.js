export default (
  state = {
    series: [],
    loading: false,
    error: null,
    link: '/series',
  },
  action,
) => {
  switch (action.type) {
    case 'UPDATE_POPULAR_SERIES':
      return {
        ...state,
        loading: false,
        series: action.series,
      };
    default:
      return state;
  }
};
