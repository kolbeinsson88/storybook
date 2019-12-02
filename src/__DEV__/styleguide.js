import React from 'react';

import Modal from '../components/groups/modal/modal';
import ModalContainer from '../components/groups/modal/ModalContainer';

class Styleguide extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalOpen: true,
         }
    };

    toggleModal() {
        this.setState({ modalOpen: false });
    }

    render() {
        const { modalOpen } = this.state;

        return (
            <>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <ModalContainer hasOpened={modalOpen}>
                        <Modal.Title>Title</Modal.Title>
                        <Modal.Body>
                            Aliquam aliquam repellat a enim. Voluptatem ut ut pariatur maiores consequatur qui officia exercitationem velit. Distinctio ducimus iste beatae. Exercitationem et sunt autem omnis tempore occaecati sed omnis.
                            Minus amet eos ducimus iusto accusamus. Et dolorem esse magnam voluptas. Reiciendis explicabo et qui fugiat dolores. Necessitatibus atque sit nisi omnis similique ipsa officiis voluptas. Enim nobis ea.
                            Perspiciatis voluptatem autem. Ut sequi facere velit. Sed veritatis cumque. Perspiciatis ipsa voluptas possimus praesentium consectetur.
                        </Modal.Body>
                        <Modal.Footer>Adding footer</Modal.Footer>
                        <button onClick={() => this.setState({modalOpen: false})}>Close</button>
                    </ModalContainer>
                    <button onClick={() => this.setState({modalOpen: !this.modelOpen})}>Open</button>
                </div>
            </>
        );
    }
}

export default Styleguide;