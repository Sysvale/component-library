<template>
	<div
		class="no-items"
	>
		<img :src="emptyStateImage">
		<div class="no-items-text"
			:style="headlineStyle">
			{{ headlineText }}
		</div>
		<div class="no-items-bodytext mt-2"
			:style="bodyTextStyle">
			{{ bodyText }}
		</div>
		<div
			v-if="showAddButton"
			class="add-button-container"
		>
			<b-button
				class="primary-button"
				:style="buttonStyle"
				@click="$emit('add-button-click')"
			>
				{{ buttonText }}
			</b-button>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		emptyStateImage: {
			type: Array,
			default: () => [],
			description: 'The image that will be displayed in the component.'
		},
		imgDescription: {
			type: String,
			default: '',
			description: 'The images description that will be displayed in the component.'
		},
		headlineText: {
			type: String,
			default: 'No results found',
			description: 'The headline of the component.'
		},
		bodyText: {
			type: String,
			default: 'Start adding some content!',
			description: 'The body text of the component.'
		},
		showAddButton: {
			type: Boolean,
			default: true,
			description: 'When setted to true, this prop displays an Add Button.'
		},
		buttonText: {
			type: String,
			default: 'Add new content',
			description: 'The text that will be displayed inside the button.'
		},
		headlineColor: {
			type: String,
			default: '#563d7c',
			description: `The Hex color code for the headline.`
		},
		bodyTextColor: {
			type: String,
			default: '#707070',
			description: `The Hex color code for the body text.`
		},
		buttonColor: {
			type: String,
			default: '#1C72CE',
			description: `The Hex color code for the button.`
		},
		headlineFontSize: {
			type: Number,
			default: 32,
			description: `The value, in pixels, of the
				font size of the headline.`,
			validator: value => {
				return value <= 60
			}
		},
		bodyFontSize: {
			type: Number,
			default: 16,
			description: `The value, in pixels, of the
				font size of the body text.`,
			validator: value => {
				return value <= 30
			}
		},
		buttonFontSize: {
			type: Number,
			default: 16,
			description: `The value, in pixels, of the
				font size of the button.`,
			validator: value => {
				return value <= 30
			}
		},
		borderRadius: {
			type: Number,
			default: 5,
			description: `The value, in pixels, of the border
				radius of the button.`,
			validator: value => {
				return value <= 30
			}
		}
	},

	updated() {
		if(this.headlineFontSize > 60) {
			this.headlineFontSize = 60;
		}

		if(this.bodyFontSize > 30) {
			this.bodyFontSize = 30;
		}

		if(this.buttonFontSize > 30) {
			this.buttonFontSize = 30;
		}

		if(this.borderRadius > 30) {
			this.borderRadius = 30;
		}
	},

	computed: {
		headlineStyle() {
			return {
				'--headline-color': this.headlineColor,
				'--headline-font-size': `${this.headlineFontSize}px`,
			}
		},
		bodyTextStyle() {
			return {
				'--body-text-color': this.bodyTextColor,
				'--body-text-size': `${this.bodyFontSize}px`,
			}
		},
		buttonStyle() {
			return {
				'--button-color': this.buttonColor,
				'--button-font-size': `${this.buttonFontSize}px`,
				'--border-radius': `${this.borderRadius}px`,
			}
		}
	}

};
</script>

<style>

.no-items {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	margin: 60px;
}

.no-items-text {
	margin-top: 20px;
	color: var(--headline-color);
	font-size: var(--headline-font-size);
}

.no-items-bodytext {
	color: var(--body-text-color);
	font-size: var(--body-text-size);
	max-width: 50%;
	text-align: center;
}

.add-button-container {
	margin-top: 20px;
}

.primary-button{
	background-color: var(--button-color) !important;
	border-color: var(--button-color) !important;
	font-size: var(--button-font-size);
	border-radius: var(--border-radius);
    box-shadow: none !important;
}

.primary-button:hover {
    filter: brightness(80%);
}

.primary-button:active {
    filter: brightness(90%);
}

.primary-button.disabled {
    opacity: 0.5;
    cursor: default;
}

.primary-button.disabled:hover {
    filter: brightness(100%);
}

</style>
