<template>
  <div class="components-message">
    <PageDemo>
			<template slot='page-title'>FireLeaf-Vue 🍂 Components</template>
			<template slot="page-quote">
				类iview-Message 组件&nbsp;
				<a href="https://www.iviewui.com/components/message" target="_blank">iview Message</a>
			</template>
			<template slot="page-desc">
        <Row :gutter="8" class-name="margin-b-1">
          <Col :md="12" :xs="24">
            <Demo>
              <span slot="header">Message-basic</span>
              <div slot="body">
                <Button @click="info">info</Button>
                <Button @click="success">success</Button>
                <Button @click="warning">warning</Button>
                <Button @click="error">error</Button>    
                <Button @click="loading">loading</Button>    
              </div>
              <div slot="footer">
                <Doc>
                  <DocLine><code>Message</code>基本提示，默认3s关闭</DocLine>
                </Doc>
              </div>
            </Demo>
          </Col>
          <Col :md="12" :xs="24">
            <Demo>
              <span slot="header">Message-close</span>
              <div slot="body">
                <Button @click="close">close</Button>
                <Button @click="noTime">noTime</Button>           
              </div>
              <div slot="footer">
                <Doc>
                  <DocLine><code>Message config：</code>duration为0 则不关闭</DocLine>
                  <DocLine><code>Message config：</code>closable 显示关闭</DocLine>
                </Doc>
              </div>
            </Demo>
          </Col>
        </Row>
        <Row :gutter="8" class-name="margin-b-1">
          <Col :md="12" :xs="24">
            <Demo>
              <span slot="header">Message-confirm</span>
              <div slot="body">
                <Button @click="renderFunc">render message</Button>
              </div>
              <div slot="footer">
                <Doc>
                  <DocLine><code>Message render</code>自定义描述内容</DocLine>
                </Doc>
              </div>
            </Demo>
          </Col>
          <Col :md="12" :xs="24">
            <Demo>
              <span slot="header">Message-filterRepeat</span>
              <div slot="body">
                <Button @click="renderFilterRepeat">repeat filter</Button>
              </div>
              <div slot="footer">
                <Doc>
                  <DocLine><code>Message repeat filter</code>配置过滤重复</DocLine>
                </Doc>
              </div>
            </Demo>
          </Col>
        </Row>
			</template>
    </PageDemo>
  </div>
</template>

<script>
import {Row, Col, Button} from 'iview';
import {Demo, Doc, DocLine} from '@/components/';
import PageDemo from '@/pages/main-components/page-demo';
export default {
  name: 'CMessage',
  components: {Demo, Doc, DocLine, Row, Col, PageDemo, Button},
  data () {
    return {
      filterRepeat: false
    };
  },
  methods: {
    info () {
      this.$FLVMessage.info('This is a default info tip');
    },
    loading () {
      this.$FLVMessage.loading('This is a loading tip');
    },
    success () {
      this.$FLVMessage.success('This is a success tip');
    },
    warning () {
      this.$FLVMessage.warning('This is a warning tip');
    },
    error () {
      this.$FLVMessage.error('This is an error tip');
    },
    close () {
      this.$FLVMessage.info({
        message: '10S内可关闭message',
        duration: 10000,
        closable: true
      });
    },
    noTime () {
      this.$FLVMessage.info({
        message: '只能手动关闭message',
        duration: 0,
        closable: true
      });
    },
    renderFunc () {
      this.$FLVMessage.info({
        render: () => {
          return (<span>这是<a>render</a>自定义渲染</span>);
        }
      });
    },
    renderFilterRepeat () {
      const bol = !this.filterRepeat;
      this.filterRepeat = bol;
      this.$FLVMessage.config({
        filterRepeat: bol
      });
      this.$FLVMessage.warning(`全局配置过滤重复：${this.filterRepeat ? '是' : '否'}`);
    }
  }
};
</script>
