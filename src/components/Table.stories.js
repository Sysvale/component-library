
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, object,
} from '@storybook/addon-knobs';

import Table from './Table.vue';

const template = `
// alogaleraWhere 'steps' is a object containing the properties 'labels', 'active', and 'concluded'
<table
			:table-fields="fields"
			:items="items"
			:striped="false"
			:per-page="10"
			:has-condensed-actions="true"
			:condensed-actions="condensedActions"
			row-button-label="Realizar operações"
			invalid-action-status="Recebida"
			show-filter
			show-add-button
			add-button-text="Adicionar conta"
			filter-placeholder="Busque utilizando informações das contas"
			:filter-included-fields="filterFields"
			@row-button-action="handleRowButtonAction"
			@action="handleActions"
			@add-button-click="addAccount"
/>`;

const componentDescription = 'Stepper counters are components that control and display the steps of a stepper.';

const docsDecorator = () => {
	return {
		data() {
			return {
				component: Table,
				template,
				componentDescription,
			};
		},
		template:
			`<div>
				<wrapper :componentData="component" :exampleSourceCode="template" :componentDescription="componentDescription" componentName="Table">
					<div slot="usage">
						<h5>Use Tables when:</h5>
						<ul>
							<li>You want to show, in a visual way, the current state and the current step of a stepper</li>
							<li>You have a multistep modal</li>
							<li>You have a series of inputs or actions that you want to show the progress of the filling and the hour and date of the states or the actions aren't necessary</li>
						</ul>
						<br>
						<h5>Don't use Tables when:</h5>
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
	component: Table,
	title: 'Table',
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

export const table = () => ({
	props: {
		steps: {
			default: () => object('Steps:', [
				{ label: 'Dados da operadora', concluded: false, active: true },
				{ label: 'Bandeira 2', concluded: false, active: false },
				{ label: 'Bandeira 3', concluded: false, active: false },
				{ label: 'Bandeira 4', concluded: false, active: false },
				{ label: 'Bandeira 5', concluded: false, active: false },
			]),
		},
	},
	template: template,
});
