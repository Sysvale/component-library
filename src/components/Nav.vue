<template>
	 <b-nav
	 	class="px-2"
	 >
		<b-nav-item
			v-for="(item, index) in items"
			:id="getElementKey(item, index)"
			:key="getElementKey(item, index)"
			:active="activeItem.path === item.path"
			class="mr-4 mt-2"
			@click="handleClick(item)"
		>
			{{ item.label }}
		</b-nav-item>
	</b-nav>
</template>

<script>
export default {
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

	methods: {
		handleClick(item) {
			this.activeItem = item;
			this.$emit('click', this.activeItem);
		},
		getElementKey(item, index) {
			return `${item.label.replace(/\s/g, '')}${index}`;
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
