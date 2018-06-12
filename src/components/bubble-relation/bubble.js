/**
 * bubble 
 */

import * as d3 from 'd3';
import {on, off, shuffle} from './utils';
class bubble {
  static P2 = Math.PI * 2;

  constructor (props) {
    this.props = {...props};
  }

  init () {
    const self = this;
    const {container, options} = this.props;
    this.container = container;
    if(!container) return;
    this.W = this.container.offsetWidth || 600;
    this.H = this.container.offsetHeight || 600;

    const MIN_SIZE = Math.min(this.W, this.H);
    const defaultConfig = {
      colors: [],
      plugins: [],
      data: [],
      viewBoxSize: [this.W, this.H],
      innerRadius: MIN_SIZE/4, // 内半径
      outerRadius: MIN_SIZE/2, // 外半径
      radiusMin: MIN_SIZE/12,
      duration: 1000,
      intersectDelta: 0, // 圆之间的交点
      intersectInc: 0, // intersectDelta的增量
      transitDuration: 1000
    };
    this.config = Object.assign({}, defaultConfig, options);
    this.config.radiusMax = (this.config.outerRadius - this.config.innerRadius) / 2;
    return new Promise((resolve) => {
      if(!self.config.data.length) {
        // const err = 'data is required and is Array';
        // reject(err);
        return;
      }
      else {
        self.setup();
        self.registerClickEvent(this.getNodes());
        self.moveToCentral(d3.select(".node"));
        self.setProptype();
        resolve();
      }
    });
  }

  setProptype () {
    const {config, svg, transition} = this;
    bubble.prototype.config = {...config};
    bubble.prototype.svg = svg;
    bubble.prototype.transition = transition;
  }

  onResize () {
    on(window, 'resize', this.init());
  }

  destory () {
    off(window, 'resize', this.init());
  }

  getTransition () {
    const transition = this.transition || bubble.prototype.transition;
    return transition;
  }

  getClickedNode () {
    return this.clickedNode;
  }

  getCentralNode () {
    return this.centralNode;
  }

  getOptions () {
    const config = this.config || bubble.prototype.config;
    return config;
  }

  getValues () {
    return this.items.map((item) => item.count);
  }

  getCirclePositions () {
    return this.circlePositions;
  }

  getNodes () {
    const svg = this.svg || bubble.prototype.svg;
    return svg.selectAll(".node");
  }

  get () {
    const svg = this.svg || bubble.prototype.svg;
    return svg;
  }

  setup () {
    const self = this;
    const config = this.config;
    this.innerRadius = config.innerRadius;
    this.outerRadius = config.outerRadius;
    this.centralPointX = this.W / 2;
    this.centralPointY = this.H / 2;
    this.intervalMax = this.W * this.H; // 最大间距
    this.items = config.data || []; // 数据量
    this.values = this.getValues();
    this.valueMax = Math.max(...this.values);
    this.transition = {};

    d3.select(this.container).html('');
    // 自定义提示框
    const tip = d3.select(this.container)
      .append("div")
      .attr('class', 'tooltips');
    this.svg = d3.select(this.container)
      .append("svg")
      .attr('preserveAspectRatio', 'xMidYMid')
      .attr('width', this.W)
      .attr('height', this.H)
      .attr('class', 'bubbleChartSvg')
      .attr("viewBox", () => {return ["0 0", config.viewBoxSize[0], config.viewBoxSize[1]].join(" ");});
    
    this.circlePositions = this.randomCirclesPos(config.intersectDelta);
    const fnColor = d3.scaleOrdinal(d3.schemeCategory20c);
    const node = this.svg.selectAll(".node")
      .data(self.circlePositions)
      .enter().append("g")
      .attr("class", () => {
        // const className = d.item.text.split(" ").join("");
        return "node";
      })
      .on('mouseover', function(d) {
        const {item} = d;
        tip.html(function() {
          return item.text;
        })
          .style("left", (d3.mouse(self.container)[0]+20) + "px")
          .style("top", (d3.mouse(self.container)[1]+20) + "px")
          .style("display", "block");
      })
      .on("mousemove", function(){
        tip.style("left", (d3.mouse(self.container)[0]+20) + "px")
          .style("top", (d3.mouse(self.container)[1]+20) + "px");
      })
      .on('mouseout', function() {
        tip.style("display", "none");
      });
    node.append("circle")
      .attr('r', function (d) {return d.r;})
      .attr('cx', function (d) {return d.cx;})
      .attr('cy', function (d) {return d.cy;})
      .style("fill", function (d, i) {
        return config.colors.length ? config.colors(i) : fnColor(d.item.text);
      })
      .attr("opacity", "0.9");

    node.sort(function (a, b) {return b.count - a.count;});

  }

