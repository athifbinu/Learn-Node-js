

// const read=require('readline-sync');

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


// const uc=require('upper-case')      //requre+upperce call In server

// const npmtesting=uc.upperCase("hello athif")

// console.log(npmtesting); 

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


const http=require('http')
const fs=require('fs')

http.createServer(function(req,res){
    fs.readFile('testing.html',function(err,data){ 
        res.writeHead(200,{'content-type':'text/html'})    //200 is a http code
        res.write(data)
        res.end();
        

    })
  

}).listen(7000) 




