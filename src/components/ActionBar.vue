<template>
	<div class="toolbar-container">
		<div
			class="toolbar"
			:class="floatingMode ? 'fixed' : ''"
			:style="bgColor !== '' ? `background-color: ${bgColor}` : ''"
		>
			<slot
				name="description"
			/>

			<slot
				class="px-2 mx-1"
				name="buttons"
			/>

			<div
				v-if="isDismissible"
				class="icon-container ml-2"
				@click="$emit('close', true)"
			>
				<x-icon
					size="0.8x"
					class="m-1"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { XIcon } from 'vue-feather-icons'
export default {
	components: {
    	XIcon,
  	},
	props: {
		floatingMode: {
			type: Boolean,
			default: false,
		},
		isDismissible: {
			type: Boolean,
			default: false,
		},
		bgColor: {
			type: String,
			default: '',
		},
	},
};
</script>
<style>
.toolbar-container {
	width: 100%;
	display: flex;
	justify-content: center;
}

.toolbar {
	border-radius: 8px !important;
	background-color: #30353F;
	bottom: 72px;
	padding: 0.8rem 1rem;
	color: #fff;
	display: flex;
	z-index: 2;
	align-items: center;
}

.fixed {
	position: fixed;
}

.icon-container {
	padding: 2px 4px;
    background-color: #0000002d;
	border-radius: 50%;
	cursor: pointer;
}

.icon-container:hover {
    background-color: #00000041;
}
</style>