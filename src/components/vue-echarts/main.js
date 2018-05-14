/*
  chart base on EchartsJS v3
*/
import echarts from 'echarts';
import elementResizeEvent from 'element-resize-event';
import tools from 'utils/tools';

const COLORS = ['#48a9ee', '#8996e5', '#4ecda5', '#eb4456', '#ffd96e', '#f4857a',  '#98d97d', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];

class Chart {
  constructor(config) {
    this.config = config;
    this.container = config.container;
    
    this.init();
  }
   
  init() {
    const _this = this;
    if(_this.config.showMapName) {
      if(_this.config.showMapName == 'china') {
        // require("echarts/map/js/" + _this.config.showMapName + ".js")
      }
      else {
        // require("echarts/map/js/province/" + _this.config.showMapName + ".js")
      }      
      
      _this.renderChart();		
    }
    else {
      _this.renderChart();
    }
  }

  resize() {
    this.myChart.resize();
  }
  
  renderChart() {    
    var _this = this;

    const myChart = echarts.init(this.container);
    myChart.clear();
    this.myChart = myChart;
   
    if(this.config.options && !tools.emptyObj(this.config.options)) {
      this.config.options.color = this.config.options.color || COLORS;
      myChart.setOption(this.config.options);
    }

    this.config.onResize && this.config.onResize(myChart);

    elementResizeEvent(this.container, () => {
      _this.myChart.resize();
    });

    let key;
    for ( key in this.config) {
      if(/^on[a-zA-Z]*$/.test(key)) {
        const even = key.substring(2).toLowerCase();
        myChart.on(even, function (params) {
          _this.config[key] && _this.config[key](params);
        });
      }
    }  
  }
}

export default Chart;
