import { mount, createLocalVue } from '@vue/test-utils';
import RadioButton from '../../src/components/RadioButton.vue';

import BootstrapVue from 'bootstrap-vue';
const localVue = createLocalVue();
localVue.use(BootstrapVue);

const options = [
	{
		text: 'Component1',
		id: 'id1',
		disabled: true,
	},
	{
		text: 'Component2',
		id: 'id2',
	},
	{
		text: 'Component3',
		id: 'id3',
	},
];

test('Component is mounted properly', () => {
	const wrapper = mount(RadioButton, {
		localVue,
		propsData: {
			value: '',
			options: options,
		},
	});

	expect(wrapper).toMatchSnapshot();
});
