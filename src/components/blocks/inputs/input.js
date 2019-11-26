import React from 'react';
import styled from '@emotion/styled';

import { COLOR } from '../../../styles/colors';

const InputStyled = styled.input`
  padding: 8px;
  font-family: 'BenchNine', sans-serif;
  font-size: 17px;
  border: 1px solid ${COLOR.AZURE_VERY_DARK};

  color: ${COLOR.IVORY_DARK};
`;

const Input = ({ placeholder }) => <InputStyled placeholder={placeholder} />;

export default Input;