<template>
  <div>
    <textarea :id= "Id"></textarea>
  </div>
</template>
<script>
  import '@/utils/zh_CN.js';
  import defaultConfig from './defaultConfig.js';
  export default {
    name: 'MceEditor',
    data () {
      const Id = Date.now();
      return {
        Id: Id,
        Editor: null,
        DefaultConfig: defaultConfig
      };
    },
    props: {
      value: {
        default: '',
        type: String
      },
      config: {
        type: Object,
        default: () => {
          return {
            theme: 'modern',
            height: 300
          };
        }
      },
      url: {
        default: '',
        type: String
      },
      accept: {
        default: 'image/jpeg, image/png',
        type: String
      },
      maxSize: {
        default: 2097152,
        type: Number
      },
      withCredentials: {
        default: false,
        type: Boolean
      }
    },
    mounted () {
      this.init();
    },
    beforeDestroy () {
      // 销毁tinymce
      this.$emit('on-destroy');
      window.tinymce.remove(`#${this.Id}`);
    },
    methods: {
      init () {
        const self = this;
        
        this.Editor = window.tinymce.init({
          // 默认配置
          ...this.DefaultConfig,
          
          // 图片上传
          "images_upload_handler": function (blobInfo, success, failure) {
            if (blobInfo.blob().size > self.maxSize) {
              failure('文件体积过大');
            }
            
            if (self.accept.indexOf(blobInfo.blob().type) > 0) {
              uploadPic();
            } else {
              failure('图片格式错误');
            }
            function uploadPic () {
              const xhr = new XMLHttpRequest();
              const formData = new FormData();
              xhr.withCredentials = self.withCredentials;
              xhr.open('POST', self.url);
              xhr.onload = function () {

                if (xhr.status !== 200) {
                  // 抛出 'on-upload-fail' 钩子
                  self.$emit('on-upload-fail');
                  failure('上传失败: ' + xhr.status);
                  return;
                }

                const json = JSON.parse(xhr.responseText);
                // 抛出 'on-upload-complete' 钩子
                self.$emit('on-upload-success', [
                  json, success, failure
                ]);
              };
              formData.append('file', blobInfo.blob());
              xhr.send(formData);
            }
          },

          // prop内传入的的config
          ...this.config, 
          
          // 挂载的DOM对象
          selector: `#${this.Id}`,
          setup: (editor) => {
            // 抛出 'on-ready' 事件钩子
            editor.on(
              'init', () => {
                self.loading = false;
                self.$emit('on-ready');
                editor.setContent(self.value);
              }
            );
            // 抛出 'input' 事件钩子，同步value数据
            editor.on(
              'input change undo redo', () => {
                self.$emit('input', editor.getContent());
              }
            );
          }
        });
      }
    }
  };
</script>