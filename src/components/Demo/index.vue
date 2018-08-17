<template>
  <div :class="classes">
    <div class="demo-header clear-float">
      <div class="left demo-header-circles">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
      </div>
      <div class="left t-center demo-header-content">
        <slot name="header"></slot>
      </div>
    </div>
    <div class="demo-body">
      <slot name="body"></slot>
    </div>
    <div class="demo-text-hr">
      <span class="default-color">简单随记</span>
    </div>
    <div class="demo-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  props: {
    dark: Boolean
  },
  computed: {
    classes () {
      return [
        'flv-demo',
        this.dark ? 'flv-demo-dark' : 'flv-demo'
      ];
    }
  }
};
</script>

<style lang="less" scoped>
  @import '~utils/style/variables.less';
  .flv-demo-dark {
    background: @flv-dark;
    color: #fff;
  }
  .flv-demo-light {
    background: #fff;
  }
  .flv-demo {    
    border-radius: 3px;
    font-size: 14px;
    border: 1px solid #e9e9e9;
    position: relative;
    -webkit-transition: all .3s;
    transition: all .3s;
    &:hover {
      box-shadow: 2px 3px 6px rgba(0, 0, 0, .2);
      border-color: transparent;
    }
    .demo-header {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #e9e9e9;
      border-radius: 2px 2px 0 0;
      zoom: 1;
      margin-bottom: -1px;
      font-size: 16px;
      .demo-header-circles {
        width: 120px;
        padding: 0 16px;
        span {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-left: 8px;
        }
        .red {
          background-color: #ff5f56;
        }
        .yellow {
          background-color: #ffbd2e;
        }
        .green {
          background-color: #27c93f;
        }
      }
      .demo-header-content {
        width: calc(~'100% - 120px');
      }
    }
    .demo-body, .demo-footer {
      padding: 8px;
      zoom: 1;
    }
    .demo-text-hr {
      position: relative;
      margin: 8px 0;
      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: #eee;
        position: absolute;
        top: 10px;
        left: 0;
      }
      span {
        display: inline-block;
        background: #fff;
        padding: 0 5px 0 8px;
        position: relative;
        margin-left: 30px;
        font-size: 14px;
      }
    }
  }
</style>

