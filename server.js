var express = require('express');
var bodyParser = require('body-parser')
var app = express();
// 解析 application/json
app.use(bodyParser.json()); 
// // 解析 application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded()); //(正常表单提交)

// get请求
app.get('/profile/:id/user/:name',function(req,res){
    console.dir(req.params);
    console.dir(req.query);
    const id = req.params.id;
    const name = req.params.name;
    res.send('当前页面的id是'+id+'name是'+name+'携带参数是'+req.query.list);
})

// post请求
app.post('/',function(req, res){
    console.dir(req.body);  
    res.send('post请求完成');
})
app.listen(3000)    