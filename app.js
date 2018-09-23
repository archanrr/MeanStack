var express=require('express');
var bodyparser=require('body-parser');
var app=express();
app.use(bodyparser.urlencoded({ extended: true }));
app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});
app.post('/login',function(req,res){
	console.log(req.body.username);
})
app.get('/login',function(req,res){
	res.redirect('/');
})
app.listen(3000,function(){
	console.log("Welcome Archan, Server is running in the port 3000");
})