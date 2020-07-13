<template>
	<div
		class="storybook-canvas d-flex"
	>
		<div
			class="docs-container"
		>
			<b-container class="mx-auto my-5">
				<div class="header" id="component-header">
					<small
						class="text-muted"
					>
						COMPONENT
					</small>
					<h1 class="title bold display-3">
						{{ componentDescription.name }}
					</h1>
				</div>

				<span class="my-3 h5 light summary">
					{{ componentDescription.summary }}
				</span>
				<hr style="margin-top: 8px;">
				
				<div id="usage">
					<h5>Use {{ componentDescription.name }} when:</h5>
					<ul>
						<li
							v-for="content in componentDescription.usage.whenToUse"
							:key="content"
						>
							{{ content }}
						</li>
					</ul>

					<br />

					<h5>Don't use {{ componentDescription.name }} when:</h5>
					<ul>
						<li
							v-for="content in componentDescription.usage.whenNotUse"
							:key="content"
						>
							{{ content }}
						</li>
					</ul>

					<div
						v-if="typeof componentDescription.usage.observation !== 'undefined'"
					>
						<h5>Obs.:</h5>
						{{ componentDescription.usage.observation }}
					</div>
				</div>

				<h2 class="heading mt-5 mb-2" id="preview">
					Preview
				</h2>

				<div class="preview-container d-flex flex-column">
					<div class="preview">
						<slot name="component-preview" />
					</div>
					<div
						class="w-100 d-flex justify-content-end"
						@click="showCode"
					>
						<button
							v-b-toggle.exampleOfUse
							class="small m-0 copy-button"
						>
							{{ showCodeButtonText }}
						</button>
					</div>
				</div>

				<div class="info-body">
					<div
						class="summary"
						:v-html="exampleSourceCode"
					/>
					<b-collapse id="exampleOfUse">
						<div class="usage code">
							<pre
								ref="usage"
								class="codeblock"
							>
								<code class="qs">
									{{ exampleSourceCode }}
								</code>
							</pre>
							<div class="d-flex justify-content-end align-self-end">
								<button
									class="small m-0 copy-code"
									@click="copyCode"
								>
									{{ copyCodeButtonText }}
								</button>
							</div>
						</div>
					</b-collapse>

					<div
						v-if="formattedProps.length > 0"
					>
						<h2 class="heading mt-5" id="props">
							Props
						</h2>

						<b-table
							class="mt-2 table-style"
							hover
							outlined
							:no-border-collapse="true"
							:caption-top="false"
							:fixed="true"
							:items="formattedProps"
						/>
					</div>

					<div
						v-if="formattedEvents.length > 0"
					>
						<h2 class="heading mt-5" id="events">
							Events
						</h2>

						<b-table
							class="mt-2 table-style"
							hover
							outlined
							:no-border-collapse="true"
							:caption-top="false"
							:fixed="true"
							:items="formattedEvents"
						/>
					</div>

					<div
						v-if="formattedSlots.length > 0"
					>
						<h2 class="heading mt-5" id="slots">
							Slots
						</h2>

						<b-table
							class="mt-2 table-style"
							hover
							outlined
							:no-border-collapse="true"
							:caption-top="false"
							:fixed="true"
							:items="formattedSlots"
						/>
					</div>
				</div>
			</b-container>
		</div>
		<div
			class="d-flex flex-column mt-5 justify-content-between side-navigation"
		>
			<span
				v-for="(item, index) in navigationItems"
				:key="item"
				class="mt-2"
				:class="activeSection === `${loweredCaseWord(item)}` ? 'active-side-navigation-item' : ''"
				@click="scrollTo(loweredCaseWord(item))"
			>
				<span
					v-if="index > 0"
				>
					{{ item }}
				</span>
				<span
					v-else
				>
					{{ componentDescription.name }}
				</span>
			</span>
		</div>
	</div>
</template>

<script>
import hljs from 'highlight.js';
import marked from 'marked';

