import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ol`
    margin: 0;
    padding: 0;
`;

const Li = styled.li`
    padding: 0;
    margin: 8px 0 8px 56px;
`;

const TitleWrapper = styled.h3`
    font-weight: 600;
    margin: 0;
    padding: 0;
`;

const OrderedList = ({children, title=''}) => {
    return (
        <ListWrapper>
            <TitleWrapper>
                {title}
            </TitleWrapper>
            {children}
        </ListWrapper>
    )
};

OrderedList.li = ({children}) => <Li>{children}</Li>;

export default OrderedList;