<template>
	<div
		class="badge-container"
		:style="colorCodeMode ? styleVariables : ''"
		:class="!colorCodeMode ? predefinedStyle : ''"
	>
		<div
			class="d-flex justify-space-between align-items-center padding-left-12"
		>
			<small class="regular">
				{{ content }}
			</small>

			<div
				class="dismissible-icon-container ml-1 d-flex"
				:class="isDismissible ? '' : 'padding-right-12'"
				@click="$emit('close', true)"
			>
				<x-icon
					v-if="isDismissible"
					size="0.9x"
					class="m-1"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { XIcon } from 'vue-feather-icons'
export default {
	components: {
		XIcon,
	},
	
	props: {
		content: {
			type: String,
			default: 'Negativo',
			description: 'The text that will be displayed inside the badge.',
			required: true,
		},
		color: {
			type: String,
			default: '#28A745',
			description: `If the color code mode is set,
				you can pass the hex value of the text
				color of the badge.`,
		},
		bgColor: {
			type: String,
			default: '#28a74526',
			description: `If the color code mode is set,
				you can pass the hex value of the background
				color of the badge.`,
		},
		colorCodeMode: {
			type: Boolean,
			default: false,
			description: `The property that specifies 
				if the badge will work in the color code
				mode or not.`,
		},
		variant: {
			type: String,
			default: 'yellow',
			description: `Variant mode gives 6 predefined badges 
				to work with. Seting this property to 'true',
				you can use 'yellow', 'green', ... 'gray'
				to use the predefined badge styles.`,
		},
		isDismissible: {
			type: Boolean,
			default: false,
			description: `Specifies if the badge will display a 
				'x' icon that emits the 'close' event.`,
		},
	},

	computed: {
		predefinedStyle() {
			let computed_style = '';
			switch (this.variant) {
				case 'yellow':
					computed_style = 'yellow';
					break;
				case 'green':
					computed_style = 'green';
					break;
				case 'red':
					computed_style = 'red';
					break;
				case 'blue':
					computed_style = 'blue';
					break;
				case 'purple':
					computed_style = 'purple';
					break;
				case 'gray':
					computed_style = 'gray';
					break;
				default:
					computed_style = 'yellow';
					break;
			}

			return computed_style;
		},

		styleVariables() {
			return {
				'--bg-color': this.bgColor,
				'--color': this.color,
			};
		},
	},
};
</script>
<style>
.badge-container {
	border-radius: 8px !important;
	width: fit-content;
	background-color: var(--bg-color);
	color: var(--color);
	padding: 2px 4px;
}

.yellow {
	color: #5a4300;
	background-color: #ffbf004d;
}

.green {
	color: #005a15;
	background-color: #28a74526;
}

.red {
	color: #8c1520;
	background-color: #e2757f40;
}

.blue {
	color: #00469c;
	background-color: #60c4ff40;
}

.purple {
	color: #621e83;
	background-color: #e47aff40;
}

.gray {
	color: #2f2f2f;
	background-color: #acacac40;
}

.padding-right-12 {
	padding-right: 12px;
}

.padding-left-12 {
	padding-left: 12px;
}

.dismissible-icon-container {
	cursor: pointer;
	border-radius: 100%;
}

.dismissible-icon-container:hover {
	background-color: hsla(0, 0%, 10%, 0.1);
	transition: 0.5s ease;
}
</style>
