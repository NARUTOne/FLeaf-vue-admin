<template>
  <div :class="classes">
    <div :class="classesHeader" @click="handleHeaderClick">
      <Icon type="arrow-right-b" v-show="hideArrow"></Icon>
      <solt name="header"></solt>
    </div>
    <collapse-transition>
      <div :class="contentClasses" v-show="isActive">
        <div :class="boxClasses"><slot name="content"></slot></div>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
import {Icon} from 'iview';
import CollapseTransition  from '@/components/base/components/collapse-transition';

const prefixCls = 'flv-collapse-box';

export default {
  name: 'PartBox',
  components: {Icon, CollapseTransition},
  props: {
    name: String,
    hideArrow: Boolean
  },
  data () {
    return {
      index: 0, // use index for default when name is null
      isActive: false
    };
  },
  computed: {
    classes () {
      return [
        `${prefixCls}-part`,
        {
          [`${prefixCls}-part-active`]: this.isActive
        }
      ];
    },
    classesHeader () {
      return [
        `${prefixCls}-part-header`
      ];
    },
    contentClasses () {
      return `${prefixCls}-content`;
    },
    boxClasses () {
      return `${prefixCls}-content-box`;
    }
  },
  methods: {
    handleHeaderClick () {
      this.toggle();
    },
    toggle () {
      this.$parent.toggle({
        name: this.name || this.index,
        isActive: this.isActive
      });
    }
  }
};
</script>
