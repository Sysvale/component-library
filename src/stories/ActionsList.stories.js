import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, text, select, boolean, object,
} from '@storybook/addon-knobs';

import ActionsList from '../components/ActionsList.vue';

// ------ COMPONENT INFO ------
const template = `
	<s-actions-list 
		:actions="actions"
	>
		<template
			slot="act"
			slot-scope="{list: item}"
		>
			{{ item.title }}
		</template>
	</s-actions-list>`;

const componentDescription = {
    name: 'ActionsList',
    summary: 'Badges are small status descriptors used, primarly, to highlight important metadata about features or content.',
    usage: {
        whenToUse: [
            'You want to show status associated with your logic business or users actions.', 
            `You want to highlight important metadata about features or content.`,
            `You need to show information that is helpful but needs the surrounding context to make sense (status,type, etc.).`,
            `The actions-list is readonly.`,
        ],
        whenNotUse:[
            'The status that the actions-list represents, can be setted or removed by the user.',
            'Clicking the component should trigger a functionality or execute an action.',
            'You want to categorize something.',
        ]
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
	decorators: [docsDecorator, withKnobs, withA11y, withDesign],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/aYgL5y9hDGt8zMi7gFA3TM/ActionsList?node-id=0%3A1',
		},
	},
};

// ------ KNOBS SETTINGS ------

const actions = [
	{title: 'Icon1', img: 'img1'},
	{title: 'Icon2', img: 'img2'},
	{title: 'Icon3', img: 'img3'},
	{title: 'Icon4', img: 'img4'},
	{title: 'Icon5', img: 'img5'},
];

export const actionsList = () => ({
	props: {
		actions: {
			default: () => object('Actions:', actions),
		},
	},
	template: template,
});
