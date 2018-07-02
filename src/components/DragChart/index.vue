<template>
  <div class="drag-chart">
     <div className='drag-chart-box' ref='dragChart'>
	    </div>
  </div>
</template>

<script>
import ChartDrag from './main';
export default {
  name: 'DragChart',
  props: {
    props: {
      type: Object,
      default () {
        return {
          data: {
            nodes: [],
            links: []
          },
          options: {}
        };
      }
    }
  },
  watch: {
    data: {
      handler: function (val, oldVal) {
        if (val !== oldVal) {
          this.renderChart();
        }
      },
      deep: true
    }
  },
  mounted () {
    this.renderChart();
  },
  methods: {
    renderChart () {
      const data = this.EditData(this.props.data);
      new ChartDrag({
        container: this.refs.dragChart,
        dragData: data,
        ...this.props
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

<style lang="less" scoped>
@import 'index.less';
</style>

