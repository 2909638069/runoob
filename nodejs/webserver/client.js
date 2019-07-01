var http = require('http');

var request = http.request(
    {
        host: 'localhost',
        port: '8080',
        path: '/index.html'
    },
    
    function (response){
        var body = '';
        response.on('data',
            function (data) {
                body += data;
            }
        );
        response.on('end', 
            function () {
                console.log(body);
            }
        );
    }
);

request.end();

