import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Pagination from '../../src/components/Pagination.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

test('Component is mounted properly', () => {
	const wrapper = mount(Pagination, {
		localVue,
	});
	expect(wrapper).toMatchSnapshot();
});

test('Click event is recognized', () => {
	const wrapper = mount(Pagination, {
		localVue,
		propsData: {
			perPage: 2,
			totalRows: 6,
			activeBgColor: '#545b62',
			activeTextColor: '#FFFFFF',
			hoverBgColor: '#545b62',
			hoverTextColor: '#FFFFFF',
			borderRadius: 5,
		},
	});

	wrapper.findAll('.pagination-button').at(0).trigger('click');

	expect(wrapper.emitted().input).toBeTruthy();
});

test('Page number is correct', () => {
	const wrapper = mount(Pagination, {
		localVue,
		propsData: {
			perPage: 10,
			totalRows: 21,
			activeBgColor: '#545b62',
			activeTextColor: '#FFFFFF',
			hoverBgColor: '#545b62',
			hoverTextColor: '#FFFFFF',
			borderRadius: 5,
		},
	});

	expect(wrapper.findAll('.pagination-button').length).toBe(3);
});