import { configure, addParameters } from '@storybook/vue';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { CheckCircleIcon } from 'vue-feather-icons';
import customTheme from './theme';

import _ from 'lodash';
Object.defineProperty(Vue.prototype, '_', { value: _ });

import {
	Badge,
	StepperCounter,
	ActionBar,
	Table
} from '../src/components';

import CustomWrapper from '../src/Wrapper.vue';

Vue.component('s-badge', Badge);
Vue.component('s-table', Table);
Vue.component('s-stepper-counter', StepperCounter);
Vue.component('wrapper', CustomWrapper);
Vue.component('s-action-bar', ActionBar);
Vue.component('check-circle-icon', CheckCircleIcon);

Vue.use(BootstrapVue);

addParameters({
	options: {
		showAddonPanel: true,
		addonPanelInRight: true,
		sidebarAnimations: true, 
		isToolshown: false,
		theme: customTheme,
	},
});

configure(require.context('../src/stories', true, /\.stories\.js$/), module);
