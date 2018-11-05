// import Service from "./service";

// export default class QueryFactory {
//   _username: string;
//   _password: string;
//   _path: string = "https://berthapibeta20181025031131.azurewebsites.net/";

//   //   constructor(username: string, password: string) {
//   //     this._username = username;
//   //     this._password = password;
//   //   }

//   constructor() {}

//   async getTest() {
//     let service = new Service();
//     let response = await service.get(this._path);
//     console.log(response);
//   }

//   async login() {
//     let service = new Service();
//     let response = await service.getLogin(
//       this._path,
//       this._username,
//       this._password
//     );
//     console.log(response);
//   }
// }
