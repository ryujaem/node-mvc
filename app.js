"use strict"
// 모듈
const express = require("express");
const app = express();

// 라우터
const home = require("./routes/home"); //경로에 있는 js를 읽어오는것을 요청

// 앱 세팅
app.set("views","./views");
app.set("view engine", "ejs");

app.use("/",home); // use -> 미들웨어를 등록해주는 메서드.

module.exports = app;//www.js에서 호출하여 사용