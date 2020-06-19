<template>
	 <b-nav>
		<b-nav-item active>Active</b-nav-item>
		<b-nav-item>Link</b-nav-item>
		<b-nav-item>Another Link</b-nav-item>
		<b-nav-item disabled>Disabled</b-nav-item>
	</b-nav>
</template>

<script>
import { XIcon } from 'vue-feather-icons'
export default {
	components: {
		XIcon,
	},
	props: {
		items: {
			type: 'Array',
			default: () => [],
			desciption: 'Lorem ipsum',
			required: true,
		}
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
