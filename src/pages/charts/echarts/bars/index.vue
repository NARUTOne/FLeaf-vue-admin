<template>
  <div class="echarts-bars">
    <PageDemo>
			<template slot='page-title'>FireLeaf 🍂 Echarts Bars</template>
			<template slot="page-quote">
        条形图&nbsp;<a href="http://echarts.baidu.com/" target="_blank">echarts</a>
			</template>
      <template slot="page-desc">
        封装vue-echarts, 条形图bars示例
      </template>
      <div class="bars-body">
        <Row :gutter="8" class-name="margin-b-2">
          <Col :lg="12" :md="12" :xs="24">
            <Card>
              <h3 slot="title">simple bar</h3>
              <div class="chart-box">
								<VRecharts :options="simpleOption"></VRecharts>
							</div>        
            </Card>
          </Col>
          <Col :lg="12" :md="12" :xs="24">
            <Card>
              <h3 slot="title">simple bar</h3>
              <div class="chart-box">
								<VRecharts :options="chaptesOption"></VRecharts>
							</div>        
            </Card>
          </Col>
        </Row>
        <Row :gutter="8" class-name="margin-b-2">
          <Col :lg="12" :md="12" :xs="24">
            <Card>
              <h3 slot="title">simple bar</h3>
              <div class="chart-box">
								<VRecharts :options="chaptesOption"></VRecharts>
							</div>        
            </Card>
          </Col>
          <Col :lg="12" :md="12" :xs="24">
            <Card>
              <h3 slot="title">simple bar</h3>
              <div class="chart-box">
								<VRecharts :options="chaptesOption"></VRecharts>
							</div>        
            </Card>
          </Col>
        </Row>
      </div>
    </PageDemo>
  </div>
</template>

<script>
import PageDemo from '@/pages/main-components/page-demo';
import {Row, Col, Card} from 'iview';
import {VRecharts} from 'components';
import {simpleBarsCfg} from './config';
import {SIMPLE_BARS} from '@/mock/bars';

export default {
  name: 'EchartsBars',
  components: {PageDemo, Row, Col, Card, VRecharts},
  data () {
    return {
      simpleOption: {},
      chaptesOption: {}
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      this.handleSimple();
    },
    handleSimple () {
      const simpleOption = simpleBarsCfg(SIMPLE_BARS);
      this.simpleOption = {...simpleOption};
    }
  }
};
</script>

<style lang="less" scoped>

</style>

