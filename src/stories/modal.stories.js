import React from 'react';
import styled from 'styled-components';

import Modal from '../components/groups/modal/modal';
import ModalContainer from '../components/groups/modal/modal';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const StyledComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

storiesOf('Modal', module)
    .addDecorator(withKnobs)
    .addDecorator(stories => {
        return (
            <StyledComponent>
                 <h1>Modal</h1>
                {stories()}
            </StyledComponent>
        );
    })
    .add('Modal Large', () => {
        return (
            <ModalContainer isOpen={false}>
                <Modal.Title>Omnis sit eaque.</Modal.Title>
                <hr />
                <Modal.Body>
                    Amet blanditiis labore aut in consequatur. Impedit non sapiente exercitationem cupiditate tempora quia quae ducimus amet. Aliquam iste unde dolorum aut sit perferendis unde esse. Asperiores laborum deleniti quaerat. Eveniet enim quod ipsa eos sunt veritatis quia beatae quibusdam. Illo esse officia aut.
                    Iusto sapiente in cumque minima nisi aspernatur dicta optio. Illum dolor aperiam quidem nam voluptatibus et et. Iure eveniet sunt dolorem. Placeat dolor enim rem quaerat iusto. Distinctio animi velit fugiat rem ipsum rerum rerum.
                    Cupiditate in harum voluptatem. Sapiente eum occaecati reprehenderit. Magnam necessitatibus et est consequatur adipisci autem.
                </Modal.Body>
                <Modal.Footer>
                    Accusantium sequi repellendus quia aut eos accusantium. Dolore cupiditate velit et ad. Molestiae repellendus nam qui temporibus quasi dignissimos. Ea non expedita corrupti cupiditate. Est et fugiat animi eius rerum. At pariatur doloremque aut sapiente sed minus.
                </Modal.Footer>
            </ModalContainer>
        );
    });

