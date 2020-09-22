<template>
	<div
		class="panel-body-content"
	>
		<div
			v-for="(event, index) in history"
			:key="index"
		>
			<div class="event-row">
				<div>
					<p
						class="regular fs-14 text-secondary date-text"
					>
						{{ event.date }}
					</p>
				</div>
				<div
					class="timeline-container"
				>
					<span
						class="event-pin"
					/>
					<div
						v-if="((index + 1) < history.length) && (history.length > 1)"
						class="time-line"
					/>
				</div>
				<div class="event-info-container">
					<div>
						<p
							class="mb-0 event-title regular">
							{{ event.title }}
						</p>
					</div>
					<div class="text-muted fs-14 mt-1">
						{{ event.text }}
					</div>
					<hr
						v-if="(index + 1) < history.length"
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		history: {
			type: Array,
			default: () => [],
			description: 'The array that specifies the events that willbe displayed in the timeline.',
			required: true,
		},
	},
};
</script>
<style>
.panel-body-content {
	padding: 24px;
	overflow: auto;
    max-height: 350px;
	width: 100%;
	scrollbar-color: #CDCDCD #FFFFFF;
	scrollbar-width: thin;
}

.event-title {
	color: #182532;
	font-weight: 600;
}

.event-pin {
	height: 12px;
	width: 11.5px;
	border-radius: 50%;
	background-color: #2EB88D;
    border: 1px solid #2EB88D;
}

.time-line {
	height: 100%;
    width: 1px;
    background-color: #CDCDCD;
}

.timeline-container {
	display: flex;
    flex-direction: column;
	align-items: center;
}

.event-row {
	display: flex;
    justify-content: space-between;
}

.event-info-container {
	width: 70%;
	margin-top: -8px;
}

.panel-body-content::-webkit-scrollbar {
	width: 0.35rem;
}

.panel-body-content::-webkit-scrollbar-thumb {
	border-radius: 4px;
	background: #CDCDCD#FFFFFF
}

.date-text {
	text-transform: Capitalize;
	align-self: flex-end;
	margin-top: -4px;
	margin-bottom: 0px;
}

.text-muted {
	color: #697580;
}
</style>
