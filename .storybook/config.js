import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';

import Styles from '../src/styles/styles';

addDecorator(stories => (
    <>
        <Styles />
        {stories()}
    </>
));

configure(requireContext('../src/stories', true, /\.stories\.js$/), module);
