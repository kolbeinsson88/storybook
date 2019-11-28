import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
`;


const ListView = styled.ul`
    display: flex;
    flex-direction: row;
`;

const List = [
    'item one',
    'item one',
    'item one'
];

const Navbar = () => {
    return (
        <StyledNavbar>
            <ListView>
                <ul>{List.map(item => <li>{item}</li> )}</ul>
            </ListView>
        </StyledNavbar>
    );
}

export default Navbar;

