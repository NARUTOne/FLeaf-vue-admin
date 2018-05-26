/**
 * bubble 
 */

import * as d3 from 'd3';
import {on, off, shuffle} from './utils';
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
      colors: [],
      plugins: [],
      viewBoxSize: [this.W, this.H],
      innerRadius: MIN_SIZE/6, // 内半径
      outerRadius: MIN_SIZE/4, // 外半径
      radiusMin: MIN_SIZE/10,
      radiusMax: (MIN_SIZE/4 - MIN_SIZE/6) / 2, 
      duration: 1000,
      intersectDelta: 0, // 圆之间的交点
      intersectInc: 0 // intersectDelta的增量
    };
    this.configs = Object.assign({}, defaultConfigs, options);

    this.setup();
    this.registerClickEvent(self.getNodes());
    this.moveToCentral(d3.select(".node"));
  }

  onResize () {
    on(window, 'resize', this.init());
  }

  destory () {
    off(window, 'resize', this.init());
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
    return this.items.map((item) => item.count);
  }

  getCirclePositions () {
    return this.circlePositions;
  }

  get () {
    return this.svg;
  }

  setup () {
    const self = this;
    const config = this.config;
    this.innerRadius = config.innerRadius;
    this.outerRadius = config.outerRadius;
    this.centralPointX = this.W / 2;
    this.centralPointY = this.H / 2;
    this.intervalMax = this.W * this.Y; // 最大间距
    this.items = config.data.items; // 数据量
    this.values = this.getValues();
    this.valueMax = this.values.max();
    this.transition = {};
    this.svg = d3.select(config.container).append("svg")
      .attr({preserveAspectRatio: "xMidYMid", width: this.W, height: this.H, class: "bubbleChartSvg"})
      .attr("viewBox", () => {return ["0 0", config.viewBoxSize[0], config.viewBoxSize[1]].join(" ");});
    
    this.circlePositions = this.randomCirclesPos(config.intersectDelta);

    const fnColor = d3.scaleOrdinal(d3.schemeCategory20c);
    const node = self.svg.selectAll(".node")
      .data(self.circlePositions)
      .enter().append("g")
      .attr("class", function (d) {
        const className = d.item.text.split(" ").join("");
        return ["node", className].join(" ");
      });
    node.append("circle")
      .attr({r: function (d) {return d.r;}, cx: function (d) {return d.cx;}, cy: function (d) {return d.cy;}})
      .style("fill", function (d, i) {
        return config.colors.length ? config.colors(i) : fnColor(d.item.text);
      })
      .attr("opacity", "0.8");

    node.sort(function (a, b) {return b.count - a.count;});

  }

  randomCirclesPos (delta) {
    const self = this;
    const circles = [];
    let interval = 0;
    const options = self.config;
    while (circles.length < self.items.length && ++interval < self.intervalMax) {
      const val = self.values[circles.length];
      const rad = Math.max((val * options.radiusMax) / self.valueMax, options.radiusMin);
      const dist = self.innerRadius + rad + Math.random() * (self.outerRadius - self.innerRadius - rad * 2);
      const angle = Math.random() * self.P2;
      const cx = self.centralPointX + dist * Math.cos(angle);
      const cy = self.centralPointY + dist * Math.sin(angle);

      let hit = false;
      circles.forEach((i, circle) => {
        const dx = circle.cx - cx;
        const dy = circle.cy - cy;
        const r = circle.r + rad;
        if (dx * dx + dy * dy < Math.pow(r - delta, 2)) {
          hit = true;
          return false;
        }
      });
      if (!hit) {
        circles.push({cx: cx, cy: cy, r: rad, item: self.items[circles.length]});
      }
    }
    if (circles.length < self.items.length) {
      if (delta === options.radiusMin) {
        throw {
          message: "Not enough space for all bubble. Please change the options.",
          options: options
        };
      }
      return self.randomCirclesPositions(delta + options.intersectInc);
    }
    return shuffle(circles);
  }

  moveToCentral (node) {
    const self = this;
    const toCentralPoint = d3.svg.transform()
      .translate(function (d) {
        // var cx = node.select('circle').attr("cx");
        var dx = self.centralPoint - d.cx;
        var dy = self.centralPoint - d.cy;
        return [dx, dy];
      });
    self.centralNode = node;
    self.transition.centralNode = node.classed({active: true})
      .transition().duration(self.config.transitDuration);
    self.transition.centralNode.attr('transform', toCentralPoint)
      .select("circle")
      .attr('r', function () {return self.config.innerRadius;});
  }

  moveToReflection (node, swapped) {
    const self = this;
    const toReflectionPoint = d3.svg.transform()
      .translate(function (d) {
        const dx = 2 * (self.centralPoint - d.cx);
        const dy = 2 * (self.centralPoint - d.cy);
        return [dx, dy];
      });

    node.transition()
      .duration(self.config.transitDuration)
      .delay(function (d, i) {return i * 10;})
      .attr('transform', swapped ? "" : toReflectionPoint)
      .select("circle")
      .attr('r', function (d) {return d.r;});
  }

  reset (node) {
    node.classed({active: false});
  }

  registerClickEvent (node) {
    const self = this;
    let swapped = false;
    node.style("cursor", "pointer").on("click", function () {
      self.clickedNode = d3.select(this);
      self.event.send("click", self.clickedNode);
      self.reset(self.centralNode);
      self.moveToCentral(self.clickedNode);
      self.moveToReflection(self.svg.selectAll(".node:not(.active)"), swapped);
      swapped = !swapped;
    });
  }
}

export default bubble;
