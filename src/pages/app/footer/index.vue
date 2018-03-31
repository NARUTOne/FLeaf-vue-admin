<template>
  <Footer class="footer">
    <footer>©&nbsp;2018 <span class='default-color'>迷路的缘</span>，<span class='error-color'>火舞的叶</span> Follow Your Heart</footer>
  </Footer>
</template>

<script>
  import {Layout} from 'iview';

  const Footer = Layout.Footer;

  export default {
    name: 'FLFooter',
    components: {
      Footer
    }
  };
</script>

<style lang="less" scoped>
  @import '~utils/style/variables.less';
  .footer {
    padding: 10px;
    line-height: 23px;
    font-size: 14px;
    text-align: center;
    color: @flv-footer-text-color;
    background-color: @flv-footer-bg;
  }
</style>


