let http = require('http');
let fs = require("fs");

let counter = 0;
http.createServer(handlerCallBack).listen(8099)

function handlerCallBack (request, response) {   
    switch (request.url) {
        case "/":
            fs.readFile("responseFile.json", "utf8", (err, data) => {
                if (err) {
                    response.writeHead(400, 
                        {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"});
                }

                if (data) {
                    response.writeHead(200, 
                        {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"});
                    response.end(data);
                }
            })
            return;

        case "/security_settings":
            fs.readFile("responseFile.json", "utf8", (err, data) => {
                if (err) {
                    response.writeHead(400, 
                        {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"});
                }

                if (data) {
                    let dataObj = JSON.parse(data);
                    let responseDataObj = dataObj.content.securitySettings;
                    let responseData = JSON.stringify(responseDataObj);

                    response.writeHead(200, 
                        {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"});
                    response.end(responseData);
                }
            })
            return;

        case "/traiding_sessions":
            fs.readFile("responseFile.json", "utf8", (err, data) => {
                if (err) {
                    response.writeHead(400, 
                        {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"});
                }

                if (data) {
                    let dataObj = JSON.parse(data);
                    let responseDataObj = dataObj.content.traidingSessions;
                    let responseData = JSON.stringify(responseDataObj);

                    response.writeHead(200, 
                        {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"});
                    response.end(responseData);
                }
            })
            return;

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