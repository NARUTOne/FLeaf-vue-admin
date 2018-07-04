<template>
  <div class="drag-chart">
    <div class='drag-chart-box' ref='dragChart'>
	  </div>
  </div>
</template>

<script>
import ChartDrag from './main';
export default {
  name: 'CFlowChart',
  props: {
    data: {
      type: Object,
      default () {
        return {
          nodes: [],
          links: []
        };
      }
    },
    options: {
      type: Object,
      default () {
        return {};
      }
    },
    zoomChange: Function,
    nodesChange: Function,
    deleteNode: Function,
    linksChange: Function,
    editNode: Function,
    deleteLink: Function
  },
  watch: {
    data () {
      this.renderChart();
    },
    options: {
      deep: true,
      handler (val, oldVal) {
        if (val !== oldVal) {
          this.renderChart();
        }
      }
    }
  },
  mounted () {
    this.renderChart();
  },
  methods: {
    renderChart () {
      const {data, options, zoomChange, nodesChange, deleteNode, linksChange, editNode, deleteLink} = this;
      const newData = this.EditData(data);
      new ChartDrag({
        container: this.$refs['dragChart'],
        dragData: newData,
        options,
        zoomChange,
        nodesChange,
        deleteNode,
        linksChange,
        editNode,
        deleteLink
      });
    },
    EditData (data) {
      const obj = {};
      obj.nodes = data.nodes;
      obj.edges = data.edges;

      obj.nodes.forEach((item, i) => {
        item.id = item.id || i + 'node' + new Date().getTime();
      });
      
      return obj;
    }
  }
};
</script>

<style lang="less">
@import 'index.less';
</style>

