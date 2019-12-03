import React from 'react';
import styled from 'styled-components';

import Modal from '../components/groups/modal/modal';
import ModalContainer from '../components/groups/modal/ModalContainer';
import Carousel from '../components/interfaces/carousel/Carousel';
import Toaster from '../components/interfaces/toaster/toaster';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
`;

const StyledButton = styled.button`
    color: white;
    background-color: black;
    width: 162px;
    padding: 8px;
    border: none;
`;

const data = [
    'https://images.unsplash.com/photo-1561473940-82e2f2a321ad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600',
    'https://images.unsplash.com/photo-1541364208048-4d227de804a4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600',
    'https://images.unsplash.com/photo-1568355710231-48b7bc6fde12?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600',
    'https://images.unsplash.com/photo-1562706082-4b637e3b3070?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600',
];

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
        const { modalOpen } = this.state;

        return (
            <>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '250px' }}>
                    <Toaster active={true}>Message</Toaster>

                    <Carousel data={data} />
                    <Container>
                        <ModalContainer hasOpened={modalOpen}>
                            <Modal.Title>Top title</Modal.Title>
                            <Modal.Body>
                                Aliquam aliquam repellat a enim. Voluptatem ut ut pariatur maiores consequatur qui officia exercitationem velit. Distinctio ducimus iste beatae. Exercitationem et sunt autem omnis tempore occaecati sed omnis.
                                Minus amet eos ducimus iusto accusamus. Et dolorem esse magnam voluptas. Reiciendis explicabo et qui fugiat dolores. Necessitatibus atque sit nisi omnis similique ipsa officiis voluptas. Enim nobis ea.
                                Perspiciatis voluptatem autem. Ut sequi facere velit. Sed veritatis cumque. Perspiciatis ipsa voluptas possimus praesentium consectetur.
                            </Modal.Body>
                            <Modal.Footer>Adding footer</Modal.Footer>
                            <Modal.Button onClick={() => this.setState({modalOpen: false})}>Close</Modal.Button>
                        </ModalContainer>
                    </Container>
                    <Container>
                        <StyledButton onClick={() => this.setState({modalOpen: !this.modelOpen})} >Open Modal</StyledButton>
                    </Container>
                </div>
            </>
        );
    }
}

export default Styleguide;