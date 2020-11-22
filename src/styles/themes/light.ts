import { darken } from 'polished';

import cloud from '../../assets/cloud.svg';
import clouds from '../../assets/many_clouds.svg';

export default {
  type: 'light',

  primaryDark: '#0088c1',
  primary: '#00bdfa',
  primaryLight: '#00d5e1',

  tertiary: '#f9f871',

  inputBackground: 'rgba(0, 0, 0, 0.2)',
  placeholder: darken(0.2, '#fff'),
  tooltipBackground: '#fff',

  cloud,
  clouds,
};
