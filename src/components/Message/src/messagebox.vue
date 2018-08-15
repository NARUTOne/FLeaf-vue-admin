<template>
  <div class="flv-message-box" :style="styles">
    <Message 
      v-for="(message, i) in messages"
      :key="message.name"
      :type="message.type"
      :message="message.message"
      :duration="message.duration"
      :render="message.render"
      :closable="message.closable"
      :name="message.name"
      :on-close="message.onClose"
      :style="message.style"
    ></Message>
  </div>
</template>

<script>
import Message from './message.vue';

let seed = 0;
const now = Date.now();

function getMName () {
  return 'flvMessage' + now + '_' + (seed++);
}

export default {
  name: 'MessageBox',
  components: {Message},
  props: {
    className: {
      type: String
    },
    styles: {
      type: Object,
      default: function () {
        return {
          top: '65px',
          left: '50%'
        };
      }
    }
  },
  data () {
    return {
      messages: []
    };
  },
  computed: {
    classess () {
      return [
        'flv-message-box',
        {
          [`${this.className}`]: !!this.className
        }
      ];
    }
  },
  methods: {
    add (message) {
      const name = message.name || getMName();
      const _message = Object.assign({
        styles: {
          right: '50%'
        },
        message: '',
        duration: 3000,
        closable: false,
        filterRepeat: false,
        name: name
      }, message);
      // console.log(_message);
      if (_message.filterRepeat) {
        this.filterRepeat(_message);
      } else {
        this.messages.push(_message);
      }
    },
    filterRepeat (_message) {
      const some = this.messages.find(item => item.message === _message.message);
      if (!some) {
        this.messages.push(_message);
      }
    },
    close (name) {
      const messages = this.messages;
      for (let i = 0; i < messages.length; i++) {
        if (messages[i].name === name) {
          this.messages.splice(i, 1);
          break;
        }
      }
    },
    classAll () {
      this.messages = [];
    }
  }
};
</script>

<style lang="less" scoped>
.flv-message-box {
  font-size: 12px;
  position: fixed;
  z-index: 1010;
  width: 100%;
  top: 16px;
  left: 0;
  pointer-events: none;
}
</style>

