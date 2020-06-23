import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Nav from '../../src/components/Nav.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

const mockedData = [
	{ label: 'Dummy label 1', path: 'dummy/path/1' },
	{ label: 'Dummy label 2', path: 'dummy/path/2' },
	{ label: 'Dummy label 3', path: 'dummy/path/3' },
];

test('Component is mounted properly', () => {
	const wrapper = mount(Nav, {
		localVue,
		propsData: {
			items: mockedData,
			activeItem: mockedData[0],
		},
	});
	expect(wrapper).toMatchSnapshot();
});

describe("Items styles test", () => {
	test('if has one item is set as active', () => {

		const wrapper = mount(Nav, {
			localVue,
			propsData: {
				items: mockedData,
				activeItem: mockedData[0],
			},
		});
		expect(wrapper.findAll('.active').length).toBe(1);
	});

	test('if oldscholl mode is setted properly', () => {

		const wrapper = mount(Nav, {
			localVue,
			propsData: {
				items: mockedData,
				oldSchool: true,
				activeItem: mockedData[0],
			},
		});
	
		const activeColor = 'rgb(58, 223, 124)';

		expect(wrapper.vm.styleVariables['--active-color']).toBe(activeColor);
	});
});

describe("Change active item event tests", () => {
	test('if a event is emited when the item is clicked', () => {

		const wrapper = mount(Nav, {
			localVue,
			propsData: {
				items: mockedData,
				activeItem: mockedData[0],
			},
		});

		const elementIndex = 1;

		wrapper
			.find(`#${wrapper.vm.getElementKey(mockedData[elementIndex], elementIndex)} a`)
			.trigger('click');

		expect(wrapper.emitted().click).toBeTruthy();
		expect(wrapper.emitted().click).toEqual([
			[
				mockedData[elementIndex],
			]
		]);
	});
});
