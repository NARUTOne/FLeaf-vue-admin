<template>
  <div class="components-collapse">
    <PageDemo>
			<template slot='page-title'>FireLeaf-Vue 🍂 Components</template>
			<template slot="page-quote">
				类iview-Collapse 组件&nbsp;
				<a href="https://www.iviewui.com/components/collapse" target="_blank">iview Collapse</a>
			</template>
			<template slot="page-desc">
        <Row :gutter="8" class-name="margin-b-1">
          <Col :md="12" :xs="24">
            <Demo>
              <span slot="header">CollapseBox-basic</span>
              <div slot="body">
                <CollapseBox v-model="actives1">
                  <PartBox name="1">
                    <p slot="header"></p>史蒂夫·乔布斯
                    <p >史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                  </PartBox>
                  <PartBox name="2">
                    <p slot="header"></p>斯蒂夫·盖瑞·沃兹尼亚克
                    <p>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                  </PartBox>
                  <PartBox name="3">
                    <p slot="header">乔纳森·伊夫</p>
                    <p>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                  </PartBox>
                </CollapseBox>
              </div>
              <div slot="footer">
                <Doc>
                  <DocLine><code>CollapseBox</code>基本折叠，默认可以同时展开多个面板，可以设置默认展开第几个。</DocLine>
                </Doc>
              </div>
            </Demo>
          </Col>
          <Col :md="12" :xs="24">
            <Demo>
              <span slot="header">CollapseBox-simple</span>
              <div slot="body">
                       
              </div>
              <div slot="footer">
                <Doc>
                  
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
import {Demo, Doc, DocLine, CollapseBox, PartBox} from '@/components/';
import PageDemo from '@/pages/main-components/page-demo';
export default {
  name: 'CMessage',
  components: {Demo, Doc, DocLine, Row, Col, PageDemo, Button, CollapseBox, PartBox},
  data () {
    return {
      actives1: '1'
    };
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>

</style>

