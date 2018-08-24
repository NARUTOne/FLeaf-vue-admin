<template>
  <i :class='classes'></i>
</template>

<script>
const prefixCls = 'icon';
const iconCls = 'iconfont';
const FLViconCls = 'flv-icon';

export default {
  name: 'FLIcon',
  props: {
    type: {
      type: String,
      required: true
    },
    htmlClass: String
  },
  computed: {
    classes () {
      return [
        FLViconCls,
        iconCls,
        prefixCls + `-${this.type}`,
        this.htmlClass? this.htmlClass: ''
      ];
    }
  }
};
</script>

<style lang="less" scoped>
@import '~static/icon/iconfont.css';

.flv-icon {
  display: inline-block;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-size: inherit;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: middle;
}
.iconfont {
  font-size: inherit;
}
</style>

