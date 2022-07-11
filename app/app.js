"use strict"
// 모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// 라우터
const home = require("./src/routes/home"); //경로에 있는 js를 읽어오는것을 요청


// 앱 세팅
app.set("views","./src/views");
app.set("view engine", "ejs");
//자바스크립트 사용을 위한 설정
app.use(express.static(`${__dirname}/src/public`));


app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글,공백등과 같은 문자가 포함될 경우
app.use(bodyParser.urlencoded({extended : true}));

app.use("/",home); // use -> 미들웨어를 등록해주는 메서드.


module.exports = app;//www.js에서 호출하여 사용