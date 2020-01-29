<template>
	<div>
		<b-row>
			<b-col
				v-if="items.length > 0"
				cols="8"
			>
				<b-input-group class="mt-3">
					<b-input-group-prepend class="form-fix prepend">
						<i
							class="icon-search"
						/>
					</b-input-group-prepend>
					<b-form-input
						v-model="textFilter"
						class="form-input"
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
			<b-col
				v-if="items.length > 0"
				cols="4"
				class="mt-3 filter-button-container"
			>
				<b-button
					v-if="showFilterButton"
					class="mr-3 px-5"
					variant="outline-secondary"
					@click="$emit('filter-button-click')"
				>
					{{ filterButtonText }}
				</b-button>
				<b-button
					class="primary-button"
					@click="$emit('add-button-click')"
				>
					{{ addButtonText }}
				</b-button>
			</b-col>
		</b-row>
		<div
			v-if="$_.size(filters) > 0"
			class="filter-badges-container pt-4 pb-2"
		>
			<div
				class="d-flex align-items-baseline"
			>
				<span
					class="main-text-color mr-3 h6 regular"
				>
					Filtros ativos:
				</span>
				<div
					class="d-flex flex-wrap"
				>
					<div
						v-for="(filter, property_name, index) in filters"
						:key="filter.fancy"
						class="pr-2 d-flex mb-2"
					>
						<s-dismissible-badge
							badge-class="bg-secondary py-1 badge-right-borders-rounded pl-3"
							:dismissible="true"
							class="pr-2"
							@remove-filter="removeFilter(filter, property_name)"
						>
							<slot>{{ filter.fancy }}</slot>
						</s-dismissible-badge>
						<div
							@click="cleanFilters"
						>
							<s-dismissible-badge
								v-if="index + 1 === $_.size(filters)"
								badge-class="px-2 bg-white py-1 rounded-border border border-secondary clickable"
								text-class="medium text-dark"
								class="pl-2"
							>
								<slot>{{ "Limpar filtros" }}</slot>
							</s-dismissible-badge>
						</div>
					</div>
				</div>
			</div>
		</div>
		<b-table
			v-if="xItems.length > 0"
			v-bind="$attrs"
			class="app-table"
			:hover="hover"
			:items="xItems"
			:fields="tableFields"
			:per-page="perPage"
			:current-page="currentPage"
			:empty-text="emptyText"
			:empty-filtered-text="emptyFilteredText"
			show-empty
			responsive
			:filter="textFilter"
			@filtered="handleFiltered"
		>
			<template slot="HEAD_selectable">
				<div
					class="action-icons d-flex justify-content-start"
				>
					<i
						v-if="isAllSelected"
						v-b-tooltip.hover
						class="icon-check-square clickable"
						:title="'Clique para remover as seleções'"
						@click="selectAll(false)"
					/>
					<i
						v-else
						v-b-tooltip.hover
						class="icon-square clickable"
						:title="'Clique para selecionar todos'"
						@click="selectAll(true)"
					/>
				</div>
			</template>

			<template
				v-for="({ key, label, merged, condensed }) in tableFields"
				:slot="key"
				slot-scope="{ item: row }"
			>
				<slot
					v-if="key === 'selectable'"
					:name="key"
					:row="row"
				>
					<div
						:key="label"
						class="action-icons d-flex justify-content-start"
					>
						<i
							v-if="row.isSelected"
							class="icon-check-square clickable"
							@click="hadleRowSelection(row)"
						/>
						<i
							v-else
							class="icon-square clickable"
							@click="hadleRowSelection(row)"
						/>
					</div>
				</slot>

				<slot
					v-else-if="label === 'Status'"
					:name="key"
					:row="row"
				>
					<!-- Possible options are "Negative", "Neutral" and "Positive" -->
					<badge
						:content="at(row, 'fancy_status')"
						:status_type="at(row, '_status_variant')"
					/>
				</slot>

				<slot
					v-else-if="key === 'button'"
					:name="key"
					:row="row"
				>
					<div
						:key="label"
						class="d-flex justify-content-end"
					>
						<b-button
							variant="outline-primary"
							size="sm"
							class="small-btn-min-size"
							:disabled="at(row, 'status') === 'paid' || at(row, 'status') === 'received'"
							@click="$emit('row-button-action', row)"
						>
							{{ rowButtonLabel }}
						</b-button>
					</div>
				</slot>

				<slot
					v-else
					:name="key"
					:row="row"
					:merged="merged"
					:condensed="condensed"
				>
					<div
						v-if="merged && !condensed"
						:key="label"
					>
						<p
							v-for="(merged_data, index) in row.merged_data"
							:key="index"
							class="m-0"
						>
							{{ `${row._merged_data_labels[index]}${merged_data}` || '--' }}
						</p>
					</div>
					<div
						v-else-if="merged && condensed"
						:key="label"
					>
						<p class="m-0">
							{{ row.merged_data[0] || '--' }}
						</p>
						<div
							v-if="typeof row.merged_data[1] === 'string'"
						>
							<p class="m-0 regular fs-12">
								{{ row.merged_data[1] | abbreviateWord }}
							</p>
						</div>
						<div v-else-if="$_.size(row.merged_data[1]) > 0">
							<span
								:id="`users-list-popover-${row.key}`"
								class="regular fs-12 pr-2 link"
							>
								Usuários
							</span>
							<s-popover
								:target="`users-list-popover-${row.key}`"
								trigger="click"
								title="Usuários associados à conta"
								:dismissible="true"
							>
								<template slot="body">
									<div>
										<div
											v-for="(item, index) in row.merged_data[1]"
											:key="index"
										>
											<p class="m-0 px-1">
												{{ item | abbreviateWord }}
											</p>
											<hr v-if="(index + 1) < row.merged_data[1].length">
										</div>
									</div>
								</template>
							</s-popover>
						</div>
					</div>
					<div
						v-else
						:key="label"
					>
						{{ ((at(row, key)).length > 100
							? `${at(row, key).substring(1,100)}...`
							: at(row, key)) || '--' }}
					</div>
				</slot>
			</template>

			<template
				slot="[phone]"
				slot-scope="{ item }"
			>
				<span
					v-if="item.phone"
				>
					{{ item.phone }}
				</span>
				<span v-else>
					--
				</span>
			</template>

			<template
				slot="actions"
				slot-scope="{ item }"
			>
				<div
					v-if="hasCondensedActions"
					class="action-icons"
				>
					<div class="dropdown">
						<i
							id="dropdownMenuButton"
							v-b-tooltip.hover
							class="edit-icon icon-more-vertical clickable"
							:title="'Mais ações'"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						/>

						<div class="dropdown-menu">
							<span
								v-for="action in condensedActions"
								:key="action"
							>
								<a
									v-if="!((item.fancy_status === invalidActionStatus) && (action === 'Excluir'))"
									class="dropdown-item"
									href="#"
									@click="$emit('action', [item], translateEmitModes(action))"
								>
									{{ action }}
								</a>
							</span>
						</div>
					</div>
				</div>
				<div
					v-else
					class="action-icons"
				>
					<i
						v-b-tooltip.hover
						class="edit-icon icon-edit-2 clickable"
						:title="'Editar ' + item.fancy_type"
						@click="$emit('action', item, 'edit')"
					/>
					<i
						v-if="!item.is_being_used"
						v-b-tooltip.hover
						class="icon-trash clickable"
						:title="'Excluir ' + item.fancy_type"
						@click="$emit('action', item, 'delete')"
					/>
					<i
						v-if="item.is_being_used && item.is_locked"
						v-b-tooltip.hover
						class="icon-unlock clickable"
						:title="'Ativar ' + item.fancy_type"
						@click="$emit('action', item, 'unlock')"
					/>
					<i
						v-if="item.is_being_used && !item.is_locked"
						v-b-tooltip.hover
						class="icon-lock clickable"
						:title="'Desativar ' + item.fancy_type"
						@click="$emit('action', item, 'lock')"
					/>
				</div>
			</template>
		</b-table>
		<sys-pagination
			v-if="filteredItems.length > perPage"
			v-model="currentPage"
			:total-rows="filteredItems.length"
			:per-page="perPage"
			:style="paginationStyle"
			class="mb-4"
			:default-index="currentPage - 1"
			:default-value="currentPage"
		/>
	</div>
