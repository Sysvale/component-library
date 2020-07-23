<template>
	<span id="radioButton">
		<span
			class="radio-button-border"
			@click="checkRadio"
		>
			<input type="radio" id="test1" name="radio-group" :checked="isChecked">
			<label for="test1">Component library</label>
		</span>
	</span>
</template>

<script>
export default {
	data() {
		return {
			isChecked: false
		}
	},

	methods: {
		checkRadio () {	
			this.isChecked = true;
		}
	},
};
</script>
<style>
#radioButton [type="radio"]:checked,
#radioButton [type="radio"]:not(:checked) {
	position: absolute;
	left: -9999px;
}

#radioButton [type="radio"]:checked + label,
#radioButton [type="radio"]:not(:checked) + label
{
	position: relative;
	padding-left: 28px;
	cursor: pointer;
	line-height: 20px;
	display: inline-block;
	color: #4F6070;
}

#radioButton [type="radio"]:checked + label:before,
#radioButton [type="radio"]:not(:checked) + label:before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	width: 20px;
	height: 20px;
	border: 1px solid #6A7580;
	border-radius: 100%;
	background: #fff;
}

#radioButton [type="radio"]:checked + label:after,
#radioButton [type="radio"]:not(:checked) + label:after {
	content: '';
	width: 12px;
	height: 12px;
	background: #285ab9;
	position: absolute;
	top: 4px;
	left: 4px;
	border-radius: 100%;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

#radioButton [type="radio"]:not(:checked) + label:after {
	opacity: 0;
	-webkit-transform: scale(0);
	transform: scale(0);
}

#radioButton [type="radio"]:checked + label:after {
	opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
}

#radioButton .radio-button-border {
	border: 1px solid #CED4DA;
	padding: 12px 16px;
	border-radius: 0.5rem;
	cursor: pointer;
}

#radioButton .radio-button-border:hover {
	background-color: rgba(248, 249, 250, 0.75);
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
}
</style>
