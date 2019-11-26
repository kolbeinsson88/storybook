import React from 'react';
import { storiesOf } from '@storybook/react';

import List from '../components/list/list'; 

storiesOf('List')
    .add('List', () => {
        return (
            <List>
                <List.li>Item one</List.li>
                <List.li>Item two</List.li>
            </List>
        )
    });
