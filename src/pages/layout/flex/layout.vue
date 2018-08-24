<template>
  <div class="flex-layout">
    <div class="page">
			<div class="header default-bg">header</div>
			<div class="body">
        <div class="sider success-bg">sider</div>
        <div class="content warn-bg"> content</div>
      </div>
			<div class="footer default-bg">footer</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'FLayout'
};
</script>

<style lang="less" scoped>
  .flex-layout {
    display: flex;
  }
  .page {
    width: 100%;
    height: 50vh;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 20px;
  }
  .header, .content, .sider {
    padding: 20px;
  }
  .footer {
    padding: 40px 20px;
  }
  .body {
    display: flex;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    flex-direction: row;
  }
  .sider {
    width: 200px;
    flex: 0 0 200;
  }

  .content {
    flex: 1;
  }

</style>

