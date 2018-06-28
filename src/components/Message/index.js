import MessageBox from './src/index';

const defaults = {
  top: 24,
  duration: 3000
};
const prefixKey = 'flv-message';
let messageInstance = null;
let name = 1;

function getMessageInstance () {
  messageInstance = messageInstance || MessageBox.newInstance({
    styles: {
      top: `${defaults.top}px`
    }
  });

  return messageInstance;
}

function messageFun (message = '', duration = defaults.duration, type, onClose = function () {}, closable = false, render = function () {}) {
  const instance = getMessageInstance();

  instance.message({
    name: `${prefixKey}-${name}`,
    duration: duration,
    styles: {},
    message: message,
    render: render,
    onClose: onClose,
    closable: closable,
    type: type
  });

  // 用于手动消除
  return (function () {
    const target = name++;
    return function () {
      instance.remove(`${prefixKey}${target}`);
    };
  })();
}

export default {
  name: 'Message',

  info (options) {
    return this.message('info', options);
  },
  success (options) {
    return this.message('success', options);
  },
  warning (options) {
    return this.message('warning', options);
  },
  error (options) {
    return this.message('error', options);
  },
  loading (options) {
    return this.message('loading', options);
  },
  message (type, options){
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    return messageFun(options.message, options.duration, type, options.onClose, options.closable, options.render);
  },
  config (options) {
    if (options.top || options.top === 0) {
      defaults.top = options.top;
    }
    if (options.duration || options.duration === 0) {
      defaults.duration = options.duration;
    }
  },
  destroy () {
    const instance = getMessageInstance();
    messageInstance = null;
    instance.destroy(prefixKey);
  }
};
