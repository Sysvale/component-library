import { shallowMount, mount, createLocalVue, } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Dropdown from '../../src/components/Dropdown.vue';
import Multiselect from 'vue-multiselect';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.component('multiselect', Multiselect);

const mockedData = [
	{ title: 'Avengers', is_selected: false, },
	{ title: 'Naruto', is_selected: false, },
	{ title: 'X-men', is_selected: false, },
	{ title: 'The Powerpuff Girls', is_selected: false, }
];

test('Component is mounted properly', () => {
	const wrapper = shallowMount(Dropdown, {
		localVue,
		propsData: {
			options: mockedData,
		},
	});
	expect(wrapper).toMatchSnapshot();
});

describe("Custom checkbox tests", () => {
	test('If the number of the custom checkboxes match the number of elements in the option array', () => {
		const wrapper = mount(Dropdown, {
			localVue,
			propsData: {
				options: mockedData,
				value:[],
				label: 'title',
				trackBy: 'title',
			},
		});

		expect(wrapper.findAll('input').length)
			.toBe(mockedData.length);

		expect(wrapper.findAll('label').length)
			.toBe(mockedData.length);
	});

	test('If the input event is emited properly when the data passed as a v-model changes', () => {
		const wrapper = mount(Dropdown, {
			localVue,
			propsData: {
				options: mockedData,
				value:[],
				label: 'title',
				trackBy: 'title',
			},
		});

		wrapper
			.find(`#checkbox-${mockedData[0].title}`)
			.trigger('click');

		wrapper
			.vm
			.$options
			.watch
			.selectedValue
			.call(wrapper.vm, mockedData[0]);
			
		expect(wrapper.emitted().input)
			.toBeTruthy();

		expect(wrapper.emitted().input)
			.toEqual([[mockedData[0]]]);
	});
});