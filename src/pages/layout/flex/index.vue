<template>
  <div class="layout-flex">
    <Row :gutter="8" class-name="margin-b-1">
      <Col :md="12" :xs="24">
        <Demo>
          <span slot="header">flex-layout</span>
          <div slot="body">
            <FLayout></FLayout>
          </div>
          <div slot="footer">
            <Doc>
              <DocLine>利用<code>flex</code>进行页面布局</DocLine>
              <DocLine type="warn">采用 <code>flex</code> 布局实现，请注意浏览器兼容性问题</DocLine>
            </Doc>
          </div>
        </Demo>
      </Col>
      <Col :md="12" :xs="24">
        <Demo>
          <span slot="header">iview-layout</span>
          <div slot="body">
            <Layout>
              <Header class="default-bg">Header</Header>
              <Layout>
                  <Sider hide-trigger class="success-bg chart-box">Sider</Sider>
                  <Content class="warn-bg chart-box">Content</Content>
              </Layout>
              <Footer class="default-bg">Footer</Footer>
            </Layout>
          </div>
          <div slot="footer">
            <Doc>
              <DocLine>iview下的Layout布局，协助进行页面级整体布局。</DocLine>
            </Doc>
          </div>
        </Demo>
      </Col>
    </Row>
    <Row>
      <Col span="24">
        <Demo>
          <span slot="header">flex-face</span>
          <div slot="body">
            <FPip></FPip>
          </div>
          <div slot="footer">
            <Doc>
              <DocLine>flex 骰子布局</DocLine>
            </Doc>
          </div>
        </Demo>
      </Col>
    </Row>
  </div>
</template>

<script>
import {Demo, Doc, DocLine} from '@/components/';
import {Row, Col, Layout} from 'iview';
import FLayout from './layout';
import FPip from './face';

const {Header, Sider, Content, Footer} = Layout;

export default {
  name: 'LayoutFlex',
  components: {
    Demo, Doc, DocLine, Row, Col, Layout, FLayout, Header, Sider, Content, Footer, FPip
  }
};
</script>

<style lang="less" scoped>

</style>
