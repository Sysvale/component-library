
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

const componentDescription = 'paginations are small status descriptors used, primarly, to highlight important metadata about features or content.';

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
						<h5>Use paginations when:</h5>
						<ul>
							<li>You want to show status associated with your logic business or users actions</li>
							<li>You want to highlight important metadata about features or content</li>
							<li>You need to show information that is helpful but needs the surrounding context to make sense (status,type, etc.)</li>
							<li>The pagination is readonly</li>
						</ul>
						<br>
						<h5>Don't use paginations when:</h5>
						<ul>
							<li>The status that the pagination represents, can be setted or removed by the user</li>
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
