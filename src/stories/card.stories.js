import React from 'react';

import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Card from '../components/groups/card/card';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const H1 = styled.h1`
    padding: 8px 4px;
    margin: 8px;
`;

storiesOf('Card', module)
    .addDecorator(story => {
        return (
            <CardContainer>
                <H1>Card</H1>
                {story()}    
            </CardContainer>
        );
    })
    .add('Card (Basic)', () => {
        return (
            <Card title="Details" img="https://images.unsplash.com/photo-1573021943124-1893c9bc12dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9">
                Vel perferendis dolor quibusdam inventore provident et dignissimos. Recusandae placeat minus repellat animi. Libero odit hic.
            </Card> 
            );
    });


