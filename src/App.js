import React, { Component } from 'react';

//TODO: agregar paginacion
//TODO: agregar el otro formato de vista de cartas
import { MainNav, Content } from './components/layout';
class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <Content />
      </div>
    );
  }
}

export default App;
