<template>
  <div class="bubble-relatoin" ref="bubble"></div>
</template>

<script>
import bubble from './bubble';
import lines from './plugins/lines';

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
        radiusMin: 50,
        data: [],
        plugins: [
          {
            name: "lines",
            options: {
              format: [
                {// Line #0
                  textField: "count",
                  classed: 'count',
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
                  classed: 'text',
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
      console.time('renderbubble');
      this.renderBubble(this.opt, container);
      console.timeEnd("renderbubble");
    },
    renderBubble (options, container) {
      const self = this;
      const obj = {options, container};
      const bubbleClass = new bubble(obj);
      bubbleClass.init().then(() => {
        self.renderPlugins(options);
      });
    },
    renderPlugins (options) {
      const {plugins, centralFormat} = options;
      const linePlugin = plugins.filter(item => item.name === 'lines')[0].options;
      linePlugin.centralFormat = Object.assign(centralFormat, {});

      new lines(linePlugin);
    }
  }
};
</script>

<style lang="less" scoped>
.bubble-relatoin {
  height: 100%;
  position: relative;
  svg {
      display: block;
  }
}
</style>

