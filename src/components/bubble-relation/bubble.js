/**
 * bubble 
 */

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
      innerRadius: MIN_SIZE/6,
      outerRadius: MIN_SIZE/4,
      radiusMin: MIN_SIZE/10,
      radiusMax: (options.outerRadius - options.innerRadius) / 2,
      duration: 1000,
      intersectDelta: 0,
      intersectInc: options.intersectDelta
    };
    this.configs = Object.assign({}, defaultConfigs, options);
  }

  onResize () {
    const _this = this;
    window.onresize = function () {
      _this.init();
    };
  }

}

export default bubble;
