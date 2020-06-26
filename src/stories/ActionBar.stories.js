
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, text, color, boolean,
} from '@storybook/addon-knobs';

import ActionBar from '../components/ActionBar.vue';

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

const componentDescription = 'ActionBars are toolbars that can display actions and information to the user.';

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
				<docs-wrapper :componentData="component" :exampleSourceCode="template" :componentDescription="componentDescription" componentName="ActionBar">
					<div slot="usage">
						<h5>Use ActionBars when:</h5>
						<ul>
							<li>You need to group actions that the user can make</li>
							<li>You have no space in the menus and in other places to display actions and information</li>
						</ul>
						<br>
						<h5>Don't use ActionBars when:</h5>
						<ul>
							<li>To display statuses of the system</li>
							<li>In floating mode and it makes the ActionBar to hide information when floating</li>
						</ul>
						<h5>Obs.:</h5>
						<ul>
							<li>You can display information in the ActionBar using the 'description' slot</li>
							<li>You can add buttons in the ActionBar using the 'buttons' slot</li>
							<li>More info about how to use the slots can be found in the code bellow</li>
						</ul>
					</div>
					<story slot="component-preview"/>
				</docs-wrapper>
			</div>`,
	};
};


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