export default {
	props: {
		componentData: {
			type: Object,
			required: true,
			default: () => {},
		},
		exampleSourceCode: {
			type: String,
			required: true,
			default: '',
		},
		componentDescription: {
			type: Object,
			required: true,
			default: () => {},
		},
	},

	data() {
		return {
			showCodeButtonText: 'Show code',
			copyCodeButtonText: 'Copy code',
			formattedProps: [],
			formattedEvents: [],
			formattedSlots: [],
			activeSection: 'component-header',
			navigationItems: [
				'Component-header',
				'Usage',
				'Preview',
			],
		};
	},

	computed: {
		summary() {
			if (!this.exampleSourceCode) {
				return '';
			}

			const renderer = new marked.Renderer();
			/* eslint-disable no-unused-expressions */
			renderer.code = (code, lang) => {
				`<pre>
					<code class="hljs">
						${hljs.highlightAuto(code, lang ? [lang] : undefined).value}
					</code>
				</pre>`;
			};

			marked.setOptions({ renderer });
			return marked(this.exampleSourceCode);
		},
	},

	mounted() {
		_.values(this.componentData.props).forEach((item, index) => {
			const formattedProp = {};

			formattedProp.name = _.keys(this.componentData.props)[index];
			formattedProp.type = item.type.name || '--';
			formattedProp.required = item.required || false;
			formattedProp.defaultValue = item.default === false ? false : (item.default || '--');
			formattedProp.description = item.description || '--';

			this.formattedProps.push(formattedProp);

			if (this.formattedProps.length === 1) {
				this.navigationItems.push('Props');
			}
		});

		_.values(this.componentDescription.events).forEach((item, index) => {
			const formattedEvent = {};

			formattedEvent.event = _.keys(this.componentDescription.events)[index];
			formattedEvent.description = item.description || '--';
			formattedEvent.trigger = item.trigger || '--';

			this.formattedEvents.push(formattedEvent);

			if (this.formattedEvents.length === 1) {
				this.navigationItems.push('Events');
			}
		});

		_.values(this.componentDescription.slots).forEach((item, index) => {
			const formattedSlot = {};

			formattedSlot.name = _.keys(this.componentDescription.slots)[index];
			formattedSlot.description = item.description || '--';

			this.formattedSlots.push(formattedSlot);

			if (this.formattedSlots.length === 1) {
				this.navigationItems.push('Slots');
			}
		});

		this.highlight();
		const link = document.createElement('link');

		link.setAttribute('rel', 'stylesheet');
		link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/nord.min.css');
		link.dataset.saviHead = 'true';
		document.head.appendChild(link);
	},

	beforeDestroy() {
		const link = document.head.querySelector('link[data-savi-head]');

		if (link) {
			document.head.removeChild(link);
		}
	},

	methods: {
		scrollTo(id) {
			document.getElementById(id).scrollIntoView({
				behavior: 'smooth'
			});

			this.activeSection = id;
		},

		loweredCaseWord(word) {
			return word.charAt(0).toLowerCase() + word.slice(1);
		},

		highlight() {
			if (!this.$refs.usage) {
				return;
			}

			hljs.highlightBlock(this.$refs.usage, {
				languages: ['html'],
			});
		},

		copyCode() {
			const el = document.createElement('textarea');
			this.copyCodeButtonText = 'Copied';

			el.value = this.exampleSourceCode;
			el.setAttribute('readonly', '');
			el.style.position = 'absolute';
			el.style.left = '-9999px';

			document.body.appendChild(el);
			const selected = document.getSelection().rangeCount > 0
				? document.getSelection().getRangeAt(0)
				: false;

			el.select();
			document.execCommand('copy');
			document.body.removeChild(el);

			if (selected) {
				document.getSelection().removeAllRanges();
				document.getSelection().addRange(selected);
			}
		},

		showCode() {
			setTimeout(() => {
				this.copyCodeButtonText = 'Copy code';
			}, 100);

			this.showCodeButtonText = this.showCodeButtonText === 'Hide Code' ? 'Show Code' : 'Hide Code';
		},
	},
};
</script>

<style>
.storybook-canvas {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	overflow: auto;
	color: #142032;
	background-color: #fdfdfd;
	font-family: 'Muli', sans-serif;
	margin-right: 4px;
	margin-top: 4px;
}

.title {
	margin: 0;
	line-height: 1.1875;
	color: #074fa6;
}

.table-style {
	background-color: #fff;
	border-radius: 12px;
	color: #142032;
}

.code {
	background-color: #2e3440;
	display: flex;
	justify-content: space-between;
}

.copy-code {
	background-color: #20242d;
	color: #f0f0f0;
	border: none;
	border-radius: 4px;
}

th {
	font-weight: 600;
}

.preview-container {
	min-height: 64px;
	border: 1px solid #dee2e6;
	border-radius: 12px;
	background-color: #fff;
	overflow: auto;
}

.preview {
	all: initial;
	display: block;
	position: relative;
	padding: 32px 32px 12px 32px;
	font-family: 'Noto Sans SC', sans-serif;
	font-weight: 300;
	line-height: 1.6;
}

.heading {
	margin: 0;
	font-size: 24px;
	line-height: 1.208;

	font-weight: 500;
}

.summary {
	color: #6A7580;
}

.codeblock {
	margin: 0;
	padding: 8px 16px;
	font-size: 12px;
	align-self: flex-end;
	background-color: #444;
	border-radius: 0px 0px 4px 4px;
}

.copy-button {
	border: 1px solid rgba(0, 0, 0, 0.15);
	border-radius: 3px;
	background-color: #ffffff;
	cursor: pointer;
	font-size: 12.8px;
	padding: 3px 10px;
	margin: 10px;
}

.css-kpzrq4 {
	width: 0 !important;
	height: 0 !important;
}

::-webkit-scrollbar {
	width: 0.4rem;
}

::-webkit-scrollbar-thumb {
	border-radius: 4px;
	background: rgba(111, 118, 131, 0.3);
}

.side-navigation {
	position: fixed;
	right: 0;
	border-left: 1px solid #CED4DA;
	width: 18%;
	padding: 0px 20px 4px 20px;
	color: #6A7580;
	font-size: 14px;
}

.active-side-navigation-item {
	color: #074fa6;
	font-weight: bold;
}

.docs-container {
	width: 80%;
	margin-left: 20px;
}
</style>
