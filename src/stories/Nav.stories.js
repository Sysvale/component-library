
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, boolean, object, text
} from '@storybook/addon-knobs';

import Nav from '../components/Nav.vue';
import { action } from '@storybook/addon-actions';


const template = `
<s-nav
	:items="items"
	:old-school="oldSchool"
	:active-item="activeItem"
	@click="handleClick"
/>`;

const componentDescription = 'Nav counters are components that control and display the steps of a Nav.';

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
						<h5>Use Nav Controllers when:</h5>
						<ul>
							<li>You want to show, in a visual way, the current state and the current step of a Nav</li>
							<li>You have a multistep modal</li>
							<li>You have a series of inputs or actions that you want to show the progress of the filling and the hour and date of the states or the actions aren't necessary</li>
						</ul>
						<br>
						<h5>Don't use Nav Controllers when:</h5>
						<ul>
							<li>You are looking for a timeline component</li>
							<li>The order of the steps, events, or actions are relevant</li>
						</ul>

						<p class="mt-5	">Obs.: When clicked, the Nav emits an event called 'step_changed' that sends to to you the index of the step clicked,
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
			url: 'https://www.figma.com/file/g4mxhKJxnHj0LmqBheytlw/NavBar',
		},
	},
};

const items = [
	{
		label: 'Mapa de grupo de risco',
		path: '/',
	},
	{
		label: 'Liga Saudável',
		path: '/1',
	},
	{
		label: 'Mapa de calor dos bairros',
		path: '/2',
	},
];

export const nav = () => ({
	methods: {
		handleClick: action('Item clicked'),
	},
	props: {
		items: {
			default: () => object('Items:', items),
		},
		oldSchool: {
			default: () => boolean('Oldschool mode', false)
		},
		activeItem: {
			default: () => object('Active item', items[1])
		},
	},
	template,
});
