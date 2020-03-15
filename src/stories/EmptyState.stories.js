
import { withA11y } from '@storybook/addon-a11y';
import {
	withKnobs, text, boolean, files, color, number,
} from '@storybook/addon-knobs';

import EmptyState from '../components/EmptyState.vue';

const template = `
<s-empty-state
	:noItemImage="noItemImage"
	:noItemText="noItemText"
	:noItemSubtext="noItemSubtext"
	:showAddButton="showAddButton"
	:mainTextColor="mainTextColor"
	:mainFontSize="mainFontSize"
	:subTextColor="subTextColor"
	:subFontSize="subFontSize"
	:buttonText="buttonText"
	:buttonColor="buttonColor"
	:borderRadius="borderRadius"
/>`;

const componentDescription = 'Badges are small status descriptors used, primarly, to highlight important metadata about features or content.';

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
				<wrapper :componentData="component" :exampleSourceCode="template" :componentDescription="componentDescription" componentName="Badge">
					<div slot="usage">
						<h5>Use Badges when:</h5>
						<ul>
							<li>You want to show status associated with your logic business or users actions</li>
							<li>You want to highlight important metadata about features or content</li>
							<li>You need to show information that is helpful but needs the surrounding context to make sense (status,type, etc.)</li>
							<li>The badge is readonly</li>
						</ul>
						<br>
						<h5>Don't use Badges when:</h5>
						<ul>
							<li>The status that the badge represents, can be setted or removed by the user</li>
							<li>Clicking the component should trigger a functionality or execute an action.</li>
							<li>You want to categorize something</li>
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
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/aYgL5y9hDGt8zMi7gFA3TM/Badge?node-id=0%3A1',
		},
	},
};

export const emptyState = () => ({
	props: {
		noItemImage: {
			default: () => files('Empty State Image:', '.jpg, .jpeg, .png, .gif, .svg', [])
		},
		noItemText: {
			default: () => text('No Item Text:', 'No results found')
		},
		noItemSubtext: {
			default: () => text('No Item Subtext:', 'Start adding some content!')
		},
		showAddButton: {
			default: () => boolean('Show Add Button', true)
		},
		buttonText: {
			default: () => text('Button Text:', 'Add new content')
		},
		mainTextColor: {
			default: () => color('Main Text Color', '#563d7c')
		},
		subTextColor: {
			default: () => color('Subtext Color', '#707070')
		},
		buttonColor: {
			default: () => color('Button Collor', '#007bff')
		},
		mainFontSize: {
			default: () => number(
				'Main text font size (pixels):',
				32,
				{
					range: false,
					min: 1,
					max: 70,
					step: 1
				}
			)
		},
		subFontSize: {
			default: () => number(
				'Subtext font size (pixels):',
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
					max: 15,
					step: 1,
				}
			)
		}
	},
	template: template
});
