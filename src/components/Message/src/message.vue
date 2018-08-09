<template>
  <transition name="move-up" @enter="handleEnter" @leave="handleLeave">
    <div class="fl-message" :style="styles">
      <div :class="FLMclass">
        <template>
          <div style="display:inline-block;" v-if="type === 'loading'">
            <Spin>
                <Icon :type="typeMap" :class="loadingIconClass"></Icon>
            </Spin>
          </div>
          <Icon v-else :type="typeMap" :class="iconClass"></Icon>
        </template>
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
import {Icon, Spin} from 'iview';
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
    Icon, RenderDom, Spin
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
    },
    styles: {
      type: Object,
      default: function () {
        return {
          right: '50%'
        };
      }
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
        'fl-message-body',
        this.type ? 'fl-message-' + this.type : ''
      ];
    },
    loadingIconClass () {
      return [
        'fl-message-icon',
        'spin-icon-load',
        this.type ? 'fl-message-icon-' + this.type : ''
      ];
    },
    iconClass () {
      return [
        'fl-message-icon',
        this.type ? 'fl-message-icon-' + this.type : ''
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
@import '~utils/style/variables.less';
@import 'animation.less';

.fl-message {
  padding: 8px 0;
  text-align: center;
  .fl-message-body {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    background: #fff;
    pointer-events: all;
    .fl-message-icon {
      font-size: 1.2em;
    }
    .fl-message__content {
      display: inline-block;
      margin: 0 16px;
    }
    .fl-message-close {
      font-size: 16px;
      cursor: pointer;
      &:hover {
        color: @flv-default-color;
      }
    }
  }
}
.fl-message-info, .fl-message-loading {
  border: 2px solid @flv-default-color;
  .fl-message-icon-info, .fl-message-icon-loading {
    color: @flv-default-color;
  }
}

.fl-message-success{
  border: 2px solid @flv-success-color;
  .fl-message-icon-success {
    color: @flv-success-color;
  }
}

.fl-message-warning {
  border: 2px solid @flv-warn-color;
  .fl-message-icon-warning {
    color: @flv-warn-color;
  }
}

.fl-message-error {
  border: 2px solid @flv-error-color;
  .fl-message-icon-error {
    color: @flv-error-color;
  }
}
.spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  to { transform: rotate(360deg); }
}
</style>

