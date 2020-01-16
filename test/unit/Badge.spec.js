import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Badge from '../../src/components/Badge.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

test('Component is mounted properly', () => {
	const wrapper = mount(Badge, {
		localVue,
		propsData: {
			content: 'Test',
		},
	});
	expect(wrapper).toMatchSnapshot();
});

describe("Computed property 'predefinedStyle' test", () => {
	test('if the computed property predefinedStyle works properly with the default value for the prop variant', () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				content: 'Test',
			},
		});
		expect(wrapper.vm.predefinedStyle).toBe('variant-1');
	});
});

describe("Prop 'variant' tests", () => {
	test("if the computed property changes when the prop variant is setted to 'variant-1'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				variant: 'variant-1',
				content: 'Test',
			},
		});

		expect(wrapper.vm.predefinedStyle).toBe('variant-1');
	});

	test("if the computed property changes when the prop variant is setted to 'variant-2'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				variant: 'variant-2',
				content: 'Test',
			},
		});

		expect(wrapper.vm.predefinedStyle).toBe('variant-2');
	});

	test("if the computed property changes when the prop variant is setted to 'variant-3'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				variant: 'variant-3',
				content: 'Test',
			},
		});

		expect(wrapper.vm.predefinedStyle).toBe('variant-3');
	});

	test("if the computed property changes when the prop variant is setted to 'variant-4'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				variant: 'variant-4',
				content: 'Test',
			},
		});

		expect(wrapper.vm.predefinedStyle).toBe('variant-4');
	});

	test("if the computed property changes when the prop variant is setted to 'variant-5'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				variant: 'variant-5',
				content: 'Test',
			},
		});

		expect(wrapper.vm.predefinedStyle).toBe('variant-5');
	});

	test("if the computed property changes when the prop variant is setted to 'variant-6'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				variant: 'variant-6',
				content: 'Test',
			},
		});

		expect(wrapper.vm.predefinedStyle).toBe('variant-6');
	});
});

describe("Prop 'bgColor' and 'color' tests", () => {
	test("if the computed property 'styleVariables' changes when the prop 'colorCodeMode' is setted to 'true'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				colorCodeMode: true,
				variantMode: false,
				color: 'white',
				bgColor: 'blue',
				content: 'Test',
			},
		});

		expect(wrapper.vm.styleVariables).toStrictEqual({"--bg-color": "blue", "--color": "white"});
	});
});
