<template>
  <div class="bubble-relatoin" ref="bubble"></div>
</template>

<script>
import bubble from './bubble';
import lines from './plugins/lines';
import centralEvent from './plugins/central-event';

export default {
  name: 'BubbleRelation',
  data () {
    return {
      opt: {}
    };
  },
  props: {
    options: {
      type: Object,
      required: true,
      default () {
        return {};
      }
    }
  },
  watch: {
    options: {
      deep: true,
      handler (obj) {
        this.init(obj);
      }
    }
  },
  mounted () {
    this.init(this.options);
  },
  methods: {
    init (options) {
      const container = this.$refs['bubble'];
      if(!container) return;
      const defaultOptions = {
        data: [],
        plugins: [
          {
            name: "central-click",
            options: {
              text: "(See more detail)",
              style: {
                "font-size": "12px",
                "font-style": "italic",
                "font-family": "Source Sans Pro, sans-serif",
                // "font-weight": "700",
                "text-anchor": "middle",
                "fill": "white"
              },
              attr: {dy: "65px"},
              centralClick: function() {
                alert("Here is more details!!");
              }
            }
          },
          {
            name: "lines",
            options: {
              format: [
                {// Line #0
                  textField: "count",
                  classed: {count: true},
                  style: {
                    "font-size": "28px",
                    "font-family": "Source Sans Pro, sans-serif",
                    "text-anchor": "middle",
                    fill: "white"
                  },
                  attr: {
                    dy: "0px",
                    x: function (d) {return d.cx;},
                    y: function (d) {return d.cy;}
                  }
                },
                {// Line #1
                  textField: "text",
                  classed: {text: true},
                  style: {
                    "font-size": "14px",
                    "font-family": "Source Sans Pro, sans-serif",
                    "text-anchor": "middle",
                    fill: "white"
                  },
                  attr: {
                    dy: "20px",
                    x: function (d) {return d.cx;},
                    y: function (d) {return d.cy;}
                  }
                }
              ]
            }
          }
        ],
        centralFormat: [
          {// Line #0
            style: {"font-size": "50px"},
            attr: {}
          },
          {// Line #1
            style: {"font-size": "30px"},
            attr: {dy: "40px"}
          }
        ]
      };
      this.opt = Object.assign({}, defaultOptions, options);

      this.renderBubble(this.opt, container);
    },
    renderBubble (options, container) {
      const {plugins} = options;
      const centralFormat = options.plugins;
      const linePlugin = plugins.filter(item => item.name === 'lines');
      const centralEventPlugin = plugins.filter(item => item.name === 'central-click');
      linePlugin.centralFormat = Object.assign(centralFormat, {});
      
      const obj = {options, container};
      new bubble(obj);
      new lines(linePlugin);
      new centralEvent(centralEventPlugin);
    }
  }
};
</script>

<style lang="less" scoped>

</style>

