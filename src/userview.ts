import "./scss/userview.scss";
import Map from "../node_modules/ol/Map";
import View from "../node_modules/ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { transform } from "../node_modules/ol/proj";

import Echarts from "echarts";

import HealthChart from "./charts/health-chart";
import DpChart from "./charts/pollution/dp-chart";
import SpChart from "./charts/pollution/sp-Chart";
import OpChart from "./charts/pollution/op-chart";
// import FluorChart from "../charts/pollution/fluorChart";
// import CmpChart from "../charts/pollution/cmpChart";
// import OzChart from "../charts/pollution/ozChart";
// import SpChart from "../charts/pollution/spChart";

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: transform([9.7320104, 52.3758916], "EPSG:4326", "EPSG:3857"),
    zoom: 12
  })
});

console.log("new map" + map);

// let myChart = new HealthChart();

let dpChart = new DpChart();
let spChart = new SpChart();
let healthChart = new HealthChart();
let opChart = new OpChart();
// let fluorChart = new FluorChart();
// let cmpChart = new CmpChart();
// let ozChart = new OzChart();

// import LoginBackground from "../assets/LoginBackgroundPng.png";

// function loadBackground() {
//   // let backElement: HTMLDivElement = <HTMLDivElement>(
//   //   document.getElementById("image-background")
//   // );

//   let backElement = document.createElement("image-background");

//   const loginBackground = new Image();
//   loginBackground.src = LoginBackground;

//   backElement.appendChild(loginBackground);

//   return backElement;
// }

// document.body.appendChild(loadBackground());
// console.log("Ya es multipage csm!!!!");
