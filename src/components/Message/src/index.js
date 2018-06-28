import MessageBox from './messagebox.vue';
import Vue from 'vue';

MessageBox.newInstance = properties => {
  const _props = properties || {};

  const Instance = new Vue({
    render (h) {
      return h(MessageBox, {props: _props});
    }
  });

  const messageComponent = Instance.$mount();
  document.body.appendChild(messageComponent.$el);
  const messagebox = Instance.$children[0];

  return {
    message (props) {
      messagebox.add(props);
    },
    remove (name) {
      messagebox.close(name);
    },
    component: messagebox,
    destory (className) { // el className
      messagebox.closeAll();
      setTimeout(function () {
        document.body.removeChild(document.getElementsByClassName(className)[0]);
      }, 500);
    }
  };
};

export default MessageBox;
