
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, boolean, array, text
} from '@storybook/addon-knobs';

import RadioButtonGroup from '../components/RadioButtonGroup.vue';

// ------ COMPONENT INFO ------
const template = `
	<div>
		<s-radio-button-group
			v-model="value"
			:options="options"
			:disabled="disabled"
		/>
	</div>
	`;

const componentDescription = {
	name: 'RadioButtonGroup',
	summary: 'RadioButtons are custom radio created to facilitate the selection and feedback',
	usage: {
		whenToUse: [
			'The options you want to provide with the RadioButtons are mutually exclusive',
			'Use RadioButtons in any situation that you would use the <input type="radio" />',
		],
		whenNotUse:[
			'Do not use RadioButtons when 2 or more options can be selected at the same time.',
			'Do not use RadioButtons when you have 4 or more options',
		],
		observation: `You can disable each on of the radio button components by passing the property 'disable: true'
		in its respective object. If you want to disable all of the RadioButtons, you must pass the prop 'disabled'
		to te component.`,
	},
};

const docsDecorator = () => {
	return {
		data() {
			return {
				component: RadioButtonGroup,
				template,
				componentDescription,
			};
		},
		template:
			`<docs-wrapper
				:componentData="component"
				:exampleSourceCode="template"
				:componentDescription="componentDescription"
			>
				<story slot="component-preview"/>
			</docs-wrapper>`,
	};
};

// ------ STORYBOOK SETTINGS ------
export default {
	component: RadioButtonGroup,
	title: 'cs/RadioButtonGroup',
	decorators: [docsDecorator, withKnobs, withA11y, withDesign],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/g4mxhKJxnHj0LmqBheytlw/MultiselectBar',
		},
	},
};

// ------ KNOBS SETTINGS ------
const value = '';
const options = [
	{
		text: 'Component1',
		id: 'id1',
		disabled: true,
	},
	{
		text: 'Component2',
		id: 'id2',
	},
	{
		text: 'Component3',
		id: 'id3',
	},
];

export const radioButtonGroup = () => ({
	props: {
		value: {
			default: () => text('V-model:', value),
		},
		options: {
			default: () => array('Options:', options),
		},
		disabled: {
			default: () => boolean('Disabled:', false),
		},
	},
	template,
});
