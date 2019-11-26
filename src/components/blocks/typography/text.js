import React from 'react';
import styled from '@emotion/styled';

const MainText = styled.p`
  color: ${props => props.color};
  font-size: 1rem;
`;

const LargeText = styled.p`
  color: ${props => props.color};
  font-size: 1.2rem;
  font-weight: ${props => props.weight};
`;

const Text = ({color, children, weight}) => <MainText weight={weight} color={color}>{children}</MainText>;
Text.Large = ({color, children, weight}) => <LargeText weight={weight} color={color}>{children}</LargeText>;

export default Text;
