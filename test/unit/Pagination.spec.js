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
			perPage: 5,
			totalRows: 20,
			defaultIndex: 0,
			defaultValue: 1,
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
			defaultIndex: 0,
			defaultValue: 1,
		},
	});

	expect(wrapper.findAll('.pagination-button').length).toBe(3);
});