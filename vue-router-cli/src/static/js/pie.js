import echarts from 'echarts'
//基于准备好的dom，初始化echart实例
var myChart = echarts.init(document.getElementById('main'));
//指定图表的配置项和数据
app.title = '环形图';

option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a}<br/>{b}:{c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
  },
  series: [
    {
      name:'访问来源',
      type:'pie',
      radius:['50%','70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'blod'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data:[
        {value:335, name:'直接访问'},
        {value:310, name:'邮件营销'},
        {value:234, name:'联盟广告'},
        {value:135, name:'视频广告'},
        {value:1548, name:'搜索引擎'}
      ]
    }
  ]
}

myChart.setOption(option);
