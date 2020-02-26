
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, array, boolean, text,
} from '@storybook/addon-knobs';

import Table from '../components/Table.vue';

const template = `
<s-table
	:fields="fields"
	:items="items"
	:allowSelection="allowSelection"
	:filterPlaceholder="filterPlaceholder"
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
	},
};

export const table = () => ({
	props: {
		filterPlaceholder: {
			default: () => text('Description:', 'Some description'),
		},
		allowSelection: {
			default: () => boolean('Allow selection', false)
		},
		fields: {
			default: () => array('Fields:', [
				{ key: 'selectable', label: '' },
				{ key: 'description', label: 'Descrição' },
				{ key: 'value', label: 'Valor' },
				{ key: 'dates', label: 'Previsão de recebimento' },
				{ key: 'contact', label: 'Receber de' },
				{ key: 'status', label: 'Status' },
				{ key: 'button', label: '' },
				{ key: 'actions', label: '' },
			]),
		},
		items: {
			default: () => array('Items:', [
				{
					id: "ZGQ2MCJ9",
					description: "Conta show 1",
					value: "R$ 1806,73",
					status: "received",
					contact: "Bi Acrilicos",
					contact_id: "e5YTBkNzQyNGQzIn0=",
					expected_receive_date: "2020-01-02T16:47:56.000000Z",
					_rowVariant: "",
					dates: "02/01/2020",
					fancy_status: "Não recebida",
					_status_variant: "red",
				},
				{
					id: "ZGQ2MCJ9",
					description: "Conta test",
					value: "R$ 56,51",
					status: "not_received",
					contact: "Bi Acrilicos",
					contact_id: "e5YTBkNzQyNGQzIn0=",
					expected_receive_date: "2020-01-02T16:47:56.000000Z",
					_rowVariant: "",
					dates: "02/01/2020",
					fancy_status: "Não recebida",
					_status_variant: "red",
				},
				{
					id: "ZGQ2MCJ9",
					description: "Topzeira",
					value: "R$ 286,33",
					status: "not_received",
					contact: "Bi Acrilicos",
					contact_id: "e5YTBkNzQyNGQzIn0=",
					expected_receive_date: "2020-01-02T16:47:56.000000Z",
					_rowVariant: "",
					dates: "02/01/2020",
					fancy_status: "Não recebida",
					_status_variant: "red",
				},
			]),
		},
	},
	template: template,
});
