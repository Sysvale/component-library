import { configure, addParameters } from '@storybook/vue';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Multiselect from 'vue-multiselect';
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
	Dropdown,
	SideSheet,
	ActionsList,
	RadioButton,
} from '../src/components';

import DocsWrapper from '../src/DocsWrapper.vue';

Vue.component('s-badge', Badge);
Vue.component('s-stepper-counter', StepperCounter);
Vue.component('s-pagination', Pagination);
Vue.component('docs-wrapper', DocsWrapper);
Vue.component('s-action-bar', ActionBar);
Vue.component('check-circle-icon', CheckCircleIcon);
Vue.component('s-empty-state', EmptyState);
Vue.component('s-nav', Nav);
Vue.component('multiselect', Multiselect);
Vue.component('s-dropdown', Dropdown);
Vue.component('s-side-sheet', SideSheet);
Vue.component('s-actions-list', ActionsList);
Vue.component('s-radio-button', RadioButton);

Vue.use(BootstrapVue);

addParameters({
	options: {
		showAddonPanel: true,
		addonPanelInRight: false,
		sidebarAnimations: true,
		isToolshown: false,
		theme: customTheme,
		showRoots: true,
		showNav: true,
	},
});

configure(require.context('../src/stories', true, /\.stories\.js$/), module);
