import React from 'react';
import styled from '@emotion/styled';

const InputStyled = styled.input`
  padding: 5px;
  color: 'black';
`;

const Input = ({ placeholder, children }) => <InputStyled placeholder={placeholder}>{children}</InputStyled>

export default Input;