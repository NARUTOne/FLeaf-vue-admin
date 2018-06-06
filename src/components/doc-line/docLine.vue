<template>
  <div :class="warnClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DocLine',
  props: {
    warn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    warnClass () {
      return [
        'doc-line',
        this.warn? 'doc-warn' : 'doc-default'
      ];
    }
  }
};
</script>

<style lang="less" scoped>
  .doc-line {
    position: relative;
    padding: 8px 16px 8px;
    line-height: 1.2;
    pre {
      display: block;
      font-family: Consolas,Menlo,Courier,monospace;
      font-size: 1em;
      white-space: pre;
    }
    code {
      display: inline-block;
      background: #f7f7f7;
      font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
      margin: 0 3px;
      padding: 1px 5px;
      border-radius: 3px;
      color: #666;
      border: 1px solid #eee;
    }
  }
  .doc-default {
    &::before {
      content: '🔹';
      position: absolute;
      top: 10px;
      left: 0;
      z-index: 9;
    }
  }
  .doc-warn {
    background-color: rgba(236, 117, 113, 0.6);
    &::before {
      content: '🔸';
      position: absolute;
      top: 10px;
      left: 0;
      z-index: 9;
    }
  }
</style>

