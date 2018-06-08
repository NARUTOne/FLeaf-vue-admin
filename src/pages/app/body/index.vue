<template>
  <Content :class="bodyClass">
		<div>
			<slot />
		</div>
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
    > div {
      display: flex;
      flex-direction: column;
      -webkit-flex-grow:1;
      flex-grow:1;
    }
  }
  .body-scroll {
		position: relative;
		> div {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			height: calc(~'100vh - 103px');
			overflow-y: auto;
			overflow-x:hidden; 
		}    
  }
</style>


