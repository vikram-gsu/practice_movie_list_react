import React from 'react';
import styled from 'styled-components';


const NavStyles = styled.div`
    display: flex;
`;

function Nav(){
    return (
        <NavStyles>
            <h1>MovieList</h1>
        </NavStyles>
    )
}

export default Nav;