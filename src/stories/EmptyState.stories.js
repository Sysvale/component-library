import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, text, boolean, files, color, number,
} from '@storybook/addon-knobs';

import EmptyState from '../components/EmptyState.vue';

// ------ COMPONENT INFO ------
const template = `
    <s-empty-state
        :emptyStateImage="emptyStateImage"
        :imgDescription="imgDescription"
        :headlineText="headlineText"
        :bodyText="bodyText"
        :showActionButton="showActionButton"
        :headlineColor="headlineColor"
        :headlineFontSize="headlineFontSize"
        :bodyTextColor="bodyTextColor"
        :bodyFontSize="bodyFontSize"
        :buttonText="buttonText"
        :buttonColor="buttonColor"
        :buttonTextColor="buttonTextColor"
        :buttonFontSize="buttonFontSize"
        :borderRadius="borderRadius"
        @actionButtonClick="handleClick"
    />`;

const componentDescription = {
    name: 'EmptyState',
    summary: `Empty states tell users that there’s no content to display and what they can do next.`,
    usage: {
        whenToUSe: [
            'You want to guide the user through a process.', 
            `The user can add content to an empty area.`,
            `You want to tell users that an empty area has been intentionally left blank.`,
        ],
        whenNotUse:[
            `The recommended action can't be taken by all users seeing the component.`,
            `You need more than one call to action button.`,
        ]
    },
};

const docsDecorator = () => {
	return {
		data() {
			return {
				component: EmptyState,
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
	component: EmptyState,
	title: 'bios/EmptyState',
	decorators: [docsDecorator, withKnobs, withA11y],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
	},
};

// ------ KNOBS SETTINGS ------
export const emptyState = () => ({
	methods: {
		handleClick: action('button clicked'),
	},
	props: {
		emptyStateImage: {
			default: () => files('Empty State Image:', '.jpg, .jpeg, .png, .gif, .svg', [])
		},
		imgDescription: {
			default: () => text('Image Description:', '')
		},
		headlineText: {
			default: () => text('Headline Text:', 'No results found')
		},
		bodyText: {
			default: () => text('Body Text:', 'Start adding some content!')
		},
		showActionButton: {
			default: () => boolean('Show Action Button', true)
		},
		buttonText: {
			default: () => text('Button Text:', 'Add new content')
		},
		headlineColor: {
			default: () => color('Headline Color', '#563d7c')
		},
		bodyTextColor: {
			default: () => color('Body Text Color', '#707070')
		},
		buttonColor: {
			default: () => color('Button Color', '#1C72CE')
		},
		buttonTextColor: {
			default: () => color('Button Text Color', '#FFFFFF')
		},
		headlineFontSize: {
			default: () => number(
				'Headline font size (pixels):',
				32,
				{
					range: false,
					min: 1,
					max: 60,
					step: 1
				}
			)
		},
		bodyFontSize: {
			default: () => number(
				'Body text font size (pixels):',
				16,
				{
					range: false,
					min: 1,
					max: 30,
					step: 1
				}
			)
		},
		buttonFontSize: {
			default: () => number(
				'Button font size (pixels):',
				16,
				{
					range: false,
					min: 1,
					max: 30,
					step: 1
				}
			)
		},
		borderRadius: {
			default: () => number(
				'Border radius (pixels):',
				5,
				{
					range: false,
					min: 0,
					max: 30,
					step: 1,
				}
			)
		}
	},
	template: template,
});
