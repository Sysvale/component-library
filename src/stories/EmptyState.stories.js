
import { withA11y } from '@storybook/addon-a11y';
import {
	withKnobs, text, boolean, files, color, number,
} from '@storybook/addon-knobs';

import EmptyState from '../components/EmptyState.vue';

const template = `
<s-empty-state
	:emptyStateImage="emptyStateImage"
	:imgDescription="imgDescription"
	:headlineText="headlineText"
	:bodyText="bodyText"
	:showAddButton="showAddButton"
	:headlineColor="headlineColor"
	:headlineFontSize="headlineFontSize"
	:bodyTextColor="bodyTextColor"
	:bodyFontSize="bodyFontSize"
	:buttonText="buttonText"
	:buttonColor="buttonColor"
	:buttonFontSize="buttonFontSize"
	:borderRadius="borderRadius"
/>`;

const componentDescription = 'Empty states tell users that there’s no content to display and what they can do next.';

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
			`<div>
				<wrapper :componentData="component" :exampleSourceCode="template" :componentDescription="componentDescription" componentName="Empty State">
					<div slot="usage">
						<h5>Use Empty State when:</h5>
						<ul>
							<li>You want to guide the user through a process.</li>
							<li>The user can add content to an empty area.</li>
							<li>You want to tell users that an empty area has been intentionally left blank.</li>
						</ul>
						<br>
						<h5>Don't use Empty State when:</h5>
						<ul>
							<li>The recommended action can't be taken by all users seeing the component.</li>
							<li>You need more than one call to action button.</li>
						</ul>
					</div>
					<story slot="component-preview"/>
				</wrapper>
			</div>`,
	};
};


export default {
	component: EmptyState,
	title: 'EmptyState',
	decorators: [docsDecorator, withKnobs, withA11y],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
	},
};

export const emptyState = () => ({
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
		showAddButton: {
			default: () => boolean('Show Add Button', true)
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
			default: () => color('Button Collor', '#1C72CE')
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
	template: template
});
