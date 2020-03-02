
import { withA11y } from '@storybook/addon-a11y';
import {
	withKnobs, text, color, number,
} from '@storybook/addon-knobs';

import Pagination from '../components/Pagination.vue';

const template = `
<s-pagination
	:total-rows="totalRows"
	:per-page="perPage"
	:active-text-color="activeTextColor"
	:active-bg-color="activeBgColor"
	:hover-text-color="hoverTextColor"
	:hover-bg-color="hoverBgColor"
	:border-radius="borderRadius"
/>
`;

const componentDescription = `Pagination is a button row used to organize and manage any amounts of data that can be divided in blocks.
	This component should be bound via v-model. Pages are indexed starting at 1.`;

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
			`<div>
				<wrapper :componentData="component" :exampleSourceCode="template" :componentDescription="componentDescription" componentName="Pagination">
					<div slot="usage">
						<h5>Use pagination when:</h5>
						<ul>
							<li>You need to show data that makes sense to be shown together</li>
							<li>You need to show a large amount of data, organized in rows</li>
						</ul>
						<br>
						<h5>Don't use pagination when:</h5>
						<ul>
							<li>The amount of data to be shown is too small.</li>
							<li>There's too much information to be displayed in a row.</li>
						</ul>
					</div>
					<story slot="component-preview"/>
				</wrapper>
			</div>`,
	};
};


export default {
	component: Pagination,
	title: 'Pagination',
	decorators: [docsDecorator, withKnobs, withA11y],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
	},
};

export const pagination = () => ({
	props: {
		text: {
			default: () => text('Label text:', 'Negative'),
		},
	},
	template: template,
});
