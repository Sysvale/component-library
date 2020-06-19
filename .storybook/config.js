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
	Pagination,
	StepperCounter,
	ActionBar,
	EmptyState,
	Nav,
} from '../src/components';

import CustomWrapper from '../src/Wrapper.vue';

Vue.component('s-badge', Badge);
Vue.component('s-stepper-counter', StepperCounter);
Vue.component('s-pagination', Pagination);
Vue.component('wrapper', CustomWrapper);
Vue.component('s-action-bar', ActionBar);
Vue.component('check-circle-icon', CheckCircleIcon);
Vue.component('s-empty-state', EmptyState);
Vue.component('s-nav', Nav);

Vue.use(BootstrapVue);

addParameters({
	options: {
		showAddonPanel: true,
		addonPanelInRight: true,
		sidebarAnimations: true,
		isToolshown: false,
		theme: customTheme,
		showRoots: true,
	},
});

configure(require.context('../src/stories', true, /\.stories\.js$/), module);
