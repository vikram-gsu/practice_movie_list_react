import React from 'react';
import './App.css';
import MovieList from '../src/containers/MovieList/MovieList';
import {Nav} from '../src/components';

function App() {
  return (
    <div className="App">
      <Nav/>
      <MovieList />
    </div>
  );
}

export default App;
