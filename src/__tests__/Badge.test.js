import React from 'react';
import { render, unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';

import Badge from '../components/blocks/badge/badge';

// Setup
let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

// Teardown
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('It has text content and renders', () => {
    act(() => {
        render(
            <Badge >Hi</Badge>, 
            container
        );
    });

    expect(container.querySelector("div").textContent).toStrictEqual("Hi");
});