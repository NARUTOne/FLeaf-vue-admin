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
    const self = this;
    (() => {
      self.setup()();
    })();
  }

  setup () {
    const original = this.setup;
    return () => {
      const fn = original.apply(this, arguments);
      const nodes = super.getNodes();
      if(Array.isArray(this.options.format)) {
        this.options.format.forEach((item) => {
          const keys = Object.keys(item.attr);
          const stylekeys = Object.keys(item.style);
          const tNodes = nodes.append('text')
            .attr('class', item.classed)
            .text((d) => d.item[item.textField]);

          keys.forEach(key => {
            tNodes.attr(key, item.attr[key]);
          });
          stylekeys.forEach(key => {
            tNodes.style(key, item.style[key]);
          });
        });
      }
     
      return fn;
    };
  }

  reset () { // 结合 bubble  reset
    const original = this.reset;
    return (node) => {
      const fn = original.apply(this, arguments);
      if(Array.isArray(this.options.format)) {
        this.options.format.forEach((item, i) => {
          const tNode = d3.select(node.selectAll('text')[0][i]);
          const keys = Object.keys(item.attr);
          const stylekeys = Object.keys(item.style);
          const textNode = tNode.attr('class', item.classed)
            .text((d) => d.item[item.textField])
            .transition()
            .duration(super.getOptions().transitDuration);
          keys.forEach(key => {
            textNode.attr(key, item.attr[key]);
          });
          stylekeys.forEach(key => {
            textNode.style(key, item.attr[key]);
          });
        });
      }
      return fn;
    };
  }

  moveToCentral () { // 结合 bubble  moveToCentral
    const original = this.moveToCentral;
    return (node) => {
      const fn = original.apply(this, arguments);
      if(Array.isArray(this.options.centralFormat)) {
        this.options.centralFormat.forEach((item, i) => {
          const tNode = d3.select(node.selectAll('text')[0][i]);
          const keys = Object.keys(item.attr);
          const stylekeys = Object.keys(item.style);
          const gNode = tNode.attr('class', item.classed)
            .text((d) => d.item[item.textField])
            .transition()
            .duration(super.getOptions().transitDuration);

          keys.forEach(key => {
            gNode.attr(key, item.attr[key]);
          });
          stylekeys.forEach(key => {
            gNode.style(key, item.attr[key]);
          });
        });
      }
      return fn;
    };
  }
}

export default lines;
