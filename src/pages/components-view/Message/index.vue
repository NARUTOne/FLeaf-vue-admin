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
              <span slot="header">CSS grid</span>
              <div slot="body">
                <Button @click="success">Display success prompt</Button>
                <Button @click="warning">Display warning prompt</Button>
                <Button @click="error">Display error prompt</Button>      
              </div>
              <div slot="footer">
                <Doc>
                  <DocLine><code>Message</code>基本提示，默认3s关闭</DocLine>
                </Doc>
              </div>
            </Demo>
          </Col>
          <Col :md="12" :xs="24">
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
  methods: {
    success () {
      this.$FLVMessage.success('This is a success tip');
    },
    warning () {
      this.$FLVMessage.warning('This is a warning tip');
    },
    error () {
      this.$FLVMessage.error('This is an error tip');
    }
  }
};
</script>

<style lang="less" scoped>

</style>

