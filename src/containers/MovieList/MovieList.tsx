import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import data from '../../assets/data.json';

const MovieListStyles = styled.div`
    display: flex;
    justify-content: space-evenly;
    
    
`;
function MovieList(){
    return (
        <MovieListStyles>
            {
                data.map(movie => <Card movie={movie} />)
            }
        </MovieListStyles>
    )
}

export default MovieList;