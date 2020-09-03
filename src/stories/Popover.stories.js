
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, boolean, object, text
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
				size="xl"
			>
				Embedding content <span class="text-danger">using slots</span> affords you
				<em>greater <strong>control.</strong></em> and basic HTML support.
			</s-popover>
		</div>
`;

const componentDescription = {
		name: 'Popover',
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
			default: () => boolean('Left aligned:', false),
		},
	},
	template,
});
