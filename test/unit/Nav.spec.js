import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Nav from '../../src/components/Nav.vue';
import lodash from 'lodash';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

const mockedData = [
	{ label: 'Dummy label 1', path: 'dummy/path/1' },
	{ label: 'Dummy label 2', path: 'dummy/path/2' },
	{ label: 'Dummy label 3', path: 'dummy/path/3' },
	{
		label: 'Dummy option with subitems',
		items: [
			{
				label: 'Dummy item 1',
				path: '/dummy/sub/item/1',
			},
			{
				label: 'Dummy item 2',
				path: '/dummy/sub/item/2',
			},
			{
				label: 'Dummy item 3',
				path: '/dummy/sub/item/3',
			},
		]
	}
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
	test('if has one item set as active', () => {
		const wrapper = mount(Nav, {
			localVue,
			propsData: {
				items: mockedData,
				activeItem: mockedData[0],
			},
		});
		expect(wrapper.findAll('.active').length).toBe(1);
	});

	test('if has one subitem set as active', () => {
		window._ = lodash;
		const wrapper = mount(Nav, {
			localVue,
			propsData: {
				items: mockedData,
				activeItem: mockedData[3].items[0],
			},
		});
		expect(wrapper.findAll('.active').length).toBe(1);
	});


	test('if oldschool mode is setted properly', () => {
		const wrapper = mount(Nav, {
			localVue,
			propsData: {
				items: mockedData,
				oldSchool: true,
				activeItem: mockedData[0],
			},
		});

		expect(wrapper.findAll('.bg-cs').length).toBe(1);
		expect(wrapper.findAll('.cs-mode').length).toBe(mockedData.length);
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
