/**
 * 图表数据处理
 */
import tools from 'utils/tools';

const {isObject, isArray} = tools;

const simpleBarsCfg = (obj) => {
  const {data} = obj;
  const optData = isArray(data) ? data : [];
  // console.log(optData);
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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

export {
  simpleBarsCfg
};