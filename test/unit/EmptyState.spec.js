import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import EmptyState from '../../src/components/EmptyState.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

test('Component is mounted properly', () => {
	const wrapper = mount(EmptyState, {
		localVue,
		propsData: {
			showAddButton: true,
		},
	});
	expect(wrapper.findAll('.add-button-container').length).toBe(1);
});
