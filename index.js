

// const read=require('readline-sync');

// const { hey } = require("./module");


// const value=read.question('enter a Number');

// console.log(value);


// const r=require('readline-sync');

// num1=r.question('enter a 2 number');

// num2=r.question('');

// if(num1>num2){
//     console.log("Largest is "+num2);
// }
// else{
//     console.log("Smallest is "+num1)

// };


// const result=require('readline-sync');

//  const limit=result.question('enter a limit');


//  for(let i=1;i<=limit;i++){
//     for(let j=1;j<=i;j++){
//         console.log("*")
//     }
//     console.log(" ");
//  }


         //npm calling server

// const uc=require('upper-case')      //requre+upperce call In server

// const npmtesting=uc.upperCase("hello athif")

// console.log(npmtesting); 





       //module

// const hello=require("./module");
// hello.hello();



// console.log(hello.hey)






               // Node server creation


// const http=require('http')


// http.createServer(hello).listen(7000)

// function hello(req,res){
//     res.write('hello Athif welcome to the real would')
//     res.end()

// }

// another writing method

// http.createServer(function(req,res){
//     res.write('hello Athif welcome to the real would')
//      res.end()
// }).listen(7000)


// call a  file in server 


// const http=require('http')
// const fs=require('fs')

// http.createServer(function(req,res){
//     fs.readFile('testing.html',function(err,data){ 
//         res.writeHead(200,{'content-type':'text/html'})    //200 is a http code
//         res.write(data)
//         res.end();
        

//     })
  

// }).listen(7000) 





















// const testing=["a","b","c"];

// const testing1=["d","e","c"];

// result=[...testing,...testing1];
// console.log(result);

//  const intervel =setInterval(()=>{
//     console.log("running");
// },100)


// setTimeout (()=>{
//     clearInterval(intervel)
// },3000)


// console.log(global)

// console.log(__filename)

// const path=require("path");
// console.log(path);

// Eventemiter

// const Eventemiter=require("events");
// const emitter=new Eventemiter();
// emitter.on("message",(data)=>{
//     console.log(data.text);
// });

// emitter.emit("message",{text:"user loged"});



const http=require("http");

const fs=require('fs');

http.createServer(function(req,res){
       if(req.url==='/'){
              fs.readFile('testing.html',function(err,hai){
                     res.writeHead(200,{'content-type':'text/html'})
                     res.write(hai)
                     res.end()

              })
       }else if(req.url==='/loging'){
              res.write('loging')
              res.end()
       }else{
              res.writeHead('404')
              res.write('error')
              res.end()

       }

   

}).listen(7000,()=>console.log("server started")
)





