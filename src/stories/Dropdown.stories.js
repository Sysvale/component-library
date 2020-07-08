
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
        :items="items"
        :old-school="oldSchool"
        :active-item="activeItem"
        @click="handleClick"
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
const items = [
	{
		label: 'Mapa de grupo de risco',
		path: '/',
	},
	{
		label: 'Liga Saudável',
		path: '/1',
	},
	{
		label: 'Mapa de calor dos bairros',
		path: '/2',
	},
	{
		label: 'Sublinks',
		items: [
			{
				label: 'Sublink 1',
				path: '/sublink-1',
			},
			{
				label: 'Sublink 2',
				path: '/sublink-2',
			},
			{
				label: 'Sublink 3',
				path: '/sublink-3',
			},
		]
	}
];

export const dropdown = () => ({
	methods: {
		handleClick: action('Item clicked'),
	},
	props: {
		items: {
			default: () => object('Items:', items),
		},
		oldSchool: {
			default: () => boolean('Oldschool mode', false)
		},
		activeItem: {
			default: () => object('Active item', items[1])
		},
	},
	template,
});
