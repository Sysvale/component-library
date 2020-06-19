<template>
	 <b-nav
	 	class="px-2"
	 >
		<b-nav-item
			v-for="item in computedItems"
			:key="item.label"
			:active="activeItem.path === item.path"
			class="mr-4 mt-2"
			@click="handleClick(item)"
		>
			{{ item.label }}
		</b-nav-item>
	</b-nav>
</template>

<script>
import { XIcon } from 'vue-feather-icons'
export default {
	components: {
		XIcon,
	},

	props: {
		items: {
			type: Array,
			default: () => [],
			desciption: 'Lorem ipsum',
			required: true,
		},
	},

	data() {
		return {
			activeItem: this.items[0],
		};
	},

	computed: {
		computedItems() {
			let count = 0;
			return this.items.map((item, index) => {
				if(item.active) {
					count = count + 1;
				}
				if(count > 0 && index > 0) {
					delete item.active;
				}
				return item;
			});
		}
	},

	methods: {
		handleClick(item) {
			this.activeItem = item;
			this.$emit('click', this.activeItem);
		}
	}
};
</script>
<style>
	.nav {
		background: linear-gradient(0.93deg, #FFFFFF 16.45%, #F1F5FB 105.67%);
	}

	.nav-link {
		color: #6A7580;
		padding: 8px;
	}

	.nav-link:hover {
		color: #142032;
	}

	.active {
		border-bottom: 4px solid rgb(40, 90, 185);
		background: rgb(40, 90, 185, 0.05);
		border-radius: 4px  4px 0px 0px;
		color: #142032;
	}

	.active:hover {
		color:#142032;
	}
</style>
