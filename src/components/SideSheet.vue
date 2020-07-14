<template>
	 <div
	 	id="overlay"
		v-if="value"
	>
		<div
			id="container"
			:class="floatClass"
		>
			<slot name="close-icon">
				<div
					class="text-right pb-2"
				>
					<x-icon
						id="close-icon"
						@click="$emit('input', !value)"
					/>
				</div>
			</slot>
			<slot/>
		</div>
	</div>
</template>

<script>
import { XIcon } from 'vue-feather-icons';
export default {
	components: {
		XIcon,
	},
	props: {
		value: {
			type: Boolean,
			default: false,
		},
		right: {
			type: Boolean,
			default: false,
		},
		left: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		floatClass() {
			if (this.left) {
				return 'left';
			}
			if (this.right) {
				return 'right';
			}
			return 'right';
		}
	},
};
</script>
<style>
	#overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 9999;
		cursor: pointer;
	}

	#container {
		background: #fff;
		width: 30%;
		height: 100%;
		margin-top: 80px;
		padding: 20px;
		border-radius: 5px;
	}

	#close-icon {
		color: rgb(106, 117, 128, 0.75);
	}

	#close-icon:hover {
		color: rgb(106, 117, 128, 1);
	}

	.right {
		float: right;
	}

	.left {
		float: left;
	}
</style>
