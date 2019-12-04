import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

import Table from '../components/interfaces/table/table';
import Header from '../components/blocks/typography/header';

const StyledTable = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 200px;
`;

storiesOf('A world class table', module)
    .addDecorator(withKnobs)
    .add('Table', () => {
        return (
            <StyledTable>
                <Header>Table</Header>
                <Table>
                    <Table.head>
                        <Table.item>First row</Table.item>
                        <Table.item>Second row</Table.item>
                    </Table.head>
                    <Table.body>
                        <Table.row>
                            <Table.item>Item</Table.item>
                            <Table.item>Item</Table.item>
                        </Table.row>
                        <Table.row>
                            <Table.item>Item</Table.item>
                            <Table.item>Item</Table.item>
                        </Table.row>
                    </Table.body>
                </Table>
            </StyledTable>
        )
    });


