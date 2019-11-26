import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Base = styled.h1`
  font-size: 28px;
  font-weight: ${props => props.weight|700}px;
  margin: ${props => props.margin|0}px;
`;

const H1 = styled.h1`
  font-size: 26px;
  font-weight: ${props => props.weight|600}px;
  margin: ${props => props.margin|0}px;
`;

const H2 = styled.h2`
  font-size: 24px;
  font-weight: ${props => props.weight|500}px;
  margin: ${props => props.margin|0}px;
`;

const H3 = styled.h3`
  font-size: 22px;
  font-weight: ${props => props.weight|500}px;
  margin: ${props => props.margin|0}px;
`;

const H4 = styled.h4`
  font-size: 20px;
  font-weight: ${props => props.weight|500}px;
  margin: ${props => props.margin|0}px;
`;

const H5 = styled.h5`
  font-size: 18px;
  font-weight: ${props => props.weight|400}px;
  margin: ${props => props.margin|0}px;
`;

const H6 = styled.h6`
  font-size: 16px;
  font-weight: ${props => props.weight|400}px;
  margin: ${props => props.margin|0}px;
`;

const Header = ({children, margin, weight}) => <Base margin={margin} weight={weight}>{children}</Base>;
Header.h1 = ({children, margin, weight}) => <H1 margin={margin} weight={weight}>{children}</H1>;
Header.h2 = ({children, margin, weight}) => <H2 margin={margin} weight={weight}>{children}</H2>;
Header.h3 = ({children, margin, weight}) => <H3 margin={margin} weight={weight}>{children}</H3>;
Header.h4 = ({children, margin, weight}) => <H4 margin={margin} weight={weight}>{children}</H4>;
Header.h5 = ({children, margin, weight}) => <H5 margin={margin} weight={weight}>{children}</H5>;
Header.h6 = ({children, margin, weight}) => <H6 margin={margin} weight={weight}>{children}</H6>;

Header.propTypes = {
  children: PropTypes.any,
  margin: PropTypes.number
};

export default Header;