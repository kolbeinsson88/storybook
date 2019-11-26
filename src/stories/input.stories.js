import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import Input from '../components/blocks/inputs/input';
import Header from '../components/blocks/typography/header';

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    input {
        width: 400px;
        margin-top: 16px;
    }
`;

storiesOf('Input', module)
    .addDecorator(withKnobs)
    .add('Input', () => {
        return (
            <InputWrapper>
                <Header.h1>Your input</Header.h1>
                <Input placeholder={object('placeholder', 'Type...')} />;
            </InputWrapper>
        )
    });

