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
		expect(wrapper.vm.predefinedStyle).toBe('yellow');
	});
});

describe("Prop 'variant' tests", () => {
	test("if the computed property changes when the prop variant is setted to 'yellow'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				variant: 'yellow',
				content: 'Test',
			},
		});

		expect(wrapper.vm.predefinedStyle).toBe('yellow');
	});

	test("if the computed property changes when the prop variant is setted to 'green'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				variant: 'green',
				content: 'Test',
			},
		});

		expect(wrapper.vm.predefinedStyle).toBe('green');
	});

	test("if the computed property changes when the prop variant is setted to 'red'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				variant: 'red',
				content: 'Test',
			},
		});

		expect(wrapper.vm.predefinedStyle).toBe('red');
	});

	test("if the computed property changes when the prop variant is setted to 'blue'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				variant: 'blue',
				content: 'Test',
			},
		});

		expect(wrapper.vm.predefinedStyle).toBe('blue');
	});

	test("if the computed property changes when the prop variant is setted to 'purple'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				variant: 'purple',
				content: 'Test',
			},
		});

		expect(wrapper.vm.predefinedStyle).toBe('purple');
	});

	test("if the computed property changes when the prop variant is setted to 'gray'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				variant: 'gray',
				content: 'Test',
			},
		});

		expect(wrapper.vm.predefinedStyle).toBe('gray');
	});
});

describe("Prop 'bgColor' and 'color' tests", () => {
	test("if the computed property 'styleVariables' changes when the prop 'colorCodeMode' is setted to 'true'", () => {
		const wrapper = mount(Badge, {
			localVue,
			propsData: {
				colorCodeMode: true,
				color: 'white',
				bgColor: 'blue',
				content: 'Test',
			},
		});

		expect(wrapper.vm.styleVariables).toStrictEqual({"--bg-color": "blue", "--color": "white"});
	});
});
