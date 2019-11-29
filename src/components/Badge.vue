<template>
	<div
		class="badge-container px-3 d-flex justify-content-center"
		:class="style"
	>
		<small class="regular">
			{{ content }}
		</small>
	</div>
</template>

<script>

export default {
	props: {
		status_type: {
			type: String,
			default: 'Negative',
			description: `A status that defines the color of the badge that will be redered.
				The options are: 'Negative', 'Neutral', and 'Positive'`,
			required: false,
		},
		content: {
			type: String,
			default: 'Negativo',
			description: 'The text that will be displayed inside the badge.',
			required: true,
		},
	},

	computed: {
		style() {
			let computed_style = '';
			switch (this.status_type) {
				case 'Neutral':
					computed_style = 'neutral-badge';
					break;
				case 'Positive':
					computed_style = 'positive-badge';
					break;
				default:
					computed_style = 'negative-badge';
					break;
			}

			return computed_style;
		},
	},
};
</script>
<style>
.badge-container {
	border-radius: 8px !important;
	width: fit-content;
}

.neutral-badge {
	color: #efb300;
	background-color: #ffc10726;
}

.positive-badge {
	color: #28A745;
	background-color: #28a74526;
}

.negative-badge {
	color: #dc3545;
	background-color: #dc354526;
}
</style>
