import React from 'react';
import { storiesOf } from '@storybook/react';

import { Background, Header, Text } from '../components/index';

storiesOf('Typography', module)
    .add('Text examples', () => {
        return (
            <Background>
                <Header>Typography</Header>
                <Text color="hotpink">Pink text</Text>
                <Text.Large>Goes well with larger text examples</Text.Large>
            </Background>
        );
    });