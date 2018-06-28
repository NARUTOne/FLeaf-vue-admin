<template>
  <transition name="move-up" @enter="handleEnter" @leave="handleLeave">
    <div class="fl-message">
      <div :class="FLMclass">
        <Icon :type="typeMap" class="fl-message-icon"></Icon>
        <slot>
          <p v-show="message" class="fl-message__content">{{ message }}</p>
          <div v-show="render" class="fl-message__content">
            <RenderDom :render="renderFunc"></RenderDom>
          </div>
        </slot>
        <Icon type="ios-close-empty" class="fl-message-close" v-show="closable" @click="close"></Icon>
      </div>
    </div>
  </transition>
</template>

<script>
import {Icon} from 'iview';
import RenderDom from '@/components/render';

const iconTypes = {
  'info': 'information-circled',
  'success': 'checkmark-circled',
  'warning': 'android-alert',
  'error': 'close-circled',
  'loading': 'load-c'
};

export default {
  name: 'FLMessage',
  components: {
    Icon, RenderDom
  },
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: false
    },
    render: {
      type: Function
    },
    onClose: {
      type: Function
    },
    message: {
      type: String
    },
    duration: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      timer: null
    };
  },
  computed: {
    renderFunc () {
      return this.render || function () {};
    },
    FLMclass () {
      return [
        'fl-message-box',
        this.type ? 'fl-message-' + this.type : ''
      ];
    },
    typeMap () {
      return iconTypes[this.type];
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      if (this.duration !== 0) {
        this.timer = setTimeout(() => {
          this.close();
        }, this.duration);
      }
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    close () {
      this.clearTimer();
      this.onClose && this.onClose();
      this.$parent.close(this.name);
    },
    handleEnter (el) {
      el.style.height = el.scrollHeight + 'px';
    },
    handleLeave (el) {
      if (document.getElementsByClassName('fl-message').length !== 1) {
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    }
  }
};
</script>

<style lang="less" scoped>
 @import 'animation.less';

.fl-message {
  font-size: 12px;
  position: fixed;
  z-index: 1010;
  width: 100%;
  top: 16px;
  left: 0;
  pointer-events: none;
  text-align: center;
  .fl-message-box {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    background: #fff;
    pointer-events: all;
    .fl-message__content {
      margin: 0 16px;
    }
    .fl-message-close {
      cursor: pointer;
    }
  }
}
</style>

