<template>
	 <b-nav
	 	class="px-2"
		:style="styleVariables"
	 >
		<b-nav-item
			v-for="(item, index) in items"
			:id="getElementKey(item, index)"
			:key="getElementKey(item, index)"
			:active="isActive(item)"
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
			description: 'Uma lista de items que serão exibidos',
			required: true,
		},
		oldSchool: {
			type: Boolean,
			default: false,
			description: 'Define o modo de exibição/sistema de cores do menu',
		},
		activeItem:  {
			type: Object,
			default: () => {},
			description: 'Item ativo no menu',
			required: true,
		},
	},

	data() {
		return {
			internalActiveItem: this.activeItem,
		}
	},

	computed: {
		styleVariables() {
			if(this.oldSchool) {
				return {
					'--active-color': 'rgb(58, 223, 124)',
					'--active-color-opacity': 'rgb(90, 90, 90)',
					'--active-text-color': 'rgb(255, 255, 255)',
					'--text-color': 'rgb(208, 210, 213)',
					'--background-color': 'rgb(68, 68, 68)',
				};
			}

			return {
				'--active-color': 'rgb(40, 90, 185)',
				'--active-color-opacity': 'rgba(40, 90, 185, 0.05)',
				'--active-text-color': 'rgb(20, 32, 50)',
				'--text-color': 'rgb(106, 117, 128)',
				'--background-color': 'linear-gradient(0.93deg, #FFFFFF 16.45%, #F1F5FB 105.67%)',
			};
		},
	},

	methods: {
		handleClick(item) {
			this.internalActiveItem = item;
			this.$emit('click', this.internalActiveItem);
		},

		isActive(item) {
			return Object.keys(this.internalActiveItem).length > 0 ? this.internalActiveItem.path === item.path : false;
		},

		getElementKey(item, index) {
			return `${item.label.replace(/\s/g, '')}${index}`;
		}
	}
};
</script>
<style>
	a {
		outline: none;
	}
	.nav {
		background: var(--background-color);
	}

	.nav-link {
		color: var(--text-color);
		padding: 8px;
	}

	.nav-link:hover {
		color: var(--active-text-color);
	}

	.active {
		border-bottom: 4px solid var(--active-color);
		background: var(--active-color-opacity);
		border-radius: 4px  4px 0px 0px;
		color: var(--active-text-color);
	}

	.active:hover {
		color:var(--active-text-color);
	}
</style>
