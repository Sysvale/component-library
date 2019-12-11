
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, text, select, array, object,
} from '@storybook/addon-knobs';

import StepperCounter from './StepperCounter.vue';
import Badge from './Badge.vue';

const template = `
// Where 'steps' is a object containing the properties 'labels', 'active', and 'concluded'
<s-stepper-counter
	:steps="steps"
/>`;

const componentDescription = 'Stepper counters are small status descriptors used, primarly, to highlight important metadata about features or content.';

const docsDecorator = () => {
	return {
		data() {
			return {
				component: StepperCounter,
				template,
				componentDescription,
			};
		},
		template:
			`<div>
				<wrapper :componentData="component" :exampleSourceCode="template" :componentDescription="componentDescription" componentName="StepperCounter">
					<div slot="usage">
						<h5>Use Badges when:</h5>
						<ul>
							<li>You want to show, in a visual way, associated with your logic business or users actions</li>
							<li>You want to highlight important metadata about features or content</li>
							<li>You need to show information that is helpful but needs the surrounding context to make sense (status,type, etc.)</li>
							<li>The badge is readonly</li>
						</ul>
						<br>
						<h5>Don't use Badges when:</h5>
						<ul>
							<li>The status that the badge represents, can be setted or removed by the user</li>
							<li>Clicking the component should trigger a functionality or execute an action.</li>
							<li>You want to categorize something</li>
						</ul>
					</div>
					<story slot="component-preview"/>
				</wrapper>
			</div>`,
	};
};


export default {
	component: StepperCounter,
	title: 'StepperCounter',
	decorators: [docsDecorator, withKnobs, withA11y],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/A4G9EmRlujtYILraP4dFPg/Untitled?node-id=0%3A1',
		},
	},
};

// const measurements = [
// 	{
// 		value: 'R$ 12,31',
// 	},
// 	{
// 		value: 'R$ 53,20',
// 	},
// ];

// export const actionBar = () => ({
// 	props: {
// 		items: {
// 			default: () => object('Items:', measurements),
// 		},
// 	},
// 	template:
// 		`<s-toolbar
// 			:items="items"
// 			disabled-delete-button-popover-text="Contas pagas não podem ser excluídas"
// 			:invalid-statuses="['paid']"
// 		/>`,
// });


export const stepper_counter = () => ({
	props: {
		steps: {
			default: () => object('Steps:', [
				{ label: 'Dados da operadora', concluded: false, active: true },
				{ label: 'Bandeira', concluded: false, active: false },
				{ label: 'Bandeira', concluded: false, active: false },
				{ label: 'Bandeira', concluded: false, active: false },
				{ label: 'Bandeira', concluded: false, active: false },
				{ label: 'Bandeira', concluded: false, active: false },
			]),
		},
		status_type: {
			default: () => select('Status type', {
				Negative: 'Negative',
				Positive: 'Positive',
				Neutral: 'Neutral',
			}, 'Negative'),
		},
	},
	template:
		`<s-stepper-counter
			:steps="steps"
		>
		</s-stepper-counter>`,
});
