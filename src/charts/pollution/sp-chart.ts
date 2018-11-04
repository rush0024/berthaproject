import Echarts from "echarts";

export default class SpChart {
  constructor() {
    this.getSpChart();
  }

  getSpChart() {
    let SpChart: HTMLDivElement = <HTMLDivElement>(
      document.getElementById("sp-chart")
    );

    let MySpChart = Echarts.init(SpChart);

    let option = {
      series: [
        {
          name: "Sulphur Percentage",
          type: "pie",
          radius: "55%",
          roseType: "angle",
          backgroundColor: "#2c343c",
          itemStyle: {
            emphasis: {
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },
          data: [
            { value: 400, name: "Searching Engine" },
            { value: 335, name: "Direct" },
            { value: 310, name: "Email" },
            { value: 274, name: "Alliance Advertisement" },
            { value: 235, name: "Video Advertisement" }
          ]
        }
      ]
    };
    MySpChart.setOption(option);
  }
}
