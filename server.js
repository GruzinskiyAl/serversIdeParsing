let http = require('http')
let counter = 0;
let fileData = "";
http.createServer(handlerCallBack).listen(8099)//, '10.1.134.13');


// let server = http.createServer(handlerCallBack);
// let currentLocalIp = '10.1.134.13'
// server.listen(8092)//, currentLocalIp);

function handlerCallBack (request, response) {   
    // response.setHeader("Access-Control-Allow-Origin", '*');
    switch (request.url) {
        case "/":   
            // response.setHeader("Access-Control-Allow-Origin", '*');
            response.writeHead(200, {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"});
            response.end(JSON.stringify({1:"lala"})); 
        default:
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end(`{"lala":'Not found'}`)
    }
}


// function retrieveJSON (data) {
//     var fs = require('fs');

//     return fs.readFile('responseFile.json', 'utf8', (err, content) => { //readFile - асинхронно
//         console.log('start reading');
//     if (err){
//         console.log(err.stack);
//         return;
//     }
//         console.log('File read');

//     })
    
// }

console.log('Server code end');