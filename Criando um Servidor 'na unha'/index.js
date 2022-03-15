const http = require('http');

let server =  http.createServer((req,res)=> {

    console.log('URL', req.url , 'é isso ai');
    console.log('METHOD', req.method);

    switch (req.url){

        case '/':
    
        res.statuscode = 200;

        res.setHeader('Content-Type', 'text/html');
        res.end('<h1> Status 200 | Olá!  </h1>');
        break;

        case "/users":

        res.statuscode =200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({

            users: [{
                name: 'Lucas',
                email: 'lcristovam@outlook.com',
                Idade:'24'

            }]
        }));
    }

});

server.listen(3000, '127.0.0.1', ()=> {

    console.log("Servidor rodando!")
    console.log("Index.js executado e agora o servidor está escutando na porta 3000")

});





