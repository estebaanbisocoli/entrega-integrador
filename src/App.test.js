import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getPopularSeries } from './api/moviedbapi';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should return popular seris', done => {
  getPopularSeries().then(res => {
    console.log(res.data.results);
    done();
  });
});
