<template>
  <div class="br-sort-arrow" @click="handleChange">
    <slot name="left-text"></slot>&nbsp;
    <span class="br-sort-icons">
      <Icon type="arrow-up-b" :class="class0" />
      <Icon type="arrow-down-b" :class="class1"  />
    </span>&nbsp;
    <slot name="right-text"></slot>
  </div>
</template>

<script>
import {Icon} from 'iview';

export default {
  name: "SortArrow",
  components: {Icon},
  props: {
    activeIndex: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      currentActiveIndex: this.activeIndex
    };
  },
  computed: {
    class0 () {
      return !this.currentActiveIndex ? 'active' : '';
    },
    class1 () {
      return !this.currentActiveIndex ? '' : 'active';
    }
  },
  methods: {
    handleChange () {
      this.currentActiveIndex = !this.currentActiveIndex ? 1 : 0;
      this.$emit('on-change', this.currentActiveIndex);
    }
  }
};
</script>

<style lang="less" scoped>
.br-sort-arrow {
  user-select: none;
  cursor: pointer;
  .br-sort-icons {
    display: inline-block;
    width: 9px;
    height: 12px;
    margin-left: 4px;
    margin-top: -1px;
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    position: relative;
  }
  i {
    display: block;
    height: 6px;
    line-height: 6px;
    overflow: hidden;
    position: absolute;
    color: #bbbec4;
    transition: color .2s ease-in-out;
    &:first-child {
      top: 0;
    }
    &:last-child {
      bottom: 0;
    }
  }
  i.active {
    color: #2d8cf0;
  }
}
</style>
