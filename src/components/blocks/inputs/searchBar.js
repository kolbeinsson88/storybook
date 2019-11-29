import React from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.input`
    appearance: none;
    border-radius: 2px;
    border: none;
    padding: 4px;
`;

const SearchBar = ({onClick}) => {
    return <StyledSearchBar onClick={(e) => onClick(e)} placeholder="Search...." />;
};

export default SearchBar;
