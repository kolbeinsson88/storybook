import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import Button from '../components/groups/buttons/button';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    container.remove();
    container = null;
});

it('Test button for click event. Does have text', () => {
    const onClick = jest.fn();

    act(() => {
       ReactDOM.render(<Button disabled={false} type='danger' onClick={onClick}>Testing for click</Button>, container);
    });

    const btn = container.querySelector("button");

    act(() => {
        btn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    expect(onClick).toHaveBeenCalled();
    expect(container.textContent).toBe("Testing for click");
});


