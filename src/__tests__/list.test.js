import React from 'react';
import TestRenderer from 'react-test-renderer';

import List from '../components/groups/list/list';

it("List should accept list items", () => {

    const reactTestRender = TestRenderer.create(<List />);
    const instance = reactTestRender.root;

    expect(instance.findAllByType);
});
