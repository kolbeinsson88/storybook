import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Card from '../components/groups/card/card';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach (() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it('Card', () => {
    act(() => render(<Card>Card</Card>, container));
    // expect(container.querySelectorAll('div')).toStrictEqual('div');
    console.log(container.querySelectorAll('div'));
});


