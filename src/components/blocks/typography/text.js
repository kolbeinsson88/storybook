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

const MediumText  = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 300px;
`;


const Text = ({color, children, weight}) => {
  return (
    <MainText weight={weight} color={color}>{children}</MainText>
  );
};

Text.Large = ({color, children, weight}) => {
  return (
    <LargeText weight={weight} color={color}>{children}</LargeText>
  );
};

Text.Small = ({color, children, weight}) => {
  return (
    <SmallText weight={weight} color={color}>{children}</SmallText>
  );
};

Text.Sub = ({color, children}) => {
  return (
    <SubText color={color}>{children}</SubText>
  );
};

Text.Medium = ({color, children}) => {
  return (
    <MediumText color={color}>{children}</MediumText>
  );
};

export default Text;
