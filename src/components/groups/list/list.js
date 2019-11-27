import React from 'react';
import styled from 'styled-components';


const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Li = styled.li`
  padding: 0;
  margin: 8px 0;
`;

const TitleWrapper = styled.h3`
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const ItemsWrapper = styled.div`
  font-weight: 400;
  margin: 8px 0 16px 24px;
  padding: 0;
`;


const List = ({children, title = ''}) => {
  return (
    <ListWrapper>
      <TitleWrapper>
          {title}
      </TitleWrapper>
      <ItemsWrapper>
        {children}   
      </ItemsWrapper>
    </ListWrapper>
  );
};

List.li = ({children}) => <Li>{children}</Li>;

export default List;
