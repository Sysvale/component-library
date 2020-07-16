<template>
	 <div
		v-if="value"
	 	id="overlay"
		tabindex="0"
		@click="shouldCloseOnBackdrop"
	>
		<div
			id="container"
			:class="floatClass"
			@click.stop
		>
			<slot name="close-icon">
				<div
					class="text-right pb-2"
				>
					<x-icon
						id="close-icon"
						@click.stop="$emit('input', !value)"
					/>
				</div>
			</slot>
			<slot/>
		</div>
	</div>
</template>

<script>
import { XIcon } from 'vue-feather-icons';
import { KeyCodes } from '../utils';

export default {
	components: {
		XIcon,
	},
	props: {
		value: {
			type: Boolean,
			default: false,
			description: `
				Prop to control if the SideSheet should be shown or not (usually by v-model)
			`,
		},
		right: {
			type: Boolean,
			default: false,
			description: `
				Prop to define that the element will be shown at right screen side.
			`,
		},
		left: {
			type: Boolean,
			default: false,
			description: `
				Prop to define that the element will be shown at left screen side (right ifs default).
			`,
		},
		noCloseOnBackdrop: {
			type: Boolean,
			default: false,
			description: `
				Prop to define if the element won't be dismissed when backdrop is click.
			`,
		},
		noCloseOnEsc: {
			type: Boolean,
			default: false,
			description: `
				Prop to define if the element won't be dismissed when esc pressed.
			`,
		}
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

	mounted() {
		window.addEventListener('keyup', (ev) => {
				if (ev.keyCode === KeyCodes.ESC) { // esc
					this.shouldCloseOnEsc();
				}
		});
	},

	methods: {
		shouldCloseOnBackdrop() {
			if(!this.noCloseOnBackdrop) {
				this.$emit('input', !this.value);
			}
		},
		shouldCloseOnEsc() {
			if(!this.noCloseOnEsc) {
				this.$emit('input', !this.value);
			}
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
		width: 328px;
		height: 100%;
		padding: 20px;
		border-radius: 0px 0px 0px 0px;
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
