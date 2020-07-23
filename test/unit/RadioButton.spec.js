import { mount, createLocalVue } from '@vue/test-utils';
import RadioButton from '../../src/components/RadioButton.vue';

import BootstrapVue from 'bootstrap-vue';
const localVue = createLocalVue();
localVue.use(BootstrapVue);

test('Component is mounted properly', () => {
	const wrapper = mount(RadioButton, {
		localVue,
		propsData: {
			id: 'id',
			text: 'test',
			value: '',
		},
	});

	expect(wrapper).toMatchSnapshot();
});
