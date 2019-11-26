import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

import { Button } from '../components/index';
import Header from '../components/blocks/typography/header';


storiesOf('Buttons', module)
    .addDecorator(withKnobs)
    .addDecorator(story => {
        return (
            <div style={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Header margin={16} >Buttons</Header>
                {story()}
            </div>
        );
    })
    .add('Button success', () => {
        return <Button onClick={action('button-click')} type={object('type', 'success')}>Success Button</Button>;
    })
    .add('Button danger', () => {
        return <Button onClick={action('button-click')} type={object('type', 'danger')}>Danger Button</Button>;
    })
    .add('Button info', () => {
        return <Button onClick={action('button-click')} type={object('type', 'info')}>Info Button</Button>
    });