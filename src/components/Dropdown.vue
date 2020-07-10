<template>
	<div id="dropdown">
		<multiselect
			v-bind="$attrs"
			v-model="selectedValue"
			select-label=''
			deselect-label=''
			selected-label=''
			:close-on-select="false"
			:multiple="true"
			:taggable="true"
			:clear-on-select="false"
			:searchable="false"
			@select="selectItem"
			@remove="selectItem"
		>
			<template
				slot="option"
				slot-scope="props"
			>
				<div
					class="option__desc"
				>
					<span class="option__title">
						<span class="d-flex align-items-center">
							<span class="checkbox-container">
								<input
									v-model="props.option.is_selected"
									type="checkbox"
									:id="`checkbox-${props.option.title}`"
									:name="`checkbox-${props.option.title}`"
									:value="true"
									class="mr-2 custom-checkbox"
								>
							</span>

							{{ props.option.title }}

						</span>
					</span>
				</div>
			</template>
		</multiselect>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedValue: this.$attrs.value,
		}
	},

	methods: {
		selectItem (tag) {
			tag.is_selected = !tag.is_selected;
		},
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css" />
<style>
#dropdown .multiselect__option--highlight {
	background: #F5F6F8;
	outline: none;
	color: #142032;
}

#dropdown .custom-checkbox {
    width: 16px;
    height: 16px;
}

#dropdown .multiselect__tag {
	background: #e9eef1;
	color: #142032;
	border: 1px solid #ced4da;
}

#dropdown .multiselect__tag-icon:after{
	color: #4F606F;
}

#dropdown .multiselect__tag-icon:focus,
#dropdown .multiselect__tag-icon:hover {
	background: #d1d9e9;
	color: #4F606F;
}

#dropdown .multiselect__tag-icon:focus:after,
#dropdown .multiselect__tag-icon:hover:after {
	color: #4F606F;
}

#dropdown .multiselect__option--selected.multiselect__option--highlight {
	background: #ffffff;
	color: #142032;
}
#dropdown .multiselect__option--selected.multiselect__option--highlight:after {
	background: #ffffff;
	color: #142032;
}

#dropdown .multiselect__option--selected {
	background: #ffffff;
	color: #142032;
	font-weight: 600;
}

#dropdown .multiselect--disabled {
  background: transparent;
}

#dropdown .multiselect--disabled .multiselect__tags {
	background: #e9eef1 !important;
}
</style>