  randomCirclesPos (delta) {
    const self = this;
    const circles = [];
    const itemsLen = self.items.length;
    let interval = 0;
    const config = self.config;
    while (circles.length < itemsLen && ++interval < self.intervalMax) {
      const val = self.values[circles.length];
      const rad = Math.max((val * config.radiusMax) / self.valueMax, config.radiusMin);
      const dist = self.config.innerRadius + rad + Math.random() * (self.outerRadius - self.config.innerRadius - rad * 2);
      // const angle = Math.random() * bubble.P2; //随记角度，判断重合push
      const angle = (circles.length / itemsLen) * bubble.P2;
      const cx = self.centralPointX + dist * Math.cos(angle);
      const cy = self.centralPointY + dist * Math.sin(angle);

      // let hit = false;
      // circles.forEach((circle) => {
      //   const dx = circle.cx - cx;
      //   const dy = circle.cy - cy;
      //   const r = circle.r + rad;
      //   // if (dx * dx + dy * dy < Math.pow(r - delta, 2)) {
      //   //   hit = true;
      //   //   return false;
      //   // }
      // });
      // if (!hit) {
      //   circles.push({cx: cx, cy: cy, r: rad, item: self.items[circles.length]});
      // }
      circles.push({cx: cx, cy: cy, r: rad, item: self.items[circles.length]});
    }
    if (circles.length < self.items.length) {
      if (delta === config.radiusMin) {
        throw {
          message: "Not enough space for all bubble. Please change the options.",
          options: config
        };
      }
      // return self.randomCirclesPos(delta + config.intersectInc);  // 性能问题
    }
    return shuffle(circles);
  }

  moveToCentral (node) {
    const self = this;
    self.centralNode = node;
    self.transition.centralNode = node.classed('active', true)
      .transition().duration(self.config.transitDuration);
    self.transition.centralNode.attr('transform', d =>{
      var dx = self.centralPointX - d.cx;
      var dy = self.centralPointY - d.cy;
      return `translate(${dx},${dy})`;
    })
      .select("circle")
      .attr('r', function () {return self.config.innerRadius;});
  }

  moveToReflection (node, swapped) {
    const self = this;

    node.transition()
      .duration(self.config.transitDuration)
      .delay(function (d, i) {return i * 10;})
      .attr('transform', d => {
        const dx = 2 * (self.centralPointX - d.cx);
        const dy = 2 * (self.centralPointY - d.cy);
        return swapped ? "" : `translate(${dx},${dy})`;
      })
      .select("circle")
      .attr('r', function (d) {return d.r;});
  }

  reset (node) {
    node.classed('active', false);
  }

  registerClickEvent (node) {
    const self = this;
    let swapped = false;
    node.style("cursor", "pointer").on("click", function () {
      self.clickedNode = d3.select(this);
      self.reset(self.centralNode);
      self.moveToCentral(self.clickedNode);
      self.moveToReflection(self.svg.selectAll(".node:not(.active)"), swapped);
      swapped = !swapped;
    });
  }
}

export default bubble;
