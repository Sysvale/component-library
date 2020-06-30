import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, text, color, boolean,
} from '@storybook/addon-knobs';

import ActionBar from '../components/ActionBar.vue';

// ------ COMPONENT INFO ------
const template = `
    <s-action-bar
        :floatingMode="floatingMode"	
        :bgColor="bgColor"
        :isDismissible="isDismissible"
        @close="logClosed"
    >
        <template slot="description">
            <span class="px-2 mx-1">
                {{ description }}
            </span>
        </template>
        <template slot="buttons">
            <b-button
                variant="outline-light"	
                class="pl-2 pr-3 mx-1"
                @click="logAction1"
            >
                <check-circle-icon size="1.5x" class="custom-class px-1 light"></check-circle-icon>
                <span class="light">Action1</span>
            </b-button>
            <b-button
                variant="outline-light"
                class="pl-2 pr-3 mx-1"
                @click="logAction2"
            >
                <check-circle-icon size="1.5x" class="custom-class px-1 light"></check-circle-icon>
                <span class="light">Action2</span>
            </b-button>
        </template>
    </s-action-bar>`;

const componentDescription = {
    name: 'ActionBar',
    summary: `ActionBars are toolbars that can display actions and information to the user.`,
    usage: {
        whenToUse: [
            'You need to group actions that the user can make.', 
            `You have no space in the menus and in other places to display actions and information.`,
        ],
        whenNotUse:[
            `To display statuses of the system.`,
            `In floating mode and it makes the ActionBar to hide information when floating.`,
        ]
	},
	events: {
		close: {
			trigger: 'click',
			description: 'Event emitted when the "x" button is clicked.'
		}
	},
	slots: {
		description: {		
			description: 'Slot used to display the text in the component.'
		},
		buttons: {		
			description: 'Slot used to display the buttons in the toolbar.'
		}
	},
};

const docsDecorator = () => {
	return {
		data() {
			return {
				component: ActionBar,
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
	component: ActionBar,
	title: 'bios/ActionBar',
	decorators: [docsDecorator, withKnobs, withA11y],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
	},
};

// ------ KNOBS SETTINGS ------
export const actionBar = () => ({
	methods: {
		logAction1: action('action1 button clicked'),
		logAction2: action('action2 button clicked'),
		logClosed: action('close icon clicked'),
	},
	props: {
		description: {
			default: () => text('Description:', 'Some description'),
		},
		floatingMode: {
			default: () => boolean('Floating mode', false)
		},
		isDismissible: {
			default: () => boolean('Is dismissible', false)
		},
		bgColor: {
			default: () => color('Background color', '#30353F')
		},
	},
	template: template,
});
