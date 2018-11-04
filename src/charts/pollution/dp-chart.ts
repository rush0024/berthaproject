import Echarts from "echarts";

export default class DpChart {
  constructor() {
    this.getPollutionChart();
  }

  getPollutionChart() {
    let Chart: HTMLDivElement = <HTMLDivElement>(
      document.getElementById("dp-chart")
    );

    let MyChart = Echarts.init(Chart);

    let option = {
      title: { text: "Dust Percentage" },
      tooltip: {},
      legend: { data: ["Pollution"] },
      xAxis: {
        data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"]
      },
      yAxis: {},
      itemStyle: {
        color: "#445351"
      },
      series: [
        {
          name: "Sales",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };
    MyChart.setOption(option);
  }
}
