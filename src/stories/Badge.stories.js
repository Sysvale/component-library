import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import {
	withKnobs, text, select, boolean,
} from '@storybook/addon-knobs';

import Badge from '../components/Badge.vue';

// ------ COMPONENT INFO ------
const template = `
    <s-badge
        :color="color"
        :bgColor="bgColor"
        :content="text"
        :variant="variant"
        :colorCodeMode="colorCodeMode"
    />`;

const componentDescription = {
    name: 'Badge',
    summary: 'Badges are small status descriptors used, primarly, to highlight important metadata about features or content.',
    usage: {
        whenToUSe: [
            'You want to show status associated with your logic business or users actions.', 
            `You want to highlight important metadata about features or content.`,
            `You need to show information that is helpful but needs the surrounding context to make sense (status,type, etc.).`,
            `The badge is readonly.`,
        ],
        whenNotUse:[
            'The status that the badge represents, can be setted or removed by the user.',
            'Clicking the component should trigger a functionality or execute an action.',
            'You want to categorize something.',
        ]
    },
};

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
	component: Badge,
	title: 'bios/Badge',
	decorators: [docsDecorator, withKnobs, withA11y, withDesign],
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

// ------ KNOBS SETTINGS ------
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
				yellow: 'yellow',
				green: 'green',
				red: 'red',
				blue: 'blue',
				purple: 'purple',
				gray: 'gray',
			}, 'yellow'),
		},
		colorCodeMode: {
			default: () => boolean('Color Code Mode', false)
		}
	},
	template: template,
});
