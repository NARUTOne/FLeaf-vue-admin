<template>
  <div class="context-menu" :style="eleStyle" v-show="show" @mousedown.stop @contextmenu.prevent>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VueContextMenu',
  props: {
    target: null,
    show: Boolean
  },
  data () {
    return {
      preStyle: {},
      binded: false,
      triggerShowFn: () => {},
      triggerHideFn: () => {},
      x: null,
      y: null,
    };
  },
  mounted () {
    this.bindEvents();
  },
  computed: {
    eleStyle () {
      return Object.assign({}, this.style || {}, this.preStyle);
    }
  },
  watch: {
    show (show) {
      if (show) {
        this.bindHideEvents();
      } else {
        this.unbindHideEvents();
      }
    },
    target () {
      this.bindEvents();
    }
  },
  methods: {
    bindEvents () {
      this.$nextTick(() => {
        if (!this.target || this.binded) return;
        this.triggerShowFn = this.contextMenuHandler.bind(this);
        this.target.addEventListener('contextmenu', this.triggerShowFn);
        this.binded = true;
      });
    },
    // 取消绑定事件
    unbindEvents () {
      if (!this.target) return;
      this.target.removeEventListener('contextmenu', this.triggerShowFn);
    },
    // 绑定隐藏菜单事件
    bindHideEvents () {
      this.triggerHideFn = this.clickDocumentHandler.bind(this);
      document.addEventListener('mousedown', this.triggerHideFn);
      document.addEventListener('mousewheel', this.triggerHideFn);
    },
    // 取消绑定隐藏菜单事件
    unbindHideEvents () {
      document.removeEventListener('mousedown', this.triggerHideFn);
      document.removeEventListener('mousewheel', this.triggerHideFn);
    },
    // 鼠标按压事件处理器
    clickDocumentHandler (e) {
      e.stopPropagation();
      this.$emit('show-change', false);
    },
    // 右键事件事件处理
    contextMenuHandler (e) {
      this.x = e.clientX;
      this.y = e.clientY;
      this.layout();
      this.$emit('show-change', true);
      e.preventDefault();
    },
    // 布局
    layout () {
      this.preStyle = {
        left: this.x + 'px',
        top: this.y + 'px'
      };
    }
  }
};
</script>

<style>
  .context-menu {
    position: fixed;
    display: block;
    background-color: #fff;
    padding: 8px;
    box-shadow: 3px 5px 6px rgba(0, 0, 0, 0.28);
  }
</style>
