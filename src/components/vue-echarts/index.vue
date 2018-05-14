<template>
  <div class="vue-echarts" ref='echarts'></div>
</template>

<script>
import Chart from './main';
import tools from 'utils/tools';
export default {
  name: 'VEcharts',
  props: {
    height: {
      type: [Number, String],
      default: 300
    },
    showMapName: {
      type: String
    },
    options: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      stateOptions: {},
      container: ''
    };
  },
  watch: {
    options: {
      deep: true,
      handler () {
        this.stateOptions = {...this.options};
        const props = {
          options: this.stateOptions,
          showMapName: this.showMapName
        };
        this.renderChart(props);
      }
    }
  },
  mounted () {
    this.container = this.$refs.echarts;
    if(this.options && !tools.emptyObj(this.options)) {
      this.stateOptions = {...this.options};
      const props = {
        options: this.stateOptions,
        showMapName: this.showMapName
      };
      this.renderChart(props);
    }
  },
  methods: {
    renderChart(props) {
      new Chart({
        container: this.container,
        ...props
      });
    },
    resize() {
      const props = {
        options: this.stateOptions,
        showMapName: this.showMapName
      };
      var chart = new Chart({
        container: this.container,
        ...props
      });
    
      chart.resize();
    }
  }
};
</script>

<style lang="less" scoped>
.vue-echarts {
  height: 100%;
  position: relative;
  svg {
      display: block;
  }
}
</style>




