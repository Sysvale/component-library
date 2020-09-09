
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, boolean, color, number, text,
} from '@storybook/addon-knobs';

import ProgressBar from '../components/ProgressBar.vue';
import { action } from '@storybook/addon-actions';

// ------ COMPONENT INFO ------
const template = `
		<div>
			<s-progress-bar
				:color="color"
				:backgroundColor="backgroundColor"
				:percentage="percentage"
				:showText="showText"
			/>
		</div>
`;

const componentDescription = {
		name: 'Progress bar',
		summary: `Popover is a pop-up box that appears when the user clicks on an element.
			It is used to emulate a tooltip behavior, and to display content to the user
			that was previously hidden.`,
		usage: {
				whenToUse: [
					'You want to place filters, or text that will be shown when you click in some component.', 
				],
				whenNotUse:[
					'You need a modal.',
					'You need a navigation solution.',
					'You need a form to register something.',
					'You need to show a lot of content.'
				]
	},
};

const docsDecorator = () => {
	return {
		data() {
			return {
				component: ProgressBar,
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
	component: ProgressBar,
	title: 'cs/Progress bar',
	decorators: [docsDecorator, withKnobs, withA11y, withDesign],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
	},
};

export const progressBar = () => ({
	props: {
		color: {
			default: () => color('Color', '#2EB88D'),
		},
		backgroundColor: {
			default: () => color('Background color', '#DDE2E7'),
		},
		percentage: {
			default: () => number('Percentage', 0.5, {
				range: true,
				min: 0,
				max: 1,
				step: 0.01,
			}),
		},
		showText: {
			default: () => boolean('Show text', true)
		},
	},
	template,
});
