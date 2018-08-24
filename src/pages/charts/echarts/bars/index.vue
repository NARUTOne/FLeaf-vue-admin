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
              <h3 slot="title">简单柱状图（simple bar）</h3>
              <div class="chart-box">
								<VRecharts :options="simpleOption"></VRecharts>
							</div>        
            </Card>
          </Col>
          <Col :lg="12" :md="12" :xs="24">
            <Card>
              <h3 slot="title">阶梯瀑布图（fall bar）</h3>
              <div class="chart-box">
								<VRecharts :options="fallOption"></VRecharts>
							</div>        
            </Card>
          </Col>
        </Row>
        <Row :gutter="8" class-name="margin-b-2">
          <Col :lg="12" :md="12" :xs="24">
            <Card>
              <h3 slot="title">堆叠柱状图（pire bar）</h3>
              <div class="chart-box">
								<VRecharts :options="pireOption"></VRecharts>
							</div>        
            </Card>
          </Col>
          <Col :lg="12" :md="12" :xs="24">
            <Card>
              <h3 slot="title">堆叠右柱状图（pire right bar）</h3>
              <div class="chart-box">
								<VRecharts :options="pireRightOption"></VRecharts>
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
import {simpleBarsCfg, pireBarsCfg, fallBarsCfg, pireRightBarsCfg} from './config';
import {SIMPLE_BARS, PIRE_BARS} from '@/mock/bars';
import tools from 'utils/tools';

export default {
  name: 'EchartsBars',
  components: {PageDemo, Row, Col, Card, VRecharts},
  data () {
    return {
      simpleOption: {},
      pireOption: {},
      fallOption: {},
      pireRightOption: {}
    };
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      this.handleSimple();
      this.handlePire();
      this.handlePireRight();
      this.handleFall();
    },
    handleSimple () {
      const simpleOption = simpleBarsCfg(SIMPLE_BARS);
      this.simpleOption = {...simpleOption};
    },
    handlePire () {
      const param = tools.deepCopy(PIRE_BARS);
      const pireOption = pireBarsCfg(param);
      this.pireOption = {...pireOption};
    },
    handlePireRight () {
      const param = tools.deepCopy(PIRE_BARS);
      const pireRightOption = pireRightBarsCfg(param);
      this.pireRightOption = {...pireRightOption};
    },
    handleFall () {
      const fallOption = fallBarsCfg();
      this.fallOption = {...fallOption};
    }
  }
};
</script>
