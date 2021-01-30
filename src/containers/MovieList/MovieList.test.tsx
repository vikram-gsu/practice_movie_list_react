import React from 'react';
import {render, screen} from '@testing-library/react';
import MovieList from './MovieList';


describe("Card test suite", ()=> {
    it("renders card without crashing", ()=> {
        render(<MovieList />)
        expect(screen.getByText('Avatar')).toBeInTheDocument();
    })
})