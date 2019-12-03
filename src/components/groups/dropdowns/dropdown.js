import React from 'react';
import styled from 'styled-components';

import { COLOR } from '../../../styles/colors';

const StyledDropdown = styled.select`
    appearance: none;
    background-color: white;
    padding: 5px;
    border: 1px solid ${COLOR.AZURE_VERY_DARK};
    border-radius: 7px;
    font-weight: 700px;
    color: black;
    cursor: pointer;
`;

const StyledOption = styled.option`
    appearance: none;
    padding: 2px;
    color: black;
    font-weight: 400;
    color: black;
`;

const Dropdown = ({ data }) => {
    return (
        <StyledDropdown name="item-one">
            <StyledOption value="val-0">Please select an option</StyledOption>
            {data.map(item => <StyledOption value={item.value}>{item.option}</StyledOption>)}
        </StyledDropdown>
    );
}

export default Dropdown;
