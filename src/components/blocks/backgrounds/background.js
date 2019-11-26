import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
  margin: 100px 300px;
  padding: 10px;

  box-shadow: 2px 1px 2px 1px;
`;

const BackgroundComponent = ({children, align}) => <Background align={align}>{children}</Background>;

BackgroundComponent.propTypes = { 
  children: PropTypes.any,
  align: PropTypes.string
};

export default BackgroundComponent;