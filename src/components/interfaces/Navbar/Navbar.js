import React from 'react';
import styled from 'styled-components';

import { COLOR } from '../../../styles/colors';
import SearchBar from '../../blocks/inputs/searchBar';
import Button from '../../groups/buttons/button';

const FirstRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SecondRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ListView = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 16px;
    background-color: ${COLOR.GREEN_DARK};
    justify-content: space-between;
    font-weight: 400;
    
    li {
        margin-right: 4px;
        font-weight: 600;
    
        a {
            color: black;
            text-decoration: none;
            padding: 0 18px;
        }

        a:hover {
            color: white;
            text-decoration: underline;
        }
    }
`;

const Navbar = ({links}) => {
    return (
        <nav>
            <ListView>
                <FirstRow>{links ? links.map(item => <li key={item.value}><a href="/" >{item}</a></li>): null}</FirstRow>
                <SecondRow>
                    <SearchBar onClick={(e) => console.log(e.target.value)} />
                    <Button disabled={false} onClick={(e) => console.log(e)} type="search" margin="16px">Search</Button>
                </SecondRow>
            </ListView>
        </nav>
    );
}

export default Navbar;

