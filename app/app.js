"use strict";
// express를 써야하는 이유 일반적으로 코드를 짜면 너무 길어지고, 복잡해짐

// const http = require("http");
// const app = http.createServer((req, res) => {
//   res.writeHead(200, {                                          /* 글자가 깨지지 않도록 한국어로 설정 */
//     "Content-Type": "text/HTMLAllCollection; charset=utf-8",
//   });
//   if (req.url === "/") {
//     res.end("여기는 루트 입니다.");
//   } else if (req.url === "/login") {
//     res.end("여기는 로그인 화면입니다.");
//   }
// });

// app.listen(3001, () => {
//   console.log("http로 가동된 서버입니다.");
// });

// 하드 코딩 한것
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send(`
//   <!DOCTYPE html>
//     <html lang="ko">
//       <head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Document</title>
//       </head>
//       <body>
//           여기는 루트입니다.
//       </body>
//     </html>
//   `);
// });

// app.get("/login", (req, res) => {
//   res.send(`
//   <!DOCTYPE html>
//     <html lang="ko">
//       <head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Document</title>
//       </head>
//       <body>
//           <input type="text" placeholder = "아이디"><br>
//           <input type="text" placeholder = "비밀번호"><br>
//           <button>로그인</button>
//       </body>
//     </html>
//   `);
// });

// app.listen(3000, function () {
//   console.log("서버 가동");
// });

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home"); //루트 경로로 들어오면 home으로 보내줌. (만들어 둔 자바스크립트 파일을 require해서 불러주는 것.)
//home 폴더에 있는 자바스크립트를 읽어와 달라고 하는 것.

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;
