<template>
	<span id="dropdown">
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
								<div class="customCheckbox mr-4">
									<input
										v-model="props.option.is_selected"
										type="checkbox"
										:id="`checkbox-${props.option.title}`"
										:name="`checkbox-${props.option.title}`"
										:value="true"
									/>
									<label
										:for="`checkbox-${props.option.title}`"
										@click="addItemViaCustomCheckbox(props.option)"
										:class="{ checkedCheckboxColor: props.option.is_selected }"
									>
									</label>
								</div>
							</span>

							{{ props.option.title }}

						</span>
					</span>
				</div>
			</template>
		</multiselect>
	</span>
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

		addItemViaCustomCheckbox(option) {
			option.is_selected = !option.is_selected;
			this.selectedValue.push(option);
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

input[type=checkbox] {
	visibility: hidden;
}

.customCheckbox {
	width: 15px;
	position: relative;
	margin-left: -12px;
}

.checkedCheckboxColor {
	background-color: #2959b8 !important;
	border: none !important;
}

.customCheckbox label {
	cursor: pointer;
	position: absolute;
	width: 15px;
	height: 15px;
	top: 0;
	border-radius: 4px;
	border: 0.5px solid #ced4da;
}

.customCheckbox label:after {
	border: 1.5px solid #fff;
	border-top: none;
	border-right: none;
	content: "";
	height: 5px;
	left: 3.1px;
	opacity: 0;
	position: absolute;
	top: 4.4px;
	transform: rotate(-45deg);
	width: 8px;
	border-radius: 0.4px;
}

.customCheckbox input[type=checkbox]:checked + label:after {
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
	filter: alpha(opacity=100);
	opacity: 1;
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
