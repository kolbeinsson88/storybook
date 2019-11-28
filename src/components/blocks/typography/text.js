import React from 'react';
import styled from '@emotion/styled';

const MainText = styled.p`
  color: ${props => props.color};
  font-size: 24px;
  font-weight: ${props => props.weight|400}px;  
`;

const LargeText = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: ${props => props.weight|400}px;
`;

const SmallText = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-weight: ${props => props.weight|400}px;
`;

const SubText = styled.sub`
  color: ${props => props.color};
  font-size: 14px;
  font-weight: 300px;
`;

const Text = ({color, children, weight}) => <MainText weight={weight} color={color}>{children}</MainText>;
Text.Large = ({color, children, weight}) => <LargeText weight={weight} color={color}>{children}</LargeText>;
Text.Small = ({color, children, weight}) => <SmallText weight={weight} color={color}>{children}</SmallText>;
Text.Sub = ({color, children}) => <SubText color={color}>{children}</SubText>;

export default Text;
