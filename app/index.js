var express = require('express');
var request = require('request');

var app = express();

var PORT = 80;

app.get('/', function (req, res) {
    res.send('Hello world\n');
});

app.get('/list.json', function (req, res) {
    var answer;
    var options = {
        url: process.env.SERVER + "/api/1/get_all",
        headers: {
            'Authorization' : 'TOKEN key="' + process.env.TOKEN + '"',
            'X-Requested-With' : 'XMLHttpRequest',
        }
    };

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            answer = JSON.parse(body);
        }

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(answer.result.objects));
    })
});

app.listen(PORT);
