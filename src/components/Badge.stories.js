
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, text, select, boolean,
} from '@storybook/addon-knobs';

import Badge from './Badge.vue';

const template = `
<s-badge
	status_type="Negative"
	content="Negativo"
/>`;

const componentDescription = 'Badges are small status descriptors used, primarly, to highlight important metadata about features or content.';

const docsDecorator = () => {
	return {
		data() {
			return {
				component: Badge,
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
	component: Badge,
	title: 'Badge',
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

export const badge = () => ({
	props: {
		text: {
			default: () => text('Label text:', 'Negative'),
		},
		bgColor: {
			default: () => text('Background color:', '#dc354526')
		},
		color: {
			default: () => text('Color:', '#dc3545')
		},
		variant: {
			default: () => select('Variant', {
				variant1: 'variant-1',
				variant2: 'variant-2',
				variant3: 'variant-3',
				variant4: 'variant-4',
				variant5: 'variant-5',
				variant6: 'variant-6',
			}, 'variant-1'),
		},
		variantMode: {
			default: () => boolean('Variant Mode', true)
		},
		colorCodeMode: {
			default: () => boolean('Color Code Mode', false)
		}
	},
	template:
		`<s-badge
			:status_type="status_type"
			:content="text"
		>
		</s-badge>`,
});
