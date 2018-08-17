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
                <CollapseBox v-model="actives1" accordion>
                  <PartBox name="1">
                    <p slot="header">史蒂夫·乔布斯</p>
                    <p >史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                  </PartBox>
                  <PartBox name="2" hideArrow>
                    <p slot="header">斯蒂夫·盖瑞·沃兹尼亚克</p>
                    <p>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                  </PartBox>
                  <PartBox name="3">
                    <p slot="header">乔纳森·伊夫</p>
                    <p>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                  </PartBox>
                  <PartBox name="4" >
                    <p>iPhone，是美国苹果公司研发的智能手机，它搭载iOS操作系统。第一代iPhone于2007年1月9日由苹果公司前首席执行官史蒂夫·乔布斯发布，并在2007年6月29日正式发售。</p>
                  </PartBox>
                </CollapseBox>
              </div>
              <div slot="footer">
                <Doc>
                  <DocLine><code>CollapseBox</code>基本折叠，默认可以同时展开多个面板，可以设置默认展开第几个。</DocLine>
                  <DocLine><code>CollapseBox</code>手风琴模式，设置<code>accordion</code>。</DocLine>
                  <DocLine><code>PartBox</code>隐藏箭头，设置 <code>hideArrow</code></DocLine>
                </Doc>
              </div>
            </Demo>
          </Col>
          <Col :md="12" :xs="24">
            <Demo>
              <span slot="header">CollapseBox-simple</span>
              <div slot="body">
                <CollapseBox v-model="actives2" simple>
                  <PartBox name="1">
                    <p slot="header">史蒂夫·乔布斯</p>
                    <p >史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                  </PartBox>
                  <PartBox name="2">
                    <p slot="header">斯蒂夫·盖瑞·沃兹尼亚克</p>
                    <p>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                  </PartBox>
                  <PartBox name="3">
                    <p slot="header">乔纳森·伊夫</p>
                    <p>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                  </PartBox>
                  <PartBox name="4" hideHeader>
                    <p><strong class="default-color">隐藏折叠块：</strong>iPhone，是美国苹果公司研发的智能手机，它搭载iOS操作系统。第一代iPhone于2007年1月9日由苹果公司前首席执行官史蒂夫·乔布斯发布，并在2007年6月29日正式发售。</p>
                  </PartBox>
                </CollapseBox>
                <Button type="primary" @click="handleOpenHidePart" :style="{margin: '16px 8px'}">{{ isHidePart ? '隐藏折叠块' : '显示折叠块'}}</Button>
              </div>
              <div slot="footer">
                <Doc>
                  <DocLine><code>CollapseBox</code>简洁模式，设置<code>simple</code>。</DocLine>
                  <DocLine><code>PartBox</code>隐藏头部，设置<code>hideHeader</code>。</DocLine>
                </Doc>
              </div>
            </Demo>
          </Col>
        </Row>
        <div>
          <Demo>
            <span slot="header">CollapseBox-sortArrow-form</span>
            <div slot="body">
              <CollapseBox simple v-model="actives3">
                <div :style="{margin: '16px 8px'}">
                  <SortArrow :activeIndex="activeIndex" @on-change="handleSortChange">
                    <span slot="left">折叠文本</span>
                  </SortArrow>
                </div>
                <PartBox name="0" hideHeader>
                  <CheckboxGroup  v-model="phone" @on-change="handleCheckChange">
                    <Checkbox label="ios">
                        <Icon type="logo-apple"></Icon>
                        <span>IOS</span>
                    </Checkbox>
                    <Checkbox label="android">
                        <Icon type="logo-android"></Icon>
                        <span>Android</span>
                    </Checkbox>
                    <Checkbox label="windows">
                        <Icon type="logo-windows"></Icon>
                        <span>Windows</span>
                    </Checkbox>
                  </CheckboxGroup >
                </PartBox>
                <PartBox name="ios" hideHeader>
                  <p>iPhone，是美国苹果公司研发的智能手机，它搭载iOS操作系统</p>
                </PartBox>
                <PartBox name="android" hideHeader>
                  <p>Android，是美国谷歌公司研发的手机操作系统</p>
                </PartBox>
                <PartBox name="windows" hideHeader>
                  <p>windows，是美国微软公司研发的PC系统</p>
                </PartBox>
              </CollapseBox>
            </div>
            <div slot="footer">
              <Doc>
                <DocLine type="bug">TODO: 业务组件开发</DocLine>
              </Doc>
            </div>
          </Demo>
        </div>
			</template>
    </PageDemo>
  </div>
</template>

<script>
import {Row, Col, Button, CheckboxGroup, Checkbox, Icon} from 'iview';
import {Demo, Doc, DocLine, CollapseBox, PartBox, SortArrow} from '@/components/';
import PageDemo from '@/pages/main-components/page-demo';
export default {
  name: 'CCollapseBox',
  components: {Demo, Doc, DocLine, Row, Col, Icon, PageDemo, Button, CollapseBox, PartBox, SortArrow, CheckboxGroup, Checkbox},
  data () {
    return {
      actives1: '1',
      actives2: ['2', '4'],
      actives3: ['0'],
      phone: [],
      activeIndex: 1
    };
  },
  computed: {
    isHidePart () {
      return this.actives2.indexOf('4') > -1;
    }
  },
  methods: {
    handleOpenHidePart () {
      const actives2 = [...this.actives2];
      if (this.actives2.indexOf('4') > -1) {
        this.actives2 = actives2.filter(item => item !== '4');
      } else {
        this.actives2 = [...actives2, '4'];
      }
    },
    handleSortChange (sort) {
      if (sort) {
        this.phone = [];
        this.actives3 = ['0'];
      } else {
        this.phone = ['ios', 'android', 'windows'];
        this.actives3 = ['0', ...this.phone];
      }
      this.activeIndex = sort;
    },
    handleCheckChange (checks) {
      this.activeIndex = checks.length === 3 ? 0 : 1;
      this.actives3 = ['0', ...checks];
      this.phone = [...checks];
    }
  }
};
</script>

<style lang="less" scoped>

</style>

