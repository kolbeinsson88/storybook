import React from 'react';

import AsideContent from '../components/templates/asideContent/asideContent';

class Styleguide extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalOpen: false,
         }
    };

    toggleModal() {
        this.setState({ modalOpen: false });
    }

    // <Toaster active={true}>Message</Toaster>

    render() {
        const { modalOpen } = this.state;

        return (
            <AsideContent aside="200px">Content</AsideContent>
        );
    }
}

export default Styleguide;