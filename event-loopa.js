const fs   = require("fs");

setTimeout(function(){
    console.log("timer 1 finshing"),0});
setImmediate(function(){
    console.log("immidiate 1 finishing");
});

fs.readFile("text-file.txt",function(){
    console.log("i/o 1 finshing");
    console.log("_________________");

    setTimeout(function(){
    console.log("timer 1 finshing"),0});

    setTimeout(function(){
    console.log("timer 2 finshing"),3000});

     setImmediate(function(){
    console.log("immidiate 1 finishing");
});

});
console.log("normal finshing ");