/**
 * bubble 
 */

import * as d3 from 'd3';
class bubble {
  static P2 = Math.PI * 2;

  constructor (props) {
    this.props = {...props};
    this.init();
  }

  init () {
    const {container, options} = this.props;
    this.container = container;
    this.W = this.container.innerWidth;
    this.H = this.container.innerHeight;

    const MIN_SIZE = Math.min(this.W, this.H);
    const defaultConfigs = {
      plugins: [],
      viewBoxSize: [this.W, this.H],
      innerRadius: MIN_SIZE/6, // 内半径
      outerRadius: MIN_SIZE/4, // 外半径
      radiusMin: MIN_SIZE/10,
      radiusMax: (MIN_SIZE/4 - MIN_SIZE/6) / 2, 
      duration: 1000,
      intersectDelta: 0, //
      intersectInc: '' // 
    };
    this.configs = Object.assign({}, defaultConfigs, options);
  }

  onResize () {
    const _this = this;
    window.onresize = function () {
      _this.init();
    };
  }

  getTransition () {
    return this.transition;
  }

  getClickedNode () {
    return this.clickedNode;
  }

  getCentralNode () {
    return this.centralNode;
  }

  getOptions () {
    return this.options;
  }

  getValues () {
    return this.items.map((item) => this.config.data.eval(item));
  }

  setup () {
    const config = this.config;
    this.innerRadius = config.innerRadius;
    this.outerRadius = config.outerRadius;
    this.centralPointX = this.W / 2;
    this.centralPointY = this.H / 2;
    this.intervalMax = this.W * this.Y;
    this.items = config.data.items;
    this.values = self.getValues();
    this.valueMax = self.values.max();
    this.svg = d3.select(config.container).append("svg")
      .attr({preserveAspectRatio: "xMidYMid", width: this.W, height: this.H, class: "bubbleChartSvg"})
      .attr("viewBox", () => {return ["0 0", config.viewBoxSize[0], config.viewBoxSize[1]].join(" ");});
    
    this.circlePositions = self.randomCirclesPos(config.intersectDelta);

  }

  randomCirclesPos () {
    
  }

}

export default bubble;
