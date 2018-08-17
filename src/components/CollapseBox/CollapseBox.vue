<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import {findComponentsDownward} from '../base/utils/assist';
const prefixCls = 'flv-collapse-box';

export default {
  name: 'CollapseBox',
  props: {
    value: {
      type: [Array, String]
    },
    simple: Boolean,
    accordion: Boolean // ? 手风琴
  },
  data () {
    return {
      currentActives: null
    };
  },
  computed: {
    classes () {
      return [
        prefixCls,
        {
          [`${prefixCls}-simple`]: this.simple
        }
      ];
    }
  },
  mounted () {
    this.currentActives = this.value;
    this.setPartChildren();
  },
  watch: {
    value (value) {
      this.currentActives = value;
    },
    currentActives () {
      this.setPartChildren();
    }
  },
  methods: {
    setPartChildren () {
      const activeKey = this.getActiveKey();
      const partChildren = findComponentsDownward(this, 'PartBox');
      partChildren.forEach((child, index) => {
        const name = child.name || index.toString();
        child.isActive = activeKey.indexOf(name) > -1;
        child.index = index;
      });
    },
    getActiveKey () {
      let activeKey = this.currentActives || [];
      const accordion = this.accordion;
      if (!Array.isArray(activeKey)) {
        activeKey = [activeKey];
      }
      if (accordion && activeKey.length > 1) {
        activeKey = [activeKey[0]];
      }
      for (let i = 0; i < activeKey.length; i++) {
        activeKey[i] = activeKey[i].toString();
      }
      return activeKey;
    },
    toggle (data) {
      const name = data.name.toString();
      let newActiveKey = [];
      if (this.accordion) {
        if (!data.isActive) {
          newActiveKey.push(name);
        }
      } else {
        const activeKey = this.getActiveKey();
        const nameIndex = activeKey.indexOf(name);
        if (data.isActive) {
          if (nameIndex > -1) {
            activeKey.splice(nameIndex, 1);
          }
        } else {
          if (nameIndex < 0) {
            activeKey.push(name);
          }
        }
        newActiveKey = activeKey;
      }
      this.currentActives = newActiveKey;
      this.$emit('on-change', newActiveKey);
      this.$emit('input', newActiveKey); // v-model
    }
  }
};
</script>
