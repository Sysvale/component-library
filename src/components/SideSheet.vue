<template>
	<span id="side-sheet">
		<transition :name="floatTransition">
			<div
				v-if="value"
				class="overlay"
				tabindex="0"
				@click="shouldCloseOnBackdrop"
			>
				<div
					class="container"
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
		</transition>
	</span>
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
			required: true,
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
				Prop to define that the element will be shown at left screen side (right is the default).
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
				Prop to define if the element won't be dismissed when esc is pressed.
			`,
		}
	},

	computed: {
		floatClass() {
			if (this.left) {
				return 'left';
			}

			return 'right';
		},

		floatTransition() {
			if (this.left) {
				return 'slide-fade-left';
			}

			return 'slide-fade-right';
		}
	},

	watch: {
		value(newValue) {
			if (!newValue) {
				this.dettachKeyupEvent();
				return;
			}
			this.attachKeyupEvent();
		}
	},

	created	() {
		this.attachKeyupEvent();
	},

	beforeDestroy() {
		this.dettachKeyupEvent();
	},

	methods: {
		shouldCloseOnBackdrop() {
			if (!this.noCloseOnBackdrop) {
				this.$emit('input', !this.value);
			}
		},
		shouldCloseOnEsc() {
			if (!this.noCloseOnEsc) {
				this.$emit('input', !this.value);
			}
		},

		keyupListener(ev) {
			if (ev.keyCode === KeyCodes.ESC) { // esc
				this.shouldCloseOnEsc();
			}
		},

		attachKeyupEvent() {
			window.addEventListener('keyup', this.keyupListener);
		},

		dettachKeyupEvent() {
			window.removeEventListener('keyup', this.keyupListener);
		}
	},
};
</script>
<style>
#side-sheet .overlay {
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

#side-sheet .container {
	background: #fff;
	width: 328px;
	height: 100%;
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

.slide-fade-right-enter-active {
	transition: all .4s ease;
}
.slide-fade-right-leave-active {
	transition: all .4s ease;
}
.slide-fade-right-enter, .slide-fade-right-leave-to{
	transform: translateX(8px);
	opacity: 0;
}

.slide-fade-left-enter-active {
	transition: all .4s ease;
}
.slide-fade-left-leave-active {
	transition: all .4s ease;
}
.slide-fade-left-enter, .slide-fade-left-leave-to{
	transform: translateX(-8px);
	opacity: 0;
}
</style>
