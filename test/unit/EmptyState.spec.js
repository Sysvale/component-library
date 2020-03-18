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

describe("Headline, Body Text and Button props tests", () => {
	test("if the computed property 'headlineStyle' changes when the prop 'headlineColor' is changed", () => {
		const wrapper = mount(EmptyState, {
			localVue,
			propsData: {
				headlineColor: 'red',
				headlineFontSize: 50,
			},
		});

		expect(wrapper.vm.headlineStyle).toStrictEqual({ "--headline-color": "red", "--headline-font-size": "50px" });
	});

	test("if the computed property 'bodyTextStyle' changes when the prop 'bodyTextColor' is changed", () => {
		const wrapper = mount(EmptyState, {
			localVue,
			propsData: {
				bodyTextColor: 'blue',
				bodyFontSize: 30,
			},
		});

		expect(wrapper.vm.bodyTextStyle).toStrictEqual({ "--body-text-color": "blue", "--body-text-size": "30px" });
	});

	test("if the computed property 'buttonStyle' changes when the prop 'buttonColor' is changed", () => {
		const wrapper = mount(EmptyState, {
			localVue,
			propsData: {
				buttonColor: 'green',
				buttonFontSize: 20,
				borderRadius: 15,
			},
		});

		expect(wrapper.vm.buttonStyle).toStrictEqual({ "--button-color": "green", "--button-font-size": "20px", "--border-radius": "15px" });
	});
});