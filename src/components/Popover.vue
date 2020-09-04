<template>
	<span id="s-popover">
		<b-popover
			:custom-class="popoverClasses"
			:target="target"
			:placement="placement"
			triggers="click"
			:offset="internalOffset"
		>
			<slot />
		</b-popover>
	</span>
</template>

<script>
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
		alignment: {
			type: String,
			default: 'left',
			description: `
				Prop to define that the element will be shown align to 'right' or 'left'
				relative to target element ('left' is the default).
			`,
		},
		target: {
			type: String,
			default: null,
			description: `
				Prop to define the element that you want to trigger the popover.
			`,
			required: true,
		},
		offset: {
			type: String,
			default: null,
			description: `
				Prop to define the shift center of popover by specified number of pixels.
			`,
		},
		size: {
			type: String,
			default: 'default',
			description: `
				Prop to define the width of the popover (Options: 'xl', 'lg', 'sm', 'default').
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
	},

	mounted() {
		this.calcOffset();
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
	},
};
</script>

<style>
.b-popover .arrow {
	display: none;
}

.b-popover {
	max-width: none;
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
