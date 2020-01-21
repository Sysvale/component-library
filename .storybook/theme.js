import { create } from '@storybook/theming';
import componentLibraryLogo from '../src/assets/scl3.svg';

export default create({
  base: 'light',
  colorPrimary: '#074fa6',
  colorSecondary: '#074fa6d2',

  // UI
  appBg: '#fafafa',
  appContentBg: '#fafafa',
  appBorderColor: 'silver',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#212529',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barSelectedColor: 'black',

  // Form colors
  inputBg: 'white',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Sysvale Components',
  brandUrl: 'https://sysvale.com',
  brandImage: componentLibraryLogo,
});