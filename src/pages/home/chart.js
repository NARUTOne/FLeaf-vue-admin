/**
 * 图表数据处理
 */

const chaptesChart = (data) => {
  const chaptesData = data.map((item, index) => {
    return [index, item.value, item.title];
  });

  const schema = [
    {text: '燃力指数', index: 1, name: 'hots'},
    {text: '篇章', index: 2, name: 'chaptes'}
  ];

  var itemStyle = {
    normal: {
      opacity: 0.8,
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
  };

  const option = {
    backgroundColor: '#404a59',
    grid: {
      x: '10%',
      x2: 150,
      y: '18%',
      y2: '10%'
    },
    tooltip: {
      padding: 10,
      backgroundColor: '#222',
      borderColor: '#777',
      borderWidth: 1,
      formatter: function (obj) {
        var value = obj.value;
        return  schema[0].text + '：' + value[1] + '<br>'
                + schema[1].text + '：' + value[2] + '<br>';
      }
    },
    xAxis: {
      type: 'value',
      name: '篇章',
      nameGap: 16,
      nameTextStyle: {
        color: '#fff',
        fontSize: 14
      },
      max: 31,
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#eee'
        }
      }
    },
    yAxis: {
      type: 'value',
      name: '燃力数',
      nameLocation: 'end',
      nameGap: 20,
      nameTextStyle: {
        color: '#fff',
        fontSize: 16
      },
      axisLine: {
        lineStyle: {
          color: '#eee'
        }
      },
      splitLine: {
        show: false
      }
    },
    visualMap: [
      {
        left: 'right',
        top: '10%',
        dimension: 1,
        min: 0,
        max: 100,
        itemWidth: 30,
        itemHeight: 120,
        calculable: true,
        precision: 0.1,
        text: ['圆形大小：燃力值'],
        textGap: 30,
        textStyle: {
          color: '#fff'
        },
        inRange: {
          symbolSize: [10, 70]
        },
        outOfRange: {
          symbolSize: [10, 70],
          color: ['rgba(255,255,255,.2)']
        },
        controller: {
          inRange: {
            color: ['#c23531']
          },
          outOfRange: {
            color: ['#444']
          }
        }
      }
    ],
    series: [
      {
        name: '海贼王',
        type: 'scatter',
        itemStyle: itemStyle,
        data: chaptesData
      }
    ]
  };

  return option;
};

export {
  chaptesChart
};