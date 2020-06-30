
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, boolean, object, text
} from '@storybook/addon-knobs';

import Nav from '../components/Nav.vue';
import { action } from '@storybook/addon-actions';

console.log('Nav: ', Nav);

// ------ COMPONENT INFO ------
const template = `
    <s-nav
        :items="items"
        :old-school="oldSchool"
        :active-item="activeItem"
        @click="handleClick"
    />`;

const componentDescription = {
    name: 'Nav',
    summary: 'Nav are components used to create navigation solutions and menus.',
    usage: {
        whenToUSe: [
            'You need to separate content by pages.', 
            `It’s not appropriate to divide content using tabs, sidebars or using 
            cards and links in one page to navigate to another.`
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
				component: Nav,
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
	component: Nav,
	title: 'cs/Nav',
	decorators: [docsDecorator, withKnobs, withA11y, withDesign],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/g4mxhKJxnHj0LmqBheytlw/NavBar',
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

export const nav = () => ({
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
