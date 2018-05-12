<template>
  <Content :class="bodyClass">
    <slot />
  </Content>
</template>

<script>
import { mapGetters } from 'vuex';
import {Layout} from 'iview';

const Content = Layout.Content;

export default {
	name: 'Body',
	components: {
		Content
	},
	computed: {
		...mapGetters({
			isFix: 'isFix'
		}),
		bodyClass () {
			return [
				'body',
				this.isFix ? 'body-scroll': ''
			];
		}
	}
};
</script>

<style lang="less" scoped>
  .body {
    display: flex;
    flex-direction: column;
    -webkit-flex-grow:1;
    flex-grow:1;
  }
  .body-scroll {
    height: calc(~'100% - 120px');
    overflow: auto;
  }
</style>


