import React from 'react';
import {render, screen} from '@testing-library/react';
import Card from './Card';

const testMovie =  {
    "id": 1,
    "title": "Avatar",
    "distributor": "20th Century Fox",
    "year": 2009,
    "amount": "$2,787,965,087",
    "img": {
      "src": "media/avatar.jpg",
      "alt": "avatar"
    },
    "ranking": 1
  }
describe("Card test suite", ()=> {
    it("renders card without crashing", ()=> {
        render(<Card movie={testMovie} />)
        expect(screen.getByText('Avatar')).toBeInTheDocument();
    })
})