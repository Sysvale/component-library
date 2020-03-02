<template>
	<div class="pagination-container">
		<b-button-group>
			<b-button
				v-for="page in pages"
				:id="'tab'+page.index"
				:key="page.index"
				class="pagination-button"
				:pressed="selectedIndex == page.index"
				@click="handleClick(page)"
			>
				{{ page.value }}
			</b-button>
		</b-button-group>
	</div>
</template>

<script>

export default {
	props: {
		perPage: {
			type: Number,
			default: 5,
		},
		totalRows: {
			type: Number,
			default: 0,
		},
		defaultIndex: {
			type: Number,
			default: 0,
		},
		defaultValue: {
			type: Number,
			default: 1,
		},
	},

	data() {
		return {
			pressed: false,
			selectedIndex: 0,
			selectedValue: 1,
			pages: [],
		};
	},

	computed: {
		pageCount() {
			return Math.ceil(this.totalRows / this.perPage);
		},
	},

	watch: {
		totalRows() {
			this.pages = this.handlePages();
		},

		perPage() {
			this.pages = this.handlePages();
		}
	},

	beforeMount() {
		this.pages = this.handlePages();
		this.selectedIndex = this.defaultIndex;
		this.selectedValue = this.defaultValue;
	},

	methods: {
		handleClick(page) {
			if (page.value !== '...') {
				this.selectedValue = page.value;
				this.selectedIndex = page.index;
				this.pages = this.handlePages();
				this.pressed = true;
				this.$emit('input', page.index + 1);
			}
		},

		handlePages() {
			const pages = [];
			const pageNumber = (this.pageCount < 15) ? this.pageCount : 15;
			for (let i = 0; i < pageNumber; i += 1) {
				pages[i] = {
					index: i,
					value: i + 1,
				};
				if (pages[i].value === this.selectedValue) {
					this.selectedIndex = pages[i].index;
				}
			}
			if (this.pageCount > 15) {
				if (this.selectedValue > this.pageCount - 8) {
					for (let i = 0; i < 15; i += 1) {
						pages[i] = {
							index: i,
							value: this.pageCount - 14 + i,
						};
						if (pages[i].value === this.selectedValue) {
							this.selectedIndex = pages[i].index;
						}
					}
					pages[1] = {
						index: 1,
						value: '...',
					};
				} else if (this.selectedValue <= 8) {
					pages[13] = {
						index: 13,
						value: '...',
					};
				} else {
					for (let i = 2; i < 7; i += 1) {
						pages[i] = {
							index: i,
							value: this.selectedValue - 7 + i,
						};
					}
					for (let i = 8; i < 14; i += 1) {
						pages[i] = {
							index: i,
							value: this.selectedValue + i - 7,
						};
					}
					this.selectedIndex = 7;
					pages[7] = {
						index: 7,
						value: this.selectedValue,
					};
					pages[1] = {
						index: 1,
						value: '...',
					};
					pages[13] = {
						index: 13,
						value: '...',
					};
				}
				pages[0] = {
					index: 0,
					value: 1,
				};
				pages[14] = {
					index: 14,
					value: this.pageCount,
				};
			}
			return pages;
		},
	},
};
</script>

<style>
.pagination-container {
	display: flex;
	justify-content: center;
	align-items: center;
}

.pagination-button {
	background: transparent;
	font-weight: 300;
	min-width: 42px;
	color: #707070;
	border-color: #b8b8b8;
	box-shadow: none !important;
}

.pagination-button:hover {
	background-color: #08b2e3 !important;
	border-color: #08b2e3 !important;
	color: white;
}

.pagination-button:active {
	background-color: #08b2e3 !important;
	border-color: #08b2e3 !important;
	color: white;
}
</style>
