
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, text, color, boolean,
} from '@storybook/addon-knobs';

import ActionBar from './ActionBar.vue';

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

const componentDescription = 'Badges are small status descriptors used, primarly, to highlight important metadata about features or content.';

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
	component: ActionBar,
	title: 'ActionBar',
	decorators: [docsDecorator, withKnobs, withA11y],
	parameters: {
		a11y: {
			element: '.preview-container',
		},
	},
};

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
