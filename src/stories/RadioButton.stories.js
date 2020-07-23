
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, boolean, object, text
} from '@storybook/addon-knobs';

import RadioButton from '../components/RadioButton.vue';

// ------ COMPONENT INFO ------
const template = `
	<div>
		<s-radio-button
			v-model="value"
			:text="text"
			:id="id"
		/>
	</div>
	`;

const componentDescription = {
    name: 'RadioButton',
    summary: '',
    usage: {
        whenToUse: [],
        whenNotUse:[],
		observation: ``,
	},
};

const docsDecorator = () => {
	return {
		data() {
			return {
				component: RadioButton,
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
	component: RadioButton,
	title: 'cs/RadioButton',
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

export const radioButton = () => ({
	props: {
		value: {
			default: () => text('V-model:', value),
		},
		text: {
			default: () => text('Text:', 'Component'),
		},
		id: {
			default: () => text('Id:', 'id'),
		},

	},
	template,
});
