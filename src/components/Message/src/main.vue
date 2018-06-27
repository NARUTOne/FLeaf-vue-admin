<template>
  <transition name="fl-message-fade" @enter="handleEnter" @leave="handleLeave">
    <div class="fl-message">
      <div :class="FLMclass">
        <Icon :type="type" class="fl-message-icon"></Icon>
        <slot>
          <p v-if="!dangerouslyUseHTMLString" class="fl-message__content">{{ message }}</p>
          <p v-else v-html="message" class="fl-message__content"></p>
        </slot>
        <Icon type="ios-close-empty" class="fl-message-close" v-show="closable" @click="close"></Icon>
      </div>
    </div>
  </transition>
</template>

<script>
import {Icon} from 'iview';

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
    Icon
  },
  data () {
    return {
      type: 'info',
      closable: false
    };
  },
  computed: {
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
  methods: {
    close () {

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

