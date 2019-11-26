import React from 'react';
import { storiesOf } from '@storybook/react';

import { Background } from '../components/index';

storiesOf('background', module)
  .add('background', () => <Background>Some background</Background> );
