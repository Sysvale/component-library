<template>
	<div
		class="no-items"
	>
		<img :src="noItemImage">
		<div class="no-items-text"
			:style="mainTextStyle">
			{{ noItemText }}
		</div>
		<div class="no-items-subtext mt-2"
			:style="subTextStyle">
			{{ noItemSubtext }}
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
		noItemImage: {
			type: String,
			default: '',
		},
		noItemText: {
			type: String,
			default: '',
			description: ''
		},
		noItemSubtext: {
			type: String,
			default: '',
			description: ''
		},
		showAddButton: {
			type: Boolean,
			default: true,
		},
		buttonText: {
			type: String,
			default: 'Add new content',
			description: ''
		},
		mainTextColor: {
			type: String,
			default: '#563d7c',
			description: ``
		},
		subTextColor: {
			type: String,
			default: '#707070',
			description: ``
		},
		buttonColor: {
			type: String,
			default: '#007bff',
			description: ``
		},
		mainFontSize: {
			type: Number,
			default: 32,
			description: ``,
		},
		subFontSize: {
			type: Number,
			default: 16,
			description: ``,
		},
		borderRadius: {
			type: Number,
			default: 5,
			description: ``,
		}
	},

	computed: {
		mainTextStyle() {
			return {
				'--main-text-color': this.mainTextColor,
				'--main-text-size': `${this.mainFontSize}px`,
			}
		},
		subTextStyle() {
			return {
				'--sub-text-color': this.subTextColor,
				'--sub-text-size': `${this.subFontSize}px`,
			}
		},
		buttonStyle() {
			return {
				'--button-color': this.buttonColor,
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
	color: var(--main-text-color);
	font-size: var(--main-text-size);
}

.no-items-subtext {
	color: var(--sub-text-color);
	font-size: var(--sub-text-size);
	max-width: 50%;
	text-align: center;
}

.add-button-container {
	margin-top: 20px;
}

.primary-button{
	background-color: var(--button-color) !important;
	border-color: var(--button-color) !important;
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
