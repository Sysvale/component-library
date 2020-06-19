
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, color, object
} from '@storybook/addon-knobs';

import Nav from '../components/Nav.vue';

const template = `
// Where 'steps' is a object containing the properties 'labels', 'active', and 'concluded'
<s-nav
	:items="items"
/>`;

const componentDescription = 'Stepper counters are components that control and display the steps of a stepper.';

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
			`<div>
				<wrapper :componentData="component" :exampleSourceCode="template" :componentDescription="componentDescription" componentName="Nav">
					<div slot="usage">
						<h5>Use Stepper Controllers when:</h5>
						<ul>
							<li>You want to show, in a visual way, the current state and the current step of a stepper</li>
							<li>You have a multistep modal</li>
							<li>You have a series of inputs or actions that you want to show the progress of the filling and the hour and date of the states or the actions aren't necessary</li>
						</ul>
						<br>
						<h5>Don't use Stepper Controllers when:</h5>
						<ul>
							<li>You are looking for a timeline component</li>
							<li>The order of the steps, events, or actions are relevant</li>
						</ul>

						<p class="mt-5	">Obs.: When clicked, the stepper emits an event called 'step_changed' that sends to to you the index of the step clicked,
						and the data of this step.</p>
					</div>
					<story slot="component-preview"/>
				</wrapper>
			</div>`,
	};
};


export default {
	component: Nav,
	title: 'cs/Nav',
	decorators: [docsDecorator, withKnobs, withA11y],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/g4mxhKJxnHj0LmqBheytlw/NavBar?node-id=0%3A1&viewport=1008%2C436%2C1.0721993446350098',
		},
	},
};

export const nav = () => ({
	props: {
		items: {
			default: () => object('Items:', [
				{
					label: 'Op 1',
					active: true,
				},
				{
					label: 'Op 2',
				},
				{
					label: 'Op 3',
				},
			]),
		},
	},
	template,
});
