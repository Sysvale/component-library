import { configure } from '@storybook/vue';

configure(require.context('../src/components', true, /\.stories\.js$/), module);
