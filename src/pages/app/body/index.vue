<template>
  <Content class="body">
    <slot />
  </Content>
</template>

<script>
  import {Layout} from 'iview';

  const Content = Layout.Content;

  export default {
    name: 'Body',
    components: {
      Content
    }
  };
</script>

<style lang="less" scoped>
  .body {
    display: flex;
    flex-direction: column;
    -webkit-flex-grow:1;
		flex-grow:1;
    padding: 8px;
  }
</style>


