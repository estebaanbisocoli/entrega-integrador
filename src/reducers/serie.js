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
    serieId: '',
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
    case 'REQUEST_SERIE':
      return { ...state, loading: true };
    case 'UPDATE_SERIE':
      return { ...state, loading: false, ...action.serie };
    case 'FAIL_SERIE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
