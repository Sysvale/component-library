import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import ActionsList from '../../src/components/ActionsList.vue';
import lodash from 'lodash';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

let actions = [
	{title: 'Icon1', img: 'img1'},
	{title: 'Icon2', img: 'img2'},
	{title: 'Icon3', img: 'img3'},
	{title: 'Icon4', img: 'img4'},
];

test('Component is mounted properly', () => {
	window._ = lodash;
	const wrapper = mount(ActionsList, {
		localVue,
		propsData: {
			actions: actions,
		},
	});

	expect(wrapper).toMatchSnapshot();
});

describe("Action list functioning", () => {
	test('If when the number of expanded actions to be shown is 1 and there is an array of length 4, are rendered 1 action and 1 button to show more', () => {
		window._ = lodash;
		const wrapper = mount(ActionsList, {
			localVue,
			propsData: {
				actions: actions,
				numberOfExpandedActions: 1,
				position: 'right',
			},
		});
	
		expect(wrapper.findAll('.action').length).toBe(2);
		expect(wrapper.findAll('.actionLeftBorder').length).toBe(1);
	});
	
	test('If when the number of expanded actions to be shown is 4 and there is an array of length 4, are rendered 4 actions', () => {
		window._ = lodash;
		const wrapper = mount(ActionsList, {
			localVue,
			propsData: {
				actions: actions,
				numberOfExpandedActions: 4
			},
		});
	
		expect(wrapper.findAll('.action').length).toBe(4);
	});
	
	test('If the list is expanded when the "more actions" button is clicked', async () => {
		window._ = lodash;
		const wrapper = mount(ActionsList, {
			localVue,
			propsData: {
				actions: actions,
				numberOfExpandedActions: 1,
				position: 'right',
			},
		});
	
	
		expect(wrapper.findAll('.action').length).toBe(2);

		wrapper
			.find('.actionLeftBorder')
			.trigger('click');
	
		await localVue.nextTick();
	
		expect(wrapper.findAll('.action').length).toBe(5);
	});

	test('If a event is emited when the action is clicked', () => {
		window._ = lodash;
		const wrapper = mount(ActionsList, {
			localVue,
			propsData: {
				actions: actions,
				numberOfExpandedActions: 4
			},
		});	
		wrapper.find('.action').trigger('click');

		expect(wrapper.emitted().actionClicked).toBeTruthy();
		expect(wrapper.emitted().actionClicked).toEqual([
			[
				{'img': 'img1', "title": 'Icon1'},
			]
		]);
	});
});
