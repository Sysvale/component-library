<template>
	<div
		class="no-items"
	>
		<img
			class="image-container"
			:src="emptyStateImage"
			:alt="imgDescription"
		/>
		<div
			class="no-items-text"
			:style="headlineStyle"
		>
			{{ headlineText }}
		</div>
		<div
			class="no-items-bodytext mt-2"
			:style="bodyTextStyle"
		>
			{{ bodyText }}
		</div>
		<div
			v-if="showActionButton"
			class="action-button-container"
		>
			<b-button
				class="primary-button"
				:style="buttonStyle"
				@click="$emit('actionButtonClick', true)"
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
			type: String,
			default: '',
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
		showActionButton: {
			type: Boolean,
			default: true,
			description: 'When setted to true, this prop displays an Action Button.'
		},
		buttonText: {
			type: String,
			default: 'Add new content',
			description: 'The text that will be displayed inside the button.'
		},
		headlineColor: {
			type: String,
			default: '#563d7c',
			description: 'The Hex color code for the headline.'
		},
		bodyTextColor: {
			type: String,
			default: '#707070',
			description: 'The Hex color code for the body text.'
		},
		buttonColor: {
			type: String,
			default: '#1C72CE',
			description: 'The Hex color code for the button.'
		},
		buttonTextColor: {
			type: String,
			default: '#FFFFFF',
			description: 'The Hex color code for the button text.'
		},
		headlineFontSize: {
			type: Number,
			default: 32,
			description: 'The value, in pixels, of the font size of the headline. The maximum value accepted is 60px.',
			validator: value => {
				return value <= 60
			}
		},
		bodyFontSize: {
			type: Number,
			default: 16,
			description: 'The value, in pixels, of the font size of the body text. The maximum value accepted is 30px.',
			validator: value => {
				return value <= 30
			}
		},
		buttonFontSize: {
			type: Number,
			default: 16,
			description: 'The value, in pixels, of the font size of the button. The maximum value accepted is 30px.',
			validator: value => {
				return value <= 30
			}
		},
		borderRadius: {
			type: Number,
			default: 5,
			description: 'The value, in pixels, button border radius. The maximum value accepted is 30px.',
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
				'--button-text-color': this.buttonTextColor,
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

.image-container {
	max-width:500px;
	max-height:500px;
	width: auto;
	height: auto;
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

.action-button-container {
	margin-top: 20px;
}

.primary-button{
	background-color: var(--button-color) !important;
	border-color: var(--button-color) !important;
	color: var(--button-text-color);
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
