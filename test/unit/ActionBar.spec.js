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
