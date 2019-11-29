import React from 'react';

import Background from '../components/blocks/backgrounds/background';

import { Text, Header, Button } from '../components/index';



const Styleguide = () => {
    return (
        <>
            <Background align="center">
                <Header>Header Primary</Header>
                <Header.h1 margin={20}>Header secondary</Header.h1>
                <Text weight="bold" color="hotpink">Basic text example in pink</Text>
                <Text.Large color="green">Large text example in green</Text.Large>
            </Background>
            <Background align="center">
                <Header margin={10}>Button groups</Header>
                <Button margin={10} type="success">Success</Button>
                <Button margin={10} type="danger">Danger</Button>
            </Background>
        </>
    );
};

export default Styleguide;