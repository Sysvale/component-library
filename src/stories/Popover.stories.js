
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
				@click="togglePopover"
			>
				Click
			</b-button>
			<s-popover
				v-model="show"
				target="trigger-popover"
				:size="size"
				:alignment="alignment"
				:no-close-on-backdrop="noCloseOnBackdrop"
					:no-close-on-esc="noCloseOnEsc"
			>
				<p class="p-3">
					Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo,
					mas ninguém vê os tombis que eu levo! Atirei o pau no gatis, per gatis num
					morreus. Pra lá , depois divoltis porris, paradis. Leite de capivaris,
					leite de mula manquis sem cabeça. Viva Forevis aptent taciti sociosqu
					ad litora torquent.
				</p>
			</s-popover>
		</div>
`;

const componentDescription = {
		name: 'Popover',
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
	slots: {
		default: {		
			description: 'Slot used to display the content inside the popover.'
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
		alignment: {
			default: () => select('Alignment:', {
				left: 'left',
				right: 'right',
			}, 'left'),
		},
		size: {
			default: () => select('Size:', {
				default: 'default',
				xl: 'xl',
				lg: 'lg',
				sm: 'sm',
			}, 'lg'),
		},
		noCloseOnBackdrop: {
			default: () => boolean('No close on brackdrop click:', false),
		},
		noCloseOnEsc: {
			default: () => boolean('No close when esc pressed:', false),
		},
	},
	template,
	methods: {
		togglePopover() {
			this.show = !this.show;
		},
	},
});
