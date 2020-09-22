import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, array,
} from '@storybook/addon-knobs';

import Timeline from '../components/Timeline.vue';

// ------ COMPONENT INFO ------
const template = `
	<s-timeline
		:history="history"
	/>`;

const componentDescription = {
	name: 'Timeline',
	summary: 'Timelines are components used to display information in a chronological order.',
	usage: {
		whenToUse: [
			'You have a series of information that can be categorized by date.', 
		],
		whenNotUse:[
			'You are looking for a stepper component.',
			'The order of the informations you are displaying are irrelevant.',
		]
	},
};

const docsDecorator = () => {
	return {
		data() {
			return {
				component: Timeline,
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
	component: Timeline,
	title: 'cs/Timeline',
	decorators: [docsDecorator, withKnobs, withA11y, withDesign],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/aYgL5y9hDGt8zMi7gFA3TM/Timeline?node-id=0%3A1',
		},
	},
};

// ------ KNOBS SETTINGS ------

const history = [
	{
		date: '22/09/2020',
		title: 'Bloqueio nível 1',
		text: 'Usuário: Uncle Bob',
	},
	{
		date: '22/09/2020',
		title: 'Bloqueio nível 1',
		text: 'Usuário: Uncle Bob',
	},
	{
		date: '22/09/2020',
		title: 'Bloqueio nível 1',
		text: 'Usuário: Uncle Bob',
	},
	{
		date: '22/09/2020',
		title: 'Bloqueio nível 1',
		text: 'Usuário: Uncle Bob',
	},
	{
		date: '22/09/2020',
		title: 'Bloqueio nível 1',
		text: 'Usuário: Uncle Bob',
	},
];

export const timeline = () => ({
	props: {
		history: {
			default: () => array('History object:', history),
		},
	},
	template: template,
});