<template>
  <div :class="classes">
    <solt></solt>
  </div>
</template>

<script>
const prefixCls = 'flv-collapse-box';

export default {
  name: 'CollapseBox',
  props: {
    actives: {
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
      return [prefixCls];
    }
  },
  mounted () {
    this.currentActives = this.actives;
    this.setPartChildren();
  },
  watch: {
    actives (actives) {
      this.currentActives = actives;
    },
    currentActives () {
      this.setPartChildren();
    }
  },
  methods: {
    setPartChildren () {
      const activeKey = this.getActiveKey();
      this.$children.forEach((child, index) => {
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
