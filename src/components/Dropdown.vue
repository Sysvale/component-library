<template>
<div>
	<multiselect
		v-model="value"
		v-bind="$attrs"
		placeholder="Selecione quantas opções quiser"
		label="title"
		track-by="title"
		:options="options"
		:option-height="104"
		:close-on-select="false"
		:multiple="true"
		tag-placeholder="Add this as new tag"
		:taggable="true"
		@select="selectItem"
		@remove="selectItem"
		selectLabel=''
		:clearOnSelect="false"
		:clear-on-select="false"
		:closeOnSelect="false"
		deselectLabel=''
		selectedLabel=''
		:searchable="false"
	>
		<template
			slot="option"
			slot-scope="props"
		>
		<div
		  	class="option__desc"
		>
			<span class="option__title">
				<span class="d-flex align-self-center align-items-center align-content-center">
					<b-form-checkbox
						id="checkbox-1"
						v-model="props.option.is_selected"
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
</div>
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
			value: [],
			options: [
				{ title: 'Space Pirate', is_selected: false, img: 'static/posters/fleet.png' },
				{ title: 'Merchant', is_selected: false, img: 'static/posters/trading_post.png' },
				{ title: 'Explorer', is_selected: false, img: 'static/posters/creatures.png' },
				{ title: 'Miner', is_selected: false, img: 'static/posters/resource_lab.png' }
			],
			status: false,
		}
	},

	methods: {
		selectItem (newTag) {
			console.log('newTag: ', newTag);
			newTag.is_selected = !newTag.is_selected;
		}
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css" />
<style>
.multiselect__option--highlight {
	background: #F5F6F8;
	outline: none;
	color: #142032;
}

.custom-control-input:checked ~ .custom-control-label::before {
	color: #fff;
	border-color: #285AB5;
	background-color: #285AB5;
}

.multiselect__tag {
	background: #e9eef1;
	color: #142032;
	border: 1px solid #ced4da;
}

	
.multiselect__tag-icon:after{
	color: #4F606F;
}

.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
	background: #d1d9e9;
	color: #4F606F;
}

.multiselect__tag-icon:focus:after,
.multiselect__tag-icon:hover:after {
	color: #4F606F;
}

.multiselect__option--selected.multiselect__option--highlight {
	background: #fff;
	color: #142032;
}
.multiselect__option--selected.multiselect__option--highlight:after {
	background: #fff;
	content: attr(data-deselect);
	color: #142032;
}

.multiselect__option--selected {
	background: #FFF;
	color: #142032;
	font-weight: 600;
}
</style>
