<template>
	<span id="s-popover">
		<div
			v-if="value"
			class="overlay"
			tabindex="0"
			@click="shouldCloseOnBackdrop"
		>
			<b-popover
				:show.sync="value"
				:custom-class="popoverClasses"
				:target="target"
				:placement="placement"
				triggers=""
				:offset="internalOffset"
			>
				<slot />
			</b-popover>
		</div>
	</span>
</template>

<script>
import { KeyCodes } from '../utils';

export default {
	data() {
		return {
			internalOffset: '-60%',
			sizes: {
				default: 276,
				sm: 180,
				lg: 360,
				xl: 520,
			},
		}
	},

	props: {
		value: {
			type: Boolean,
			default: false,
			description: `
				Controls if the popover should be shown or not (usually by v-model)
			`,
			required: true,
		},
		alignment: {
			type: String,
			default: 'left',
			description: `
				Defines if the popover will be right or left aligned
				relative to target element.
			`,
		},
		target: {
			type: String,
			default: null,
			description: `
				Defines the element that you want to trigger the popover.
			`,
			required: true,
		},
		offset: {
			type: String,
			default: null,
			description: `
				Change the horizontal alignment of the popover by a specified number of pixels.
			`,
		},
		size: {
			type: String,
			default: 'default',
			description: `
				Defines the width of the popover (Options: 'xl', 'lg', 'sm', 'default').
			`,
		},
		noCloseOnBackdrop: {
			type: Boolean,
			default: false,
			description: `
				Defines if the element won't be dismissed when backdrop is click.
			`,
		},
		noCloseOnEsc: {
			type: Boolean,
			default: false,
			description: `
				Defines if the element won't be dismissed when esc is pressed.
			`,
		}
	},

	computed: {
		placement() {
			return this.alignment === 'right' ? 'bottomright' : 'bottomleft';
		},

		popoverClasses() {
			const sizeClass = this.size ? `s-popover-${this.size}` : '';
			return `${sizeClass} s-popover`;
		},
	},

	watch: {
		alignment(newValue) {
			this.alignment = newValue;
			this.calcOffset();
		},
		offset(newValue) {
			this.offset = newValue;
			this.calcOffset();
		},
		value(newValue) {
			if (!newValue) {
				this.detachKeyupEvent();
				return;
			}

			this.attachKeyupEvent();
		},
	},

	mounted() {
		this.calcOffset();
	},

	created	() {
		this.attachKeyupEvent();
	},

	beforeDestroy() {
		this.detachKeyupEvent();
	},

	methods: {
		calcOffset() {
			if (this.offset) {
				this.internalOffset = this.offset;
				return;
			}

			const target = document.getElementById(this.target);
			if (target) {
				const targetWidth = target.offsetWidth;
				const popoverWidth = this.sizes[this.size];
				const factor = this.alignment === 'right' ? 1 : -1;
				this.internalOffset = (popoverWidth - targetWidth) * factor / 2;
			}
		},

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
			if (ev.keyCode === KeyCodes.ESC) {
				this.shouldCloseOnEsc();
			}
		},

		attachKeyupEvent() {
			window.addEventListener('keyup', this.keyupListener);
		},

		detachKeyupEvent() {
			window.removeEventListener('keyup', this.keyupListener);
		}
	},
};
</script>

<style>
#s-popover .overlay {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: transparent;
	z-index: 999;
	cursor: pointer;
}

#s-popover .b-popover .arrow {
	display: none;
}

#s-popover .b-popover {
	max-width: none;
}

.b-popover.s-popover-default {
	width: 276px;
}

.s-popover {
	border: 1px solid #CED4DA;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
}

.b-popover.s-popover-sm {
	width: 180px;
}

.b-popover.s-popover-lg {
	width: 360px;
}

.b-popover.s-popover-xl {
	width: 520px;
}
</style>