</template>

<script>

export default {
	props: {
		tableFields: {
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
		hover: {
			type: Boolean,
			default: true,
			description: '',
		},
		perPage: {
			type: Number,
			default: 5,
		},
		emptyText: {
			type: String,
			default: null,
		},
		emptyFilteredText: {
			type: String,
			default: 'Não foram encontrados resultados para o filtro aplicado.',
		},
		showAddButton: {
			type: Boolean,
			default: false,
		},
		addButtonText: {
			type: String,
			default: 'Adicionar novo',
		},
		filterButtonText: {
			type: String,
			default: 'Filtrar',
		},
		filterPlaceholder: {
			type: String,
			default: '',
		},
		hasCondensedActions: {
			type: Boolean,
			default: false,
		},
		condensedActions: {
			type: Array,
			default: () => [],
		},
		rowButtonLabel: {
			type: String,
			default: '',
		},
		invalidActionStatus: {
			type: String,
			default: '',
		},
		filters: {
			type: Object,
			default: () => {},
		},
		showFilterButton: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			selectedItems: [],
			isAllSelected: false,
			xItems: [],
			filteredItems: [],
			currentPage: 1,
			storeCurrentPage: 1,
			textFilter: '',
			selected: false,
			filtersList: this.filters,
		};
	},

	computed: {
		computedImagePath() {
			let path = '../../../images/';
			path += this.noItemImage;
			return path;
		},

		paginationStyle() {
			let computed_style = '';
			const checkSelecteds = this.filteredItems.some(item => item.isSelected === true);

			if (checkSelecteds) {
				computed_style = 'margin-top: 50px';
			} else {
				computed_style = '';
			}

			return computed_style;
		},
	},

	watch: {
		filteredItems(newValue) {
			if (newValue.length === this.xItems.length) {
				this.currentPage = this.storeCurrentPage;
				this.storeCurrentPage = 1;
			}
		},

		items() {
			this.xItems = this.items.map(item => ({
				...item,
				isSelected: this.selectedItems.indexOf(item.id) > -1,
				rowVariant: item.isSelected === false ? '- text-muted font-italic' : item.rowVariant,
			}));
		},

		xItems() {
			this.filteredItems = this.xItems;
		},

		filter(newValue, oldValue) {
			if (oldValue.length !== newValue.length) {
				this.currentPage = 1;
			}
		},
	},

	created() {
		this.xItems = this.items.map(item => ({
			...item,
			rowVariant: item.isSelected === false ? '- text-muted font-italic' : item.rowVariant,
		}));
	},

	methods: {

		at(object, key) {
			return _.at(object, key)[0] || '';
		},

		handleFiltered(items) {
			if (this.currentPage !== 1) {
				this.storeCurrentPage = this.currentPage;
			}
			this.currentPage = 1;
			this.filteredItems = items;
			return this.$emit('filtered', items);
		},

		cleanTextFilter() {
			this.textFilter = '';
		},

		hadleRowSelection(value) {
			this.changeSelection(value);
			this.$emit('item-selected', value);
		},

		changeSelection(value) {
			value.isSelected = !value.isSelected;
			value._rowVariant = value.isSelected === true ? 'primary' : '';
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

		translateEmitModes(action) {
			let translatedEmitName = '';

			switch (action) {
				case 'Editar':
					translatedEmitName = 'edit';
					break;
				case 'Duplicar':
					translatedEmitName = 'duplicate';
					break;
				case 'Excluir':
					translatedEmitName = 'delete';
					break;
				case 'Consultar extrato':
					translatedEmitName = 'check-statement';
					break;
				default:
					break;
			}

			return translatedEmitName;
		},

		cleanFilters() {
			this.$emit('refetch-billings', {});
		},

		removeFilter(filter, property_name) {
			delete this.filters[property_name];
			this.$emit('refetch-billings', this.filters);
		},
	},
};
</script>
