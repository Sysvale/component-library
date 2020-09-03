<template>
	<span id="s-popover">
		<b-popover
			:class="popoverClasses"
			:target="target"
			:placement="placement"
			triggers="click"
			:offset="internalOffset"
			@show="beforeShow"
		>
			<div ref="popoverElement" id="popover-body">
				<slot />
			</div>
		</b-popover>
	</span>
</template>

<script>
export default {
	data() {
		return {
			internalOffset: this.offset,
		}
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
				Prop to define that the element will be shown at left screen side (right is the default).
			`,
		},
		target: {
			type: String,
			default: null,
			required: true,
		},

		offset: {
			type: String,
			default: '-60%',
		},

		size: {
			type: String,
			default: null,
		}
	},

	watch: {
		target(newTarget) {
			if (!newTarget) {
				return;
			}
			var width = document.getElementById(newTarget).offsetWidth;
			console.log(width);
		}
	},

	computed: {
		placement() {
			return this.right ? 'bottomright' : 'bottomleft';
		},

		maxWidth() {
			return 'max-width: 276px;';
		},

		popoverClasses() {
			return this.size ? ` s-popover-${this.size} ` : '';
		},
	},

	mounted() {
		const popover = document.getElementById('popover-body');
		// const popover = document.querySelectorAll('#s-popover .something');
		console.log(popover);
		console.log(this.$refs.popoverElement);
	},

	methods: {
		beforeShow() {
			const button = document.getElementById(this.target);
			const popover = document.getElementById('popover-elem');
			console.log(this.$refs.popoverElement);
			if (button && popover) {
				const buttonWidth = button.offsetWidth;
				const popoverWidth = popover.offsetWidth;
				console.log(buttonWidth);
				console.log(popoverWidth);
				const factor = this.left ? -1 : 1;
				this.internalOffset = width * factor / 2;
				console.log(this.internalOffset);
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
	max-width: 360px;
}
</style>
