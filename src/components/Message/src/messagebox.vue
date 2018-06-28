<template>
  <div class="">
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
        message: '',
        duration: 3000,
        closable: false,
        name: name
      }, message);
      // console.log(_message);
      this.messages.push(_message);
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

</style>

