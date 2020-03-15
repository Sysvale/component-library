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
				v-if="type === 'primary'"
				class="primary-button"
				@click="$emit('add-button-click')"
			>
				{{ buttonText }}
			</b-button>
			<b-button
				v-else
				class="mr-3 px-5"
				variant="outline-secondary"
				@click="$emit('filter-button-click')"
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
		},
		noItemSubtext: {
			type: String,
			default: '',
		},
		showAddButton: {
			type: Boolean,
			default: true,
		},
		buttonText: {
			type: String,
			default: 'Adicionar novo',
		},
		type: {
			type: String,
			default: 'primary',
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

.primary-button {
    background-color: #08b2e3;
    border-color: #08b2e3;
    box-shadow: none !important;
}

.primary-button:hover {
    background-color: #068eB6;
    border-color: #068eB6;
}

.primary-button:active {
    background-color: #0784a7 !important;
    border-color: #0784a7 !important;
}

.primary-button.disabled {
    background-color: #5ecded;
    border-color: #5ecded;
    cursor: default;
}

.primary-button.disabled:active {
    background-color: #5ecded !important;
    border-color: #5ecded !important;
}

</style>
