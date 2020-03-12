<template>
	<div
		class="no-items"
	>
		<img :src="noItemImage">
		<div class="no-items-text main-colored-text">
			{{ noItemText }}
		</div>
		<div class="no-items-subtext mt-2">
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
	},
};
</script>

<style>

.no-items {
	color: #707070;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	font-size: 32px;
	height: 500px;
	margin-top: 60px;
}

.no-items-text {
	margin-top: 20px;
}

.no-items-subtext {
	font-size: 16px;
	max-width: 50%;
	text-align: center;
}

.main-colored-text {
	color: #563d7c;
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
