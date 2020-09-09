
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
		summary: `Progress bars are components used to indicate the status of something to the user`,
		usage: {
				whenToUse: [
					'You need to convey the idea of progress of something.',
					'You need to convey the idea of status of something.',
					'You need to draw attention to an specific information.'
				],
				whenNotUse:[
					'To create loaders.',
					'You need a lot of precision',
					'To create steppers.',
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
