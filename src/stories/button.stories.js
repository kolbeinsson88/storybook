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
    }).add('Button', () => {
        return (
            <div>
                <Button onClick={action('button-click')} type="danger">Success Button</Button>
                <Button onClick={action('button-click')} type="success">Danger Button</Button>
                <Button onClick={action('button-click')} type="info">Info Button</Button>
                <Button onClick={action('button-click')} type="main">Main</Button>
            </div>
        );
    })
    .add('Disabled', () => {
        return <Button disabled onClick={action('button-click')} type={object('type', 'success')}>Success Button</Button>;
    })