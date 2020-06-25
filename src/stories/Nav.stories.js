
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

const componentDescription = 'Nav...';

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
						<h5>Use Navs when:</h5>
						<ul>
							<li></li>
						</ul>
						<br>
						<h5>Don't use Navs when:</h5>
						<ul>
							<li></li>
						</ul>

						<p class="mt-5">Obs.: When clicked, ...</p>
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
