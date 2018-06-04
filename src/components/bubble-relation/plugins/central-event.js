/**
 * central-event
 */

// import * as d3 from 'd3';
import bubble from '../bubble';

class centralEvent extends bubble { 
  constructor(props) {
    super();
    this.options = Object.assign({}, props);
    this.getTransition = super.getTransition;
    this.getOptions = super.getOptions;

    (() => {
      this.setup();
      this.reset();
      this.moveToCentral();
    })();
  }

  setup () {
    const self = this;
    const original = this.setup;
    return () => {
      const fn = original.apply(this, arguments);
      this.event.on('click', (node) => {
        if(node.selectAll('text.central-click')[0].length === 1 && self.options.centralClick && node.datum) {
          const nodeDatum = node.datum();
          if(nodeDatum.item) {
            self.options.centralClick(nodeDatum.item);
          }
        }
      });
      return fn;
    };
  }

  reset () {
    const original = self.reset;
    return function (node) {
      const fn = original.apply(this, arguments);
      node.select("text.central-click").remove();
      return fn;
    };
  }

  moveToCentral () {
    const self = this;
    const original = self.moveToCentral;
    return function (node) {
      const fn = original.apply(this, arguments);
      const transition = self.getTransition().centralNode;
      transition.each("end", function() {
        node.append("text").classed({"central-click": true})
          .attr(self.options.attr)
          .style(self.options.style)
          .attr("x", function (d) {return d.cx;})
          .attr("y", function (d) {return d.cy;})
          .text(self.options.text)
          .style("opacity", 0).transition().duration(self.getOptions().transitDuration / 2).style("opacity", "0.8");
      });
      return fn;
    };
  }
}

export default centralEvent;
