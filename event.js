const EventEmitter = require("events");
//const http = require("http");
/////////
// var number = 9;

// class sales extends EventEmitter{
//     constructor(){
//     super();
//  }
// }
const Emitter = new EventEmitter();

Emitter.on("hello",()=>{
	console.log("there was a newsales brother");

});


Emitter.on("hello",()=>{
	console.log("customer name:habte selassie zebeergiga");
	
});

Emitter.on("hello", stock=>{
    console.log("there is ${stock} another items remaining");
});
Emitter.emit("hello",9);

///////////////////////// web server
// const server = http.createServer();

// server.on("request",function(req,res){ 
//     console.log("request recieving");
//     res.end("requesting recieving");
// });

// server.on("request",function(req,res){
//     console.log("another");
//     res.end("another request");
// });

// server.on("close",function(){
// console.log("waiting request");

// });
// server.listen(8968,"127.0.0.1",function(){
//     console.log("server listening on port number 8968");
// });