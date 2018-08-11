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
    var reqType = req.body.reqType;
    delete req.body.reqType

    if(reqType === 'getItem') {
        var dbPar = req.body;

        docClient.get(dbPar, function(err, data){
            if(err) {
                console.log(err);
            }
            else {
                console.log('success');
                res.json(data.Item);
            }
        });
    }
    else {
    }

    
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));