import React from 'react';
import TestRenderer from 'react-test-renderer';

import {TitleWrapper, ItemsWrapper} from '../components/groups/list/list';

it("List should contain h3 text element", () => {
    const reactTestRender = TestRenderer.create(<TitleWrapper>title</TitleWrapper>).root;
    expect(reactTestRender.props.children).toEqual("title");
});


it("List contains and renders a div", () => {
    const reactTestRender = TestRenderer.create(<ItemsWrapper>title</ItemsWrapper>).root;
    expect(reactTestRender.props.children).toEqual("title");    
});
