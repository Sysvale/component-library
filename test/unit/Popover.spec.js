import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue, { BButton } from 'bootstrap-vue';
import Popover from '../../src/components/Popover.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

const MyButton = {
	template: `
		<b-button id="trigger-popover" @click="">
			Click Me!
		</b-button>
	`,
};
const button = mount(MyButton);


test('Component is mounted properly', async () => {
	const wrapper = mount(Popover, {
		localVue,
		propsData: {
			target: 'target-popover',
			right: true,
		},
	});

	await button.trigger('click');
	expect(wrapper).toMatchSnapshot();
});
