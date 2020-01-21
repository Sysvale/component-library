import { configure, addParameters } from '@storybook/vue';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { CheckCircleIcon } from 'vue-feather-icons'

import _ from 'lodash';
Object.defineProperty(Vue.prototype, '_', { value: _ });

import {
	Badge,
	StepperCounter,
	CustomWrapper,
	ActionBar
} from '../src/components';

Vue.component('s-badge', Badge);
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
	},
});

configure(require.context('../src/stories', true, /\.stories\.js$/), module);
