const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const aws = require('aws-sdk');
aws.config.loadFromPath('config.json');

const app = express();
const docClient = new aws.DynamoDB.DocumentClient();

app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', req.params[0]));
});

app.post('*', (req, res) => {
    console.log('req made');
    var reqType = req.body.reqType;
    console.log(req.body);
    delete req.body.reqType;

    if(reqType === 'getItem') {
        console.log('getting item');
        var dbPar = req.body;

        docClient.get(dbPar, function(err, data){
            if(err) {
                console.log(err);
            }
            else {
                res.json(data.Item);
            }
        });
    }
    else if (reqType === 'addItem'){
        var dbPar = req.body;
        console.log('adding item');

        docClient.put(dbPar, function(err, data){
            if(err){
                console.log(err);
            }
            else {
                res.json(data);
                // console.log(data);
            }
        });
    }
    else if(reqType === 'scanTable'){
        var dbPar = req.body;

        docClient.scan(dbPar, function (err, data) {
            if(err) {
                console.log(err);
            }
            else {
                // console.log(data);
                res.json(data);
            }
        });
    }
    else if(reqType === 'queryTable'){
        var dbPar = req.body;


    }

    
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));