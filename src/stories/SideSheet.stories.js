
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, boolean, object, text
} from '@storybook/addon-knobs';

import SideSheet from '../components/SideSheet.vue';
import { action } from '@storybook/addon-actions';

// ------ COMPONENT INFO ------
const template = `
		<div>
			<b-button
				@click="show = true"
			>
				Toggle SideSheet
			</b-button>
			<s-side-sheet
					v-model="show"
					:right="right"
					:left="left"
					:no-close-on-backdrop="noCloseOnBackdrop"
					:no-close-on-esc="noCloseOnEsc"
			>
				<p>
					Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Atirei o pau no gatis, per gatis num morreus. Pra lá , depois divoltis porris, paradis. Leite de capivaris, leite de mula manquis sem cabeça.
					Viva Forevis aptent taciti sociosqu ad litora torquent. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Cevadis im ampola pa arma uma pindureta.
				</p>
			</s-side-sheet>
		</div>
`;

const componentDescription = {
		name: 'SideSheet',
		summary: 'SideSheet are components used to show some content as modal in one of the sides of a page',
		usage: {
				whenToUse: [
						'You want to place filters that will be shown when you click in some component.', 
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
		'close-icon': {
			description: 'Slot used to customize the close button shown above the content'
		}
	},
};

const docsDecorator = () => {
	return {
		data() {
			return {
				component: SideSheet,
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
	component: SideSheet,
	title: 'cs/SideSheet',
	decorators: [docsDecorator, withKnobs, withA11y, withDesign],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
	},
};

export const sideSheet = () => ({
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
			default: () => boolean('Left aligned:', false),
		},
		noCloseOnBackdrop: {
			default: () => boolean('No close on brackdrop click:', false),
		},
		noCloseOnEsc: {
			default: () => boolean('No close when esc pressed:', false),
		},
	},
	template,
});
