<template>
	<multiselect
		v-model="value"
		v-bind="$attrs"
		placeholder="Fav No Man’s Sky path"
		label="title"
		track-by="title"
		:options="options"
		:option-height="104"
		:custom-label="customLabel"
		:close-on-select="false"
		:show-labels="false"
	>
		<template slot="singleLabel" slot-scope="props">
			<x-icon
				size="0.8x"
				class="m-1"
			/>
			Nome
		</template>
		<template
			slot="option"
			slot-scope="props"
		>
        <div
		  	class="option__desc"
			@click="status = !status"
		>
			<span class="option__title">
				<span class="d-flex">
					<b-form-checkbox
						id="checkbox-1"
						v-model="status"
						name="checkbox-1"
						:value="true"
						:unchecked-value="false"
					></b-form-checkbox>
					{{ props.option.title }}
				</span>
			</span>
		</div>
        </template>
  </multiselect>
</template>

<script>
import { XIcon } from 'vue-feather-icons'
export default {
	components: {
		XIcon,
	},
	inheritAttrs: false,
	props: {
	},

	data() {
		return {
			internalActiveItem: this.activeItem,
			internalActiveParent: this.activeItem,
			value: { title: 'Explorer', desc: 'Discovering new species!', img: 'static/posters/creatures.png' },
			options: [
				{ title: 'Space Pirate', desc: 'More space battles!', img: 'static/posters/fleet.png' },
				{ title: 'Merchant', desc: 'PROFIT!', img: 'static/posters/trading_post.png' },
				{ title: 'Explorer', desc: 'Discovering new species!', img: 'static/posters/creatures.png' },
				{ title: 'Miner', desc: 'We need to go deeper!', img: 'static/posters/resource_lab.png' }
			],
			status: false,
		}
	},
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css" />
