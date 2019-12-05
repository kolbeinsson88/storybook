import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Navbar from '../components/interfaces/Navbar/Navbar';

const List = [
    'Home',
    'Orders',
    'Offers'
];

storiesOf('Navbar', module)
    .addDecorator(withKnobs)
    .add('Navbar', () => {
        return <Navbar links={List} />;
    });
