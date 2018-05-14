<template>
  <div class="flv-page-demo">
		<h3><slot name="page-title"></slot></h3>
		<div class="flv-page-quote">
			<blockquote><slot name='page-quote'></slot></blockquote>
		</div>
		<div class="flv-page-desc">
			<slot name='page-desc'></slot>
		</div>
		<div class="flv-page-body">
			<slot></slot>
		</div>
  </div>
</template>

<script>
export default {
  name: 'PageDemo'
};
</script>

<style lang="less" scoped>
.flv-page-demo {
	padding-bottom: 16px;
	.flv-page-quote {
		margin-bottom: 16px;
		blockquote {
			padding: 5px 5px 3px 10px;
			line-height: 1.5;
			border-left: 4px solid #ddd;
			color: #999;
		}
	}
	.flv-page-desc {
		line-height: 1.2;
		margin: 8px;
		p {
			text-align: justify;
		}
	}
	.flv-page-body {
		margin: 16px auto;
	}
}
</style>
