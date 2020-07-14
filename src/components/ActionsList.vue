<template>
	<div
		class="d-flex actionStyle"
		:class="position === 'left' ? 'justify-content-end' : 'justify-content-start'"
	>
		<div
			v-if="position === 'right'"
		>
			<div
				key="less"
				v-if="!isBeenShown && actions.length > expandedQuantity"
				class="actionRightBorder action p-4"
				@click="expandList"
			>
				{{ collapsedActionName }}
			</div>
			<div
				key="moreOrLess"
				v-if="actions.length > expandedQuantity && isBeenShown"
				class="actionRightBorder action p-4"
				@click="collapseList"
			>
				{{ expandedActionName }}
			</div>
		</div>
		<div
			v-for="(action, i) in actions"
			:key="action.title"
		>
			<transition name="slide-fade">
				<div
					v-if="i <= internalExpandedQuantity - 1"
					class="action p-4"
					:class="{ actionLeftBorder: i > 0 }"
					@click="$emit('actionClicked', action)"
				>
					<slot name="action" :list="action" />
				</div>
			</transition>
		</div>
		<div
			v-if="position === 'left'"
		>
			<div
				key="less"
				v-if="!isBeenShown && actions.length > expandedQuantity"
				class="actionLeftBorder action p-4"
				@click="expandList"
			>
				{{ collapsedActionName }}
			</div>
			<div
				key="moreOrLess"
				v-if="actions.length > expandedQuantity && isBeenShown"
				class="actionLeftBorder action p-4"
				@click="collapseList"
			>
				{{ expandedActionName }}
			</div>
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
		},
		position: {
			type: String,
			default: 'left',
			description: `Speficies if the component will be rendered right side or left side.`,
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
.actionLeftBorder {
	border-left: 1px solid #CED4DA;
}

.actionRightBorder {
	border-right: 1px solid #CED4DA;
}

.action {
	padding: 4px;
	cursor: pointer;
	border-radius: 1px;
}

.actionStyle {
	color: #6A7580;
	font-weight: 600;
}

.action:hover {
	background-color: #F8FAFD;
}

.slide-fade-enter-active {
	transition: all .3s ease;
}

.slide-fade-leave-active {
	transition: all .1s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
	transform: translateX(10px);
	opacity: 0;
}
</style>
