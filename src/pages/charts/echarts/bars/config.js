/**
 * 图表数据处理
 */
import tools from 'utils/tools';

const {isObject, isArray} = tools;

const simpleBarsCfg = (obj) => {
  const {data} = obj;
  const optData = isArray(data) ? [...data] : [];
  // console.log(optData);
  const option = {
    toolbox: {
      show: true,
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: optData,
      type: 'bar'
    }]
  };

  return option;
};

const pireBarsCfg = (obj) => {
  const {data} = Object.assign({data: []}, obj);
  const arr = isArray(data) ? [...data] : [];
  const legend = ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'];
  const optData = arr.map((item, i) => {
    if (!isObject(item)) {
      legend.push('');
      return {};
    }

    item.type = 'bar';
    item.name = legend[i];
    if (i> 3 && i < 8) {
      item.stack = '堆叠';
      item.barWidth = 6;
    }
    return item;
  });

  // console.log(optData);

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: legend
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: optData
  }; 

  return option;
};

const fallBarsCfg = () => {
  const option = {
    title: {
      text: '阶梯瀑布图',
      subtext: 'From ExcelHome',
      sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        var tar;
        if (params[1].value != '-') {
          tar = params[1];
        }
        else {
          tar = params[0];
        }
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      }
    },
    legend: {
      data: ['支出', '收入']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '消费',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          },
          emphasis: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          }
        },
        data: [0, 900, 1245, 1530, 1376, 1376, 1511]
      },
      {
        name: '收入',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        data: [900, 345, 393, '-', '-', 135, 178]
      },
      {
        name: '支出',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'bottom'
          }
        },
        data: ['-', '-', '-', 108, 154, '-', '-']
      }
    ]
  };
  
  return option;
};

const pireRightBarsCfg = (obj) => {
  const {data} = Object.assign({data: []}, obj);
  const arr = isArray(data) ? [...data] : [];
  const legend = ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他'];
  const optData = arr.map((item, i) => {
    if (!isObject(item)) {
      legend.push('');
      return {};
    }
    item.type = 'bar';
    item.name = legend[i];
    item.stack = '堆叠';
    item.barWidth = 12;
    item.label =  {
      normal: {
        show: true,
        position: 'insideRight'
      }
    };
    return item;
  });

  // console.log(optData);

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: legend
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: [
      {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    xAxis: [
      {
        type: 'value'
      }
    ],
    series: optData
  }; 

  return option;
};

export {
  simpleBarsCfg,
  pireBarsCfg,
  fallBarsCfg,
  pireRightBarsCfg
};