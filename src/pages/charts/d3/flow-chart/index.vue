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
            :zoomChange="handleZoomChange"
            :nodesChange="handleNodesChange"
            :linksChange="handleLinksChange"
            :editNode="handleEditNode"
            :deleteNode="handleDeleteNode"
            :deleteLink="handleDeleteLink"
          ></CFlowChart>
        </div>
      </div>
    </PageDemo>
    <Modal
      v-model="isNodeModal"
      title="节点modal"
      :styles="{top: '50px'}"
      :mask-closable="false"
      @on-visible-change="handleNodeModalChange"
    >
      <NodeModal ref="nodeModal"></NodeModal>
      <div slot="footer">
        <Button type="primary" @click="handleAdd">添加</Button>
        <Button type="ghost" @click="handleCancel">取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import {Icon, Card, Modal, Button} from 'iview';
import PageDemo from '@/pages/main-components/page-demo';
import {CFlowChart} from '@/components/';
import NodeModal from './nodeModal.vue';

export default {
  name: 'FlowChart',
  components: {
    Icon, Card, PageDemo, CFlowChart, Modal, Button, NodeModal
  },
  data () {
    return {
      isChange: false,
      isNodeModal: false,
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
        this.dragObj = {...node};
        this.isNodeModal = true;
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
      const options = Object.assign({}, this.chartOptions);
      const bol = !this.chartOptions.isLock;
      options.isLock = bol;
      this.chartOptions = {...options};
    },
    handleZoomRepeat () {
      if(this.checkLock()) return;
      const zoom =  {
        x: 0,
        y: 0,
        scale: 1.0
      };
      const options = Object.assign({}, this.chartOptions);
      options.zoom = Object.assign({}, zoom);
      this.chartOptions = {...options};
    },
    handleZoomBig () {
      if(this.checkLock()) return;
      const options = Object.assign({}, this.chartOptions);
      if(options.zoom.scale > 3.0) return;

      options.zoom.scale = options.zoom.scale + 0.3;
      this.chartOptions = {...options};
    },
    handleZoomSmall () {
      if(this.checkLock()) return;
      const options = Object.assign({}, this.chartOptions);
      const scale = options.zoom.scale;
      if(options.zoom.scale < 0.2) return;

      options.zoom.scale =  scale - 0.2;
      this.chartOptions = {...options};
    },
    handleZoomChange (zoom) {
      if(this.checkLock()) return;
      const options = Object.assign({}, this.chartOptions);
      options.zoom = zoom;

      this.chartOptions = {...options};
    },
    handleNodesChange (nodes) {
      if(this.checkLock()) return;
      this.dragData.nodes = nodes;
      this.handleChartChange();
    },
    handleLinksChange (links) {
      if(this.checkLock()) return;
      this.dragData.edges  = links;
      this.handleChartChange();
    },
    handleDeleteNode (d) {
      if(this.checkLock()) return;
      const newDragData = Object.assign({}, this.dragData);
      const arrNodes = newDragData.nodes.filter(item => item.id != d.id);
      const arrLinks = newDragData.edges.filter(item => item.sourceId !== d.id || item.targetId !== d.id);

      const newData = {
        nodes: arrNodes,
        edges: arrLinks
      };

      this.dragData = Object.assign({}, newData);
      this.handleChartChange();
    },
    handleEditNode (d) {
      if(this.checkLock()) return;
      this.$Message.warning(`${d.nodeId}节点编辑！`);
    },
    handleDeleteLink (d) {
      if(this.checkLock()) return;
      const newDragData = Object.assign({}, this.dragData);
      const arrLinks = newDragData.edges.filter(item => {
        const bol = (item.sourceId != d.sourceId) || (item.targetId != d.targetId);
        return bol;
      });

      const newData = {
        nodes: newDragData.nodes,
        edges: arrLinks
      };

      this.dragData = Object.assign({}, newData);
      this.handleChartChange();
    },
    handleChartChange () {
      this.isChange = true;
    },
    // modal
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    handleNodeModalChange (bol) {
      !bol && (this.handleReset('nodeModal'));
    },
    handleCancel () {
      this.handleReset('nodeModal');
      this.isNodeModal = false;
    },
    handleAdd () {
      const _this = this;
      this.$refs['nodeModal'].getFormData().then(data => {
        _this.handleCancel();
        const obj = Object.assign({}, data, _this.dragObj);
        const newDragData = Object.assign({}, _this.dragData);

        function add () {
          newDragData.nodes.push(obj);
          console.log(newDragData);
          _this.dragData = {...newDragData};
        }
        add();
      }).catch(() => {
        _this.$Message.error('error');
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
