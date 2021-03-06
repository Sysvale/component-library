
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, boolean, object, text
} from '@storybook/addon-knobs';

import Dropdown from '../components/Dropdown.vue';

// ------ COMPONENT INFO ------
const template = `
	<s-dropdown
		v-model="value"
		:options="options"
		:label="label"
		:track-by="trackBy"
/>`;

const componentDescription = {
    name: 'Dropdown',
    summary: 'Dropdown are components used when you need to create selecting solutions that allow multiple selection.',
    usage: {
        whenToUse: [
            'You want the user to select one or more itens.', 
            `You need to display a lot of data in one form, and they are associated with one label.`
        ],
        whenNotUse:[
            'You want the user to select only one item.',
            'You have less than 3 itens to be displayed.'
		],
		observation: `This component is a wrapper of the vue-multiselect (vue-multiselect.js.org) component,
			aiming to be used only when you have a lot of data that can be selected simultaneously. The component API
			is the same of the vue-multiselect. For more info about how to use the component, access the vue-multiselect
			documentation.`,
	},
};

const docsDecorator = () => {
	return {
		data() {
			return {
				component: Dropdown,
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
	component: Dropdown,
	title: 'cs/Dropdown',
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
const options = [
	{ title: 'Avengers',},
	{ title: 'Naruto',},
	{ title: 'X-men',},
	{ title: 'The Powerpuff Girls',}
];

const value = [
	{ title: 'Avengers',},
	{ title: 'The Powerpuff Girls',}
];

export const dropdown = () => ({
	props: {
		options: {
			default: () => object('Options:', options),
		},
		value: {
			default: () => object('Value:', value),
		},
		label: {
			default: () => text('Label:', 'title')
		},
		trackBy: {
			default: () => text('trackBy:', 'title')
		},
	},
	template,
});
