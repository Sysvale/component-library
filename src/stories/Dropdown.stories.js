
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, boolean, object, text
} from '@storybook/addon-knobs';

import Dropdown from '../components/Dropdown.vue';
import { action } from '@storybook/addon-actions';

// ------ COMPONENT INFO ------
const template = `
    <s-dropdown
		:options="options"
		:value="value"
    />`;

const componentDescription = {
    name: 'Dropdown',
    summary: 'Dropdown are components used to create Multiselectigation solutions and menus.',
    usage: {
        whenToUse: [
            'You need to separate content by pages.', 
            `It’s not appropriate to divide content using tabs, sidebars or using 
            cards and links in one page to Multiselectigate to another.`
        ],
        whenNotUse:[
            'You have too many items to be displayed in the menu.',
            'You want to show the links vertically.'
        ]
	},
	events: {
		click: {
			trigger: 'click',
			description: 'Event emitted when one of the menu items is clicked.'
		}
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
	{ title: 'Space Pirate', is_selected: false, img: 'static/posters/fleet.png' },
	{ title: 'Merchant', is_selected: false, img: 'static/posters/trading_post.png' },
	{ title: 'Explorer', is_selected: false, img: 'static/posters/creatures.png' },
	{ title: 'Miner', is_selected: false, img: 'static/posters/resource_lab.png' }
];

const value = [];

export const dropdown = () => ({
	props: {
		options: {
			default: () => object('Options:', options),
		},
		value: {
			default: () => object('Value:', value),
		},
	},
	template,
});
