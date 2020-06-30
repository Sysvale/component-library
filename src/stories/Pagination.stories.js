
import { withA11y } from '@storybook/addon-a11y';
import {
	withKnobs, text, color, number,
} from '@storybook/addon-knobs';

import Pagination from '../components/Pagination.vue';
import { action } from '@storybook/addon-actions';

// ------ COMPONENT INFO ------
const template = `
    <s-pagination
        :total-rows="totalRows"
        :per-page="perPage"
        :active-text-color="activeTextColor"
        :active-bg-color="activeBgColor"
        :hover-text-color="hoverTextColor"
        :hover-bg-color="hoverBgColor"
        :border-radius="borderRadius"
        @input="changePage"
    />`;

const componentDescription = {
    name: 'Pagination',
    summary: `Pagination is a button row used to organize and manage any amounts of data that can be divided in blocks.
	This component should be bound via v-model. Pages are indexed starting at 1.`,
    usage: {
        whenToUse: [
            'You need to show data that makes sense to be shown together.', 
            `You need to show a large amount of data, organized in rows.`,
        ],
        whenNotUse:[
            'The amount of data to be shown is too small.',
            `There's too much information to be displayed in a row.`,
        ]
    },
};

const docsDecorator = () => {
	return {
		data() {
			return {
				component: Pagination,
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
	component: Pagination,
	title: 'bios/Pagination',
	decorators: [docsDecorator, withKnobs, withA11y],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
	},
};

// ------ KNOBS SETTINGS ------
export const pagination = () => ({
	methods: {
		changePage: action(`Page clicked`),
	},
	props: {
		perPage: {
			default: () => number(
				'Items per page:',
				2,
				{min: 1},
			),
		},
		totalRows: {
			default: () => number(
				'Item total:',
				6,
				{min: 1},
			),
		},
		activeBgColor: {
			default: () => color('Active item background color:', '#545b62'),
		},
		activeTextColor: {
			default: () => color('Active item text color:', '#FFFFFF'),
		},
		hoverBgColor: {
			default: () => color('Hover item background color:', '#545b62'),
		},
		hoverTextColor: {
			default: () => color('Hover item text color:', '#FFFFFF'),
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
			),
		},
	},
	template: template,
});
