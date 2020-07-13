<template>
	<div
		class="d-flex justify-content-end"
	>
		<div
			v-for="(action, i) in actions"
			:key="action.title"
		>
			<transition name="slide-fade">
				<div
					v-if="i <= internalExpandedQuantity - 1"
					class="listItem p-4"
					:class="{ actionItem: i > 0 }"
				>
					<slot name="act" :list="action" />
				</div>
			</transition>
		</div>
		<div
			key="Less"
			v-if="!isBeenShown"
			class="actionItem listItem p-4"
			@click="expandList"
		>
			{{ collapsedActionName }}
		</div>
		<div
			key="moreOrLess"
			v-else
			class="actionItem listItem p-4"
			@click="collapseList"
		>
			{{ expandedActionName }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		actions: {
			type: Array,
			default: () => [],
			description: 'The list of the actions to be displayed.',
			required: true,
		},
		expandedQuantity: {
			type: Number,
			default: 2,
			description: 'The number of items that will be displayed when the component is redered.',
			required: false,
		},
		collapsedActionName: {
			type: String,
			default: 'More actions',
			description: `The name that will be displayed in the last item of the actions list when it's collapsed.`,
			required: false,
		},
		expandedActionName: {
			type: String,
			default: 'Less actions',
			description: `The name that will be displayed in the last item of the actions list when it's expanded.`,
			required: false,
		}
	},
	data() {
		return {
			action: _.cloneDeep(this.actions),
			internalExpandedQuantity: this.expandedQuantity,
			isBeenShown: false,
		}
	},

	methods: {
		expandList() {
			this.internalExpandedQuantity = this.action.length;
			this.isBeenShown = !this.isBeenShown;
		},
		collapseList() {
			this.internalExpandedQuantity = this.expandedQuantity;
			this.isBeenShown = !this.isBeenShown;
		},
	},
}
</script>
<style>
.actionItem {
	border-left: 1px solid black;
}

.listItem {
	padding: 4px;
	cursor: pointer;
	border-radius: 1px;
}

.listItem:hover {
	background-color: burlywood;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .1s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
