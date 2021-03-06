import React from 'react';
import styled from 'styled-components';
import Movie from '../types/Movie';

const CardStyles = styled.div`
 display: flex;
 flex-direction: column;
 background-color: #eee;
 /* width: 15%; */
 margin: 0.2em;
 height: 60vh;
 
`;
const CardPicture = styled.div`
    
    img {
        width: 100%;
        height: 40vh;
    }
    /* height: 3em; */
`;

const CardContent = styled.div`
    padding: 1em;
    flex-grow:4;
    text-align: left;
    overflow: auto;
`;
export interface CardProps {
    movie: Movie
}
function Card({movie}: CardProps){
    const {ranking, title, img, year, amount, distributor} = movie;
    const {src, alt} = img;
    return (
        <CardStyles>
            <CardPicture>
                <img src={src} alt={alt} />
            </CardPicture>
            <CardContent>
                <h2>#{ranking} {title}</h2>
                <div>Year: {year}</div>
                <div>Distributed by: {distributor}</div>
                <div>Amount: {amount}</div>
            </CardContent>
        </CardStyles>
    )
}

export default Card;