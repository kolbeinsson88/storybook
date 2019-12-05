import React from 'react';


import AsideContent from '../components/templates/asideContent/asideContent';
import ProgressBar from '../components/interfaces/progress/progressBar';



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

    render() {
        return (
            <>
                <AsideContent 
                    aside="200px"
                >
                    Content
                </AsideContent>            
                <ProgressBar
                    bg="green"
                    progress={80}
                />
            </>

        );
    }
}

export default Styleguide;