var express = require('express');
var request = require('request');

var app = express();

var PORT = 80;

app.use(express.static('public'));
app.use("/node_modules", express.static("node_modules"));

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

        var result = [];
        for (var i = 0; i < answer.result.objects.length; i++) {
            result.push({
                path : answer.result.objects[i].path,
                status : answer.result.objects[i].status
            });
        }

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result));
    })
});

app.listen(PORT);
