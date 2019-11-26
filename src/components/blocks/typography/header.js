import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Base = styled.h1`
  font-size: 28px;
  font-weight: 500px;
  margin: ${props => props.margin|0}px;
`;

const H1 = styled.h1`
  font-size: 26px;
  font-weight: 700px;
  margin: ${props => props.margin|0}px;
`;

const Header = ({children, margin}) => <Base margin={margin}>{children}</Base>;
Header.h1 = ({children, margin}) => <H1 margin={margin} >{children}</H1>;

Header.propTypes = {
  children: PropTypes.any,
  margin: PropTypes.number
};

export default Header;