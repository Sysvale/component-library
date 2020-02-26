<template>
	<div>
		<b-row>
			<b-col
				v-if="items.length > 0"
				cols="8"
				class="mb-3"
			>
				<b-input-group class="mt-3">
					<b-input-group-prepend class="form-fix prepend">
						<search-icon
							size="1.1x"
							class="icons-color"
						/>
					</b-input-group-prepend>
					<b-form-input
						v-model="textFilter"
						class="form-input seatch-input-container"
						:placeholder="filterPlaceholder"
					/>
					<b-input-group-append class="form-fix append">
						<i
							v-if="textFilter.length !== 0"
							class="icon-x clickable"
							@click="cleanTextFilter"
						/>
					</b-input-group-append>
				</b-input-group>
			</b-col>
		</b-row>
		<b-table
			hover
			:items="xItems"
			:fields="fields"
			:filter="textFilter"
			@filtered="handleFiltered"
		>
			 <template v-slot:head(selectable)>
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
import { SearchIcon } from 'vue-feather-icons'

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
		filterPlaceholder: {
			type: String,
			default: '',
		},
	},
	components: {
		SquareIcon,
		CheckSquareIcon,
		SearchIcon,
	},

	data() {
		return {
			selectedItems: [],
			isAllSelected: false,
			xItems: [],
			filteredItems: [],
			textFilter: '',
		};
	},

	created() {
		this.xItems = this.items.map(item => ({
			...item,
			rowVariant: item.isActive === false ? '- text-muted font-italic' : item.rowVariant,
		}));
	},

	methods: {
		handleFiltered(items) {
			this.filteredItems = items;
			return this.$emit('filtered', items);
		},

		cleanTextFilter() {
			this.textFilter = '';
		},

		selectAll(status) {
			this.filteredItems.forEach((item) => {
				if (item.isSelected && status) {
					return;
				}

				item.isSelected = status;
				this.isAllSelected = status;
				item._rowVariant = status === true ? 'primary' : '';
				this.$emit('item-selected', item);
			});
		},

		hadleRowSelection(value) {
			this.changeSelection(value);
			this.$emit('item-selected', value);
		},

		changeSelection(value) {
			value.isSelected = !value.isSelected;
			value._rowVariant = value.isSelected === true ? 'primary' : '';
		},
	},

};
</script>
<style>
	.clickable {
		cursor: pointer;
	}

	.icons-color {
		color: #707070;
	}

	.action-icons {
		font-size: 18px;
		color: #707070;
		padding: 3px;
		display: flex;
		justify-content: flex-end;
	}

	.form-fix {
		color: #ced4da;
		padding: 10px;
		border: 1px solid #ced4da;
	}

	.form-fix.prepend {
		border-right: 0px;
		border-top-left-radius: 0.25rem;
		border-bottom-left-radius: 0.25rem;
	}

	.form-fix.append {
		padding-top: 11px;
		padding-bottom: 9px;
		border-left: 0px;
		border-top-right-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;
	}

	.form-input {
		border-left: 0;
		border-right: 0;
		outline: none;
		box-shadow: none !important;
	}

	.form-input:focus {
		border-color: #ced4da;
	}

	.seatch-input-container {
		height: auto !important;
	}

</style>
