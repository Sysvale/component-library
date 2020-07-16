import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, text, number, select, object,
} from '@storybook/addon-knobs';

import ActionsList from '../components/ActionsList.vue';

// ------ COMPONENT INFO ------
const template = `
	<s-actions-list 
		:actions="actions"
		:numberOfExpandedActions="numberOfExpandedActions"
		:collapsedActionName="collapsedActionName"
		:expandedActionName="expandedActionName"
		:position="position"
		@actionClicked="handleClick"
	>
		<template
			slot="action"
			slot-scope="{list: item}"
		>
			{{ item.title }}
		</template>
	</s-actions-list>`;

const componentDescription = {
    name: 'ActionsList',
    summary: 'Action lists are components used to display a list of actions in a row.',
    usage: {
        whenToUse: [
            'You have actions associated with and list or table row.', 
            `When there are a lot of actions but some of them can be collapsed.`,
        ],
        whenNotUse:[
            'When you need buttons.',
            'When you are building a navigation component (Menu, navbar, etc).',
            'The actions listed affect the whole view or content.',
        ]
	},
	events: {
		actionClicked: {
			trigger: 'click',
			description: `Event emitted when one of the actions is clicked. The 
				data associated with the action will be sent to the parent component.`
		}
	},
	slots: {
		action: {		
			description: `Scoped slot for custom data rendering of field 'actions'.
				The list property, that can be accessed through the slot, represents
				the array of actions to be displayed.`
		},
	},
};

const docsDecorator = () => {
	return {
		data() {
			return {
				component: ActionsList,
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
	component: ActionsList,
	title: 'cs/ActionsList',
	decorators: [docsDecorator, withKnobs, withA11y,],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
	},
};

// ------ KNOBS SETTINGS ------

const actions = [
	{title: 'Icon1', img: 'img1'},
	{title: 'Icon2', img: 'img2'},
	{title: 'Icon3', img: 'img3'},
	{title: 'Icon4', img: 'img4'},
];

export const actionsList = () => ({
	methods: {
		handleClick: action('Action clicked'),
	},
	props: {
		actions: {
			default: () => object('Actions:', actions),
		},
		numberOfExpandedActions: {
			default: () => number('Number of expanded actions:', 2),
		},
		collapsedActionName: {
			default: () => text('Collapsed action name:', 'More actions'),
		},
		expandedActionName: {
			default: () => text('Expanded action name:', 'Less actions'),
		},
		position: {
			default: () => select('Position', {
				right: 'right',
				left: 'left',
			}, 'right'),
		},
	},
	template: template,
});


