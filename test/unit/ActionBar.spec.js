import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import ActionBar from '../../src/components/ActionBar.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

test('Component is mounted properly', () => {
	const wrapper = mount(ActionBar, {
		localVue,
	});
	expect(wrapper).toMatchSnapshot();
});

test('if the dismiss icon is shown when the prop isDismissible is setted to true', () => {
	const wrapper = mount(ActionBar, {
		localVue,
		propsData: {
			isDismissible: true,
		},
	});

	expect(wrapper.findAll('.icon-container').length).toBe(1);
});

test("if the 'fixed' class is used when the floatingMode is setted to true", () => {
	const wrapper = mount(ActionBar, {
		localVue,
		propsData: {
			floatingMode: true,
		},
	});

	expect(wrapper.findAll('.fixed').length).toBe(1);
});
