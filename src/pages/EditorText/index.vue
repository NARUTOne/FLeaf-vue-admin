<template>
  <div class="editor-text">
    <PageDemo>
			<template slot='page-title'>富文本 ✏ Tinymce</template>
			<template slot="page-quote">
				<a href="https://www.tiny.cloud/" target="_blank">www.tiny.cloud</a>
			</template>
			<template slot="page-desc">
				<p>
          文档好，功能强，bug少，无外部依赖，大家用了都说好，嗯，没错就是它了。
          <a href="https://segmentfault.com/a/1190000012791569" target="_blank">参考vue项目移植tinymce踩坑</a>
				</p>
			</template>
      <div class="editor-box">
        <mce-editor 
          :config="Config"
          v-model="Value"
          :url="Url"
          :max-size="MaxSize"
          :with-credentials='false'
          @on-ready="onEditorReady"
          @on-destroy="onEditorDestroy"
          @on-upload-success="onEditorUploadComplete"
          @on-upload-fail="onEditorUploadFail"
        ></mce-editor>
      </div>
    </PageDemo>
  </div>
</template>

<script>
import PageDemo from '@/pages/main-components/page-demo';
import {MceEditor} from '@/components/';
export default {
  name: 'EditorText',
  components: {
    PageDemo, MceEditor
  },
  data () {
    return {
      Config: {},
      Value: '',
      Url: '//jsonplaceholder.typicode.com/posts/',
      MaxSize: 10000
    };
  },
  mounted () {
  },
  beforeDestroy () {
   
  },
  methods: {
    onEditorReady () {

    },
    onEditorDestroy () {

    },
    onEditorUploadComplete (data) {
      console.log(data);
    },
    onEditorUploadFail () {

    }
  }
};
</script>
