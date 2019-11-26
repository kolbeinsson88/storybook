import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Li = styled.li`
  padding: 0;
  margin: 0;  
`;

const Ol = styled.ol`
  padding: 0;
  margin: 0;
`;

const List = ({children}) => <ListWrapper>{children}</ListWrapper>;

List.li = ({children}) => <Li>{children}</Li>;

List.ol = ({children}) => <Ol>{children}</Ol>;

export default List;
