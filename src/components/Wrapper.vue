<template>
	<div class="savi-wrapper">
		<b-container class="mx-auto my-5">
			<div class="header">
				<small
					class="text-muted"
				>
					COMPONENT
				</small>
				<h1 class="title bold display-3">
					{{ componentName }}
				</h1>
			</div>

			<p class="my-3 h5 light">
				{{ componentDescription }}
			</p>
			<hr>

			<h2 class="mt-5 mb-4">
				Usage
			</h2>
			<slot name="usage" />

			<h2 class="mt-5 mb-4">
				Example
			</h2>

			<div class="preview-container d-flex flex-column">
				<div class="preview">
					<slot name="component-preview" />
				</div>
				<div class="w-100 d-flex justify-content-end">
					<button
						v-b-toggle.collapse-2
						class="small m-0 copy-button"
						@click="showCode"
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
				<b-collapse id="collapse-2">
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
				<h2 class="heading mt-5">
					Props table
				</h2>

				<b-table
					class="mt-4 props-table"
					hover
					:fixed="true"
					:no-border-collapse="false"
					:items="formattedProps"
				/>
			</div>
		</b-container>
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
		componentName: {
			type: String,
			required: true,
			default: '',
		},
		componentDescription: {
			type: String,
			required: true,
			default: '',
		},
	},

	data() {
		return {
			showCodeButtonText: 'Show code',
			copyCodeButtonText: 'Copy code',
			formattedProps: [],
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
		console.log('this.componentData: ', this.componentData);
		
		_.values(this.componentData.props).forEach((item, index) => {
			const formattedProp = {};
console.log('ola');

			formattedProp.name = _.keys(this.componentData.props)[index];
			formattedProp.type = item.type.name || '--';
			formattedProp.required = item.required || false;
			formattedProp.defaultValue = item.default || '--';
			formattedProp.description = item.description || '--';

			this.formattedProps.push(formattedProp);
		});

		console.log('this.formattedProps: ', this.formattedProps);
		

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
.savi-wrapper {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	overflow: auto;
	color: rgb(31, 31, 31);
	background-color: #fdfdfd;
	font-family: 'Raleway', sans-serif;
}

.title {
	margin: 0;
	line-height: 1.1875;
	color: #074fa6;
}

.props-table {
	background-color: #fff;
	min-height: 64px;
	border: 1px solid #f0f0f0;
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.067) 0px 0px 0px 1px;
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
	border: 1px solid #f0f0f0;
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.067) 0px 0px 0px 1px;
	background-color: #fff;
}

.preview {
	all: initial;
	display: block;
	position: relative;
	padding: 32px 32px 0px 32px;
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
</style>
