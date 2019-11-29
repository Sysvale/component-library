import { mount, createLocalVue } from '@vue/test-utils';
console.log('------------------------------------>');

import BootstrapVue from 'bootstrap-vue';
import Badge from '../../src/components/Badge.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

test('Component is mounted properly', () => {
	const wrapper = mount(Badge, {
		localVue,
		propsData: {
			content: 'Test',
		},
	});
	expect(wrapper).toMatchSnapshot();
});

describe("Computed property 'style' test", () => {
	test('if the computed property style works properly with the default value for the prop status_type', () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				content: 'Test',
			},
		});
		expect(wrapper.vm.style).toBe('negative-badge');
	});
});

describe("Prop 'status_type' tests", () => {
	test("if the computed property changes when the prop status_type is setted to 'negative'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				status_type: 'Negative',
				content: 'Test',
			},
		});

		expect(wrapper.vm.style).toBe('negative-badge');
	});

	test("if the computed property changes when the prop status_type is setted to 'positive'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				status_type: 'Positive',
				content: 'Test',
			},
		});

		expect(wrapper.vm.style).toBe('positive-badge');
	});

	test("if the computed property changes when the prop status_type is setted to 'neutral'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				status_type: 'Neutral',
				content: 'Test',
			},
		});

		expect(wrapper.vm.style).toBe('neutral-badge');
	});
});
