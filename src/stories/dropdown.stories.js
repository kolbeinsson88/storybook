import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Dropdown from '../components/groups/dropdowns/dropdown';
import Header from '../components/blocks/typography/header';

const StyledDropdown = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

const DATA = [
    { value: 'val1', option: 'opt1'},
    { value: 'val2', option: 'opt2'}
]

storiesOf('Dropdown', module)
    .add('Dropdown', () => {
        return (
            <StyledDropdown>
                <Header.h1>Dropdown</Header.h1>
                <br />
                <Dropdown data={DATA} />
            </StyledDropdown>
        );
    });

