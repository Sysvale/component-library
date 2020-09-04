
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, boolean, select, number, text,
} from '@storybook/addon-knobs';

import Popover from '../components/Popover.vue';
import { action } from '@storybook/addon-actions';

// ------ COMPONENT INFO ------
const template = `
		<div class="d-flex justify-content-center" style="height: 300px;">
			<b-button
				id="trigger-popover"
				style="height: 40px;"
			>
				Click
			</b-button>
			<s-popover
				target="trigger-popover"
				:size="size"
				:right="right"
				:left="left"
			>
				<p class="p-3">
					Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Atirei o pau no gatis, per gatis num morreus. Pra lá , depois divoltis porris, paradis. Leite de capivaris, leite de mula manquis sem cabeça.
					Viva Forevis aptent taciti sociosqu ad litora torquent.
				</p>
			</s-popover>
		</div>
`;

const componentDescription = {
		name: 'Popover',
		summary: 'Popover is a component emulate a tooltip behavior, can be applied to any interactive element. This component supports the click interaction.',
		usage: {
				whenToUse: [
						'You want to place filters or sort fields that will be shown when you click in some component.', 
				],
				whenNotUse:[
						'You need a modal.',
						'You need a navigation solution.',
						'You are need a form to register something.'
				]
	},
	slots: {
		default: {		
			description: 'Slot used to display the content inside the component.'
		},
	},
};

const docsDecorator = () => {
	return {
		data() {
			return {
				component: Popover,
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
	component: Popover,
	title: 'cs/Popover',
	decorators: [docsDecorator, withKnobs, withA11y, withDesign],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
	},
};

export const popover = () => ({
	data() {
		return {
			show: false,
		};
	},
	props: {
		right: {
			default: () => boolean('Right aligned:', false),
		},
		left: {
			default: () => boolean('Left aligned:', true),
		},
		size: {
			default: () => select('Size:', {
				default: 'default',
				xl: 'xl',
				lg: 'lg',
				sm: 'sm',
			}, 'lg'),
		},
	},
	template,
});
