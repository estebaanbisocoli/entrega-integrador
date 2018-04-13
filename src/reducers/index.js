import { combineReducers } from 'redux';
import peliculasPopulares from './peliculasPopulares';
import pelicula from './pelicula';
import recomendacion from './recomendacion';
import seriesPopulares from './seriesPopulares';
import serie from './serie';
import peliculasPage from './peliculasPage';
import seriesPage from './seriesPage';
const rootReducer = combineReducers({
  peliculasPopulares,
  pelicula,
  recomendacion,
  seriesPopulares,
  serie,
  seriesPage,
  peliculasPage,
});

export default rootReducer;
