import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import styled from 'styled-components';


import List from '../components/groups/list/list'; 
import OrderedList from '../components/groups/list/orderedList';

import Header from '../components/blocks/typography/header';
import { COLOR } from '../styles/colors';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 64px;
  align-items: center;
  border: 1px solid ${COLOR.GRAY_LIGHT};
  padding: 8px;
  box-shadow: 1px 1px black;
`;

storiesOf('List')
    .addDecorator(withKnobs)
    .addDecorator(story => {
        return (
            <>
                <Header>List Items</Header>
                <ListWrapper>
                    {story()}
                </ListWrapper>
            </>
        );
    })
    .add('List', () => {
        return (
            <List title={object('title', 'Not good drinks: ')}>
                <List.li>Blue mountain.</List.li>
                <List.li>Mountain dew.</List.li>
                <List.li>Jenkyns Ice T.</List.li>
            </List>
        )
    })
    .add('Ordered list', () => {
        return (
            <OrderedList title={object('title', 'Good drinks: ')}>
                <OrderedList.li>Water</OrderedList.li>
                <OrderedList.li>Tea</OrderedList.li>
                <OrderedList.li>Orange soda</OrderedList.li>
            </OrderedList>
        );
    });
