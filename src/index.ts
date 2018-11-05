import "./scss/main.scss";
// import QueryFactory from "./queryfactory";
import axios, { AxiosResponse, AxiosError } from "../node_modules/axios/index";
import Service from "./service";

let loginBtn: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("login-btn")
);

loginBtn.addEventListener("click", TestAxios);

function TestAxios() {
  event.preventDefault();

  let service = new Service();
  service.get();
}

// loginBtn.addEventListener("click", ExecuteLogin);

// loginBtn.addEventListener("click", Login);

// function ExecuteLogin() {
//   let queryFactory = new QueryFactory();
//   this.response = queryFactory.getTest();
//   console.log(this.response);
// }
