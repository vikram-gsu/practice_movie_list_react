import React from 'react';
import styled from 'styled-components';
import MovieList from '../src/containers/MovieList/MovieList';
import {Nav} from '../src/components';

const AppStyles = styled.div`
  display: grid;
  
  grid-template: 5em 100vh/10% 1fr 10%;
  grid-template-areas:
          ". header ."
          ". content .";
`;

function App() {
  return (
    <AppStyles>
      <Nav/>
      <MovieList />
    </AppStyles>
  );
}

export default App;
