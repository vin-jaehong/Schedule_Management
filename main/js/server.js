/* 모듈 가져오기 */
var express = require("express");
var fs = require("fs");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var queryString = require("querystring");

var app = express();

var connect = mysql.createConnection({
    host        : "localhost",
    user        : "root",
    password    : "111111",
    database    : "testdb"
});

connect.connect();

// 불러올 html 파일의 경로 지정
app.set("views","../html");

// view에 html파일을 출력 할 시 ejs 형식으로 출력하기 위한 작업 
app.set("view engine","ejs");
app.engine("html",require("ejs").renderFile);

// css, js 파일과 html 파일을 연결시켜주기 위한 작업.
app.use(express.static("../../main"));

/*POST방식으로 넘어온 경로를 라우팅 하기 위한 작업. 암호화 된 것을 복호화 해줌 */
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/* get 방식에서 form submit 값 가져오기(querystring 값) -  req.query.?  */
// post 방식에서 form submit 값 가져오기 - req.body.? ( 위에 코드 "복호화 작업" 후에 가능 , 위 과정후에 body 메소드 생성됨
                                                        // submit 값에 대한 객체가 들어있음 )

// login view
app.get("/", function(req,res)
{
    res.render("login.html");
});
// main view
app.post("/account", function(req,res)
{
    res.render("index.html");
});


// 서버가 3000 port를 바라보게 하는 작업.
app.listen(3000,function()
{
    console.log("connected server...! port : 3000 ");
})

