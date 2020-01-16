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
		variantMode: {
			type: Boolean,
			default: true,
			description: `The property that specifies 
				if the badge will work in variant mode
				or not.`,
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
			default: 'variant-1',
			description: `Variant mode gives 6 predefined badges 
				to work with. Seting this property to 'true',
				you can use 'variant-1', 'variant-2', ... 'variant-6'
				to use the predefined badge styles.`,
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

.variant-1 {
	color: #5a4300;
	background-color: #ffbf004d;
}

.variant-2 {
	color: #005a15;
	background-color: #28a74526;
}

.variant-3 {
	color: #8c1520;
	background-color: #e2757f40;
}

.variant-4 {
	color: #00469c;
	background-color: #60c4ff40;
}

.variant-5 {
	color: #621e83;
	background-color: #e47aff40;
}

.variant-6 {
	color: #2f2f2f;
	background-color: #acacac40;
}
</style>
