<template>
  <div class="flow-chart">
    <PageDemo>
			<template slot='page-title'>FireLeaf 🍂 FlowChart</template>
			<template slot="page-quote">
        简易流程图&nbsp;<a href="https://d3js.org/" target="_blank">d3JS</a>
			</template>
      <template slot="page-desc">
        使用拖拽节点组件，进行流程图绘制
      </template>
      <div class="chart-body"> 
        <div class="chart-icons-box">
          <span class="hover-bg pointer" @click="handleLock">
            <Icon type='locked' title="锁定" v-if="isLock"></Icon>
            <Icon type='unlocked' title="解锁" v-else></Icon>
          </span>
          <span class="hover-bg pointer" @click="handleRunFlow"><Icon type='play' title="运行"></Icon></span>
          <span class="hover-bg pointer hide"><Icon type='network' title="布局"></Icon></span>
          <span class="hover-bg pointer" @click="handleZoomBig"><Icon type='ios-plus' title="放大"></Icon></span>
          <span class="hover-bg pointer" @click="handleZoomSmall"><Icon type='ios-minus' title="缩小"></Icon></span>
          <span class="hover-bg pointer" @click="handleZoomRepeat"><Icon type='refresh' title="缩放恢复"></Icon></span>
        </div>
        <div class="chart-nodes-box">
          <Card>
            <p slot="title">节点组件</p>
            <div class="chart-nodes-type">
              <div>
                <p class='chart-nodes-type-title'><b>流程任务节点</b></p>
                <ul class='chart-nodes-type-list'>
                  <li class='success-bg' draggable='true' @dragstart="handleIconDrag" data-key='0'>任务A</li>
                </ul> 
              </div>
              <div>
                <p class='chart-nodes-type-title'><b>脚本节点</b></p>
                <ul class='chart-nodes-type-list'>
                  <li class='default-bg' draggable='true' @dragstart="handleIconDrag" data-key='1'>脚本A</li>
                </ul> 
              </div>
              <div>
                <p class='chart-nodes-type-title'><b>虚节点</b></p>
                <ul class='chart-nodes-type-list'>
                  <li class='warn-bg' draggable='true' @dragstart="handleIconDrag" data-key='start'>start</li>
                  <li class='warn-bg' draggable='true' @dragstart="handleIconDrag" data-key='end'>end</li>
                </ul> 
              </div>
            </div>
          </Card>
        </div>
        <div class="chart-flow-box" @drop="handleDrop" @dragover="(e)=>{e.preventDefault();}">
          <CFlowChart
            :data="dragData"
            :options="chartOptions"
            @zoomChange="handleZoomChange"
            @nodesChange="handleNodesChange"
            @linksChange="handleLinksChange"
            @editNode="handleEditNode"
            @deleteNode="handleDeleteNode"
            @deleteLink="handleDeleteLink"
          ></CFlowChart>
        </div>
      </div>
    </PageDemo>
  </div>
</template>

<script>
import {Icon, Card} from 'iview';
import PageDemo from '@/pages/main-components/page-demo';
import {CFlowChart} from '@/components/';

export default {
  name: 'FlowChart',
  components: {
    Icon, Card, PageDemo, CFlowChart
  },
  data () {
    return {
      isChange: false,
      chartOptions: {
        zoom: {
          x: 0,
          y: 0,
          scale: 1.0
        },
        isLock: true,
        isShowLegend: false
      },
      dragObj: {},
      dragData: {
        nodes: [],
        edges: []
      },
    };
  },
  computed: {
    isLock () {
      return this.chartOptions.isLock;
    }
  },
  methods: {
    checkLock () {
      const { chartOptions } = this;

      if(chartOptions.isLock) {
        this.$Message.warning('当前处于锁定状态，请解锁后操作！');
        return true;
      }
      return false;
    },
    // 拖拽
    handleIconDrag (e) {
      if(this.checkLock()) return;

      const key = e.target.dataset.key;
      e.dataTransfer.setData('text', key);
    },
    handleDrop (e) {
      if(this.checkLock()) return;
      e.preventDefault();
      const {chartOptions} = this;
      const key = e.dataTransfer.getData('text');
      // console.log(e.pageX);
      const svgEle = document.getElementById('force-svg');

      const node = {
        type: key,
        posX: (e.pageX - svgEle.getBoundingClientRect().left - chartOptions.zoom.x)/chartOptions.zoom.scale,
        posY: (e.pageY - svgEle.getBoundingClientRect().top - chartOptions.zoom.y - 30)/chartOptions.zoom.scale
      };
    
      if(key == 'start') {
        node.label = key;
        node.type = '-1';

        this.handleVirOk(node);
      }
      else if(key == 'end') {
        node.label = key;
        node.type = '-2';

        this.handleVirOk(node);
      }
      else {
        node.type = key;
        this.dragObj = [...node];
      }
    },
    handleVirOk (data) {
      const obj = Object.assign({}, data);
      const newDragData = Object.assign({}, this.dragData);
      newDragData.nodes.push(obj);

      this.dragData = {...newDragData};
      this.isChange = true;
    },
    // chart操作
    handleRunFlow () {
      this.$Message.info('运行流程图！');
    },
    handleLock () {
      this.chartOptions.isLock = !this.chartOptions.isLock;
    },
    handleZoomRepeat () {
      const zoom =  {
        x: 0,
        y: 0,
        scale: 1.0
      };

      this.chartOptions.zoom = Object.assign({}, zoom);
    },
    handleZoomBig () {
      const { chartOptions } = this;
      if(chartOptions.zoom.scale > 3.0) return;
      else {
        this.chartOptions.zoom.scale = this.chartOptions.zoom.scale + 0.3;
      }
    },
    handleZoomSmall () {
      const { chartOptions } = this;
      const scale = chartOptions.zoom.scale;
      if(chartOptions.zoom.scale < 0.2) return;
      else {
        this.chartOptions.zoom.scale =  scale - 0.2;
      }
    },
    handleZoomChange (zoom) {
      this.chartOptions.zoom = zoom;
    },
    handleNodesChange (nodes) {
      this.dragData.nodes = nodes;
      this.handleChartChange();
    },
    handleLinksChange (links) {
      this.dragData.edges  = links;
      this.handleChartChange();
    },
    handleDeleteNode (d) {
      const newDragData = Object.assign({}, this.dragData);
      const arrNodes = newDragData.nodes.filter(item => item.id != d.id);
      const arrLinks = newDragData.edges.filter(item => item.sourceId !== d.id || item.targetId !== d.id);

      this.dragData.nodes = [...arrNodes];
      this.dragData.edges = [...arrLinks];
      this.handleChartChange();
    },
    handleEditNode (d) {
      this.$Message.warning(`${d.nodeId}节点编辑！`);
    },
    handleDeleteLink (d) {
      const newDragData = Object.assign({}, this.dragData);
      const arr = newDragData.edges.filter(item => {
        const bol = (item.sourceId != d.sourceId) || (item.targetId != d.targetId);
        return bol;
      });
      this.dragData.edges = [...arr];
      this.handleChartChange();
    },
    handleChartChange () {
      this.isChange = true;
    }
  }
};
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
