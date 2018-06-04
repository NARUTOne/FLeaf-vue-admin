/**
 * lines
 */
import * as d3 from 'd3';
import bubble from '../bubble';

/*
  * @param
  *  options = {
  *    format: [ //n-th object is used to format n-th line
  *      {
  *        textField: #string, name of property will be used in function text(), @link
  *        classed: #object, @link
  *        style: #object, @link
  *        attr: #object, @link
  *      }
  *    ],
  *    centralFormat: [ //@see #format, but used to format central-bubble
  *    ]
  *  }
  * */
class lines extends bubble {
  constructor (props) {
    super();
    this.options = Object.assign({}, props);
    (() => {
      this.setup();
      this.reset();
      this.moveToCentral();
    })();
  }

  setup () {
    const original = this.setup;
    return () => {
      const fn = original.apply(this, arguments);
      const nodes = super.getNodes();
      if(Array.isArray(this.options.format)) {
        this.options.format.forEach((item) => {
          nodes.append('text')
            .classed(item.classed)
            .style(item.style)
            .attr(item.attr)
            .text((d) => d.item[item.textField]);
        });
      }
     
      return fn;
    };
  }

  reset () {
    const original = this.reset;
    return (node) => {
      const fn = original.apply(this, arguments);
      if(Array.isArray(this.options.format)) {
        this.options.format.forEach((item, i) => {
          const tNode = d3.select(node.selectAll('text')[0][i]);
          tNode.classed(item.classed)
            .style(item.style)
            .attr(item.attr)
            .text((d) => d.item[item.textField])
            .transition()
            .duration(super.getOptions().transitDuration);
        });
      }
      return fn;
    };
  }

  moveToCentral () {
    const original = this.moveToCentral;
    return (node) => {
      const fn = original.apply(this, arguments);
      if(Array.isArray(this.options.centralFormat)) {
        this.options.centralFormat.forEach((item, i) => {
          const tNode = d3.select(node.selectAll('text')[0][i]);
          tNode.classed(item.classed)
            .style(item.style)
            .attr(item.attr)
            .text((d) => d.item[item.textField])
            .transition()
            .duration(super.getOptions().transitDuration);
        });
      }
      return fn;
    };
  }
}

export default lines;
