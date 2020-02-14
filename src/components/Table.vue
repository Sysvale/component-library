<template>
	<div>
		<b-table hover :items="items" :fields="fields">
			 <template v-slot:head(selectable)="selectable">
				<div
					v-if="allowSelection"
					class="action-icons d-flex justify-content-start"
				>
					<square-icon
						v-if="!isAllSelected"
						size="1.1x"
						v-b-tooltip.hover
						class="clickable"
						:title="'Clique para remover as seleções'"
						@click="selectAll(true)"
					/>
					<check-square-icon
						v-else
						size="1.1x"
						v-b-tooltip.hover
						class="clickable"
						:title="'Clique para selecionar todos'"
						@click="selectAll(false)"
					/>
				</div>
			</template>

			<template
				v-slot:cell(selectable)="data"
			>
				<div
					v-if="allowSelection"
					class="action-icons d-flex justify-content-start"
				>
					<square-icon
						v-if="!data.rowSelected"
						size="1.1x"
						class="clickable"
						@click="hadleRowSelection(data)"
					/>
					<check-square-icon
						v-else
						size="1.1x"
						class="clickable"
						@click="hadleRowSelection(data)"
					/>
				</div>
			</template>
		</b-table>
	</div>
</template>

<script>
import { SquareIcon } from 'vue-feather-icons';
import { CheckSquareIcon } from 'vue-feather-icons';

export default {
	props: {
		fields: {
			type: Array,
			default: () => [],
			required: true,
			description: ``,
		},
		items: {
			type: Array,
			default: () => [],
			required: true,
		},
		allowSelection: {
			type: Boolean,
			default: false,			
		},
	},
	components: {
		SquareIcon,
		CheckSquareIcon,
	},

	data() {
		return {
			isAllSelected: false,
			filteredItems: [],
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
		selectAll(status) {			
			this.filteredItems.forEach((item) => {
				if (item.isSelected && status) {
					return;
				}

				item.isSelected = status;
				this.isAllSelected = status;
				console.log('status2: ', this.isAllSelected);
				item._rowVariant = status === true ? 'primary' : '';
				this.$emit('item-selected', item);
			});
		},
	},
};
</script>
<style>
	.clickable {
		cursor: pointer;
	}

	.action-icons {
		font-size: 18px;
		color: #707070;
		padding: 3px;
		display: flex;
		justify-content: flex-end;
	}
</style>
