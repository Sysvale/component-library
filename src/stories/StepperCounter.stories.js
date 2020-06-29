import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, object,
} from '@storybook/addon-knobs';

import Stepper from '../components/StepperCounter.vue';

// ------ COMPONENT INFO ------
const template = `
    <s-stepper-counter
        :steps="steps"
    />`;

const componentDescription = {
    name: 'Stepper',
    summary: `Steppers are components that control and display tasks broken in steps.`,
    usage: {
        whenToUSe: [
            'You want to show, in a visual way, the current state and the current step of a stepper.', 
            `You have a multistep modal.`,
            `You have a series of inputs or actions that you want to show the progress of the filling and the hour and date of the states or the actions aren't necessary.`,
        ],
        whenNotUse:[
            'You are looking for a timeline component.',
            `The order of the steps, events, or actions are relevant.`,
        ]
    },
};

const docsDecorator = () => {
	return {
		data() {
			return {
				component: Stepper,
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
	component: Stepper,
	title: 'bios/Stepper',
	decorators: [docsDecorator, withKnobs, withA11y],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
	},
};

// ------ KNOBS SETTINGS ------
export const stepper = () => ({
	props: {
		steps: {
			default: () => object('Steps:', [
				{ label: 'Dados da operadora', concluded: false, active: true },
				{ label: 'Bandeira 2', concluded: false, active: false },
				{ label: 'Bandeira 3', concluded: false, active: false },
				{ label: 'Bandeira 4', concluded: false, active: false },
				{ label: 'Bandeira 5', concluded: false, active: false },
			]),Stepper
		},
	},
	template: template,
});
