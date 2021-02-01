import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import data from '../../assets/data.json';

const MovieListStyles = styled.div`
    grid-area: content;
    display: flex;
    justify-content: space-evenly;
    @media (max-width:1024px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* grid-template-areas:
                ". header ."
                ". content ."; */
    }
    
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