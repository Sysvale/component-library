import { configure, addParameters } from '@storybook/vue';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import _ from 'lodash';
Object.defineProperty(Vue.prototype, '_', { value: _ });

import {
	Badge,
	Stepper,
	CustomWrapper,
} from '../src/components';

Vue.component('s-badge', Badge);
Vue.component('s-stepper', Stepper);
Vue.component('wrapper', CustomWrapper);

Vue.use(BootstrapVue);

addParameters({
	options: {
		showAddonPanel: true,
		addonPanelInRight: true,
		sidebarAnimations: true, 
		isToolshown: false,
	},
});

configure(require.context('../src/components', true, /\.stories\.js$/), module);
