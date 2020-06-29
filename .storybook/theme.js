import { create } from '@storybook/theming';
import componentLibraryLogo from '../src/assets/scl3.svg';

export default create({
  base: 'light',
  colorPrimary: '#074fa6',
  colorSecondary: '#074fa6d2',

  // UI
  appBg: '#FAFBFE',
  appContentBg: '#FAFBFE',
  appBorderColor: 'silver',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Muli", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#212529',
  textInverseColor: '#ffffffe6',

  // Toolbar default and active colors
  barSelectedColor: '#074fa6',

  // Form colors
  inputBg: '#FFFFFF',
  inputTextColor: '#142032',
  inputBorderRadius: 4,

  brandTitle: 'Sysvale Components',
  brandUrl: 'https://sysvale.com',
  brandImage: componentLibraryLogo,
});