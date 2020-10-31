import { rgba, lighten } from 'polished';

import cloud from '../../assets/cloud_dark.svg';
import clouds from '../../assets/many_clouds_dark.svg';

export default {
  type: 'dark',

  primaryDark: '#19181f',
  primary: '#0b0a0d',
  primaryLight: '#111014',

  tertiary: '#f9f871',

  inputBackground: rgba('#333', 0.4),
  placeholder: lighten(0.2, '#333'),
  tooltipBackground: rgba('#fff', 0.8),

  cloud,
  clouds,
};
