// img="https://image.tmdb.org/t/p/w342/u3xx4Vd6idl4kynRh7qL6eJWVEA.jpg"
// title="Tomb Rider"
// crew={crew}
const crew = [
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
  { name: 'Esteban Bisocoli', position: 'Director' },
];
export default (
  state = {
    movieId: '',
    title: '',
    crew: crew,
    img: '',
    overview: '',
    loading: false,
    error: null,
  },
  action,
) => {
  switch (action.type) {
    case 'REQUEST_MOVIE':
      return { ...state, loading: true };
    case 'UPDATE_MOVIE':
      return { ...state, loading: false, ...action.movie };
    case 'FAIL_MOVIE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
