import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import { Header, Text } from '../components/index';

storiesOf('Typography', module)
    .addDecorator(withKnobs)
    .addDecorator(story => {
        return (
            <>
                <div className="column">
                    <Header>Typography</Header>
                    <Text.Small>Abel</Text.Small>
                </div>
                <div className="typography-container">
                    {story()}            
                </div> 
            </>
        )
    })
    .add('Texts', () => {
        return (
            <>
                <div className="row">
                    <Text.Sub>24px | 400</Text.Sub>
                    <Text color={object('color', 'black')} >Goes well with larger text examples</Text>
                </div>
                <div className="row">
                    <Text.Sub>20px | 400</Text.Sub>
                    <Text.Large color={object('color', 'black')}>Goes well with larger text examples</Text.Large>
                </div>
                <div className="row">
                    <Text.Sub>18px | 400</Text.Sub>
                    <Text.Small color={object('color', 'black')}>Goes well with larger text examples</Text.Small>
                </div>
                <div className="row">
                    <Text.Sub>14px | 300</Text.Sub>
                    <Text.Sub color={object('color', 'black')}>Goes well with larger text examples</Text.Sub>
                </div>
            </>
        );
    })
    .add('Headers', () => {
        return (
            <>
            <div className="row">
                <Text.Sub>26px | 700</Text.Sub>
                <Header margin={object('margin', 10)} color={object('color', 'black')}>Main header</Header>
            </div>
            <div className="row">
                <Text.Sub>24px | 600</Text.Sub>
                <Header.h1 margin={object('margin', 10)} color={object('color', 'black')}>Header h1</Header.h1>
            </div>
            <div className="row">
                <Text.Sub>22px | 500</Text.Sub>
                <Header.h2 margin={object('margin', 10)} color={object('color', 'black')}>Header h2</Header.h2>
            </div>
            <div className="row">
                <Text.Sub>22px | 500</Text.Sub>
                <Header.h3 margin={object('margin', 10)} color={object('color', 'black')}>Header h3</Header.h3>
            </div>
            <div className="row">
                <Text.Sub>20px | 500</Text.Sub>
                <Header.h4 margin={object('margin', 10)} color={object('color', 'black')}>Header h4</Header.h4>
            </div>
            <div className="row">
                <Text.Sub>18px | 400</Text.Sub>
                <Header.h5 margin={object('margin', 10)} color={object('color', 'black')}>Header h5</Header.h5>
            </div>
            <div className="row">
                <Text.Sub>16px | 400</Text.Sub>
                <Header.h6 margin={object('margin', 10)} color={object('color', 'black')}>Header h6</Header.h6>
            </div>
        </>
        );
    });