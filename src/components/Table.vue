<template>
	<div>
		<b-table striped hover :items="items" :fields="fields"></b-table>
	</div>
</template>

<script>

export default {
	props: {
		fields: {
			type: Array,
			default: () => [],
			required: true,
			description: `The labels of the table. An array of objects containing 'key' and 'label'.
				The 'key' property is the identifier value of the object,
				and the 'label' property is the text that will be displayed as its respective column title.`,
		},
		items: {
			type: Array,
			default: () => [],
			required: true,
			description: 'alo galera',
		},
	},

	data() {
		return {

		};
	},

	computed: {

	},

	watch: {

	},

	created() {

	},

	beforeMount() {
		console.log("mounted");
		console.log('this.fields', this.fields);
		console.log('this.items', this.items);
		
	},

	methods: {

	},
};
</script>
