import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

import Header from '../components/blocks/typography/header';
import Badge from '../components/blocks/badge/badge';

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 16px 0;
    border: 1px solid black;
    box-shadow: 1px 1px grey;
    padding: 32px;
    margin: 8px 32px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

storiesOf('Badge', module)
    .addDecorator(withKnobs)
    .addDecorator(story => {
        return (
            <Container>
                <Header.h1>Badges</Header.h1>
                {story()}
            </Container>
        )
    })
    .add('Badges', () => {
        return (
            <ButtonWrapper>
                <Badge variant="success">Green Badge</Badge>
                <Badge variant="danger">Danger badge</Badge>
                <Badge variant="info">Info badge</Badge>
            </ButtonWrapper>
        )
    });
