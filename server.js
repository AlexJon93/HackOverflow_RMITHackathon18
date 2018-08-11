const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const aws = require('aws-sdk');
aws.config.loadFromPath('config.json');

const app = express();
const docClient = new aws.DynamoDB.DocumentClient();

app.use(bodyParser.json());

app.get('*', (req, res) => {
    var fileName = req.params[0];
    console.log(fileName);
    res.sendFile(path.join(__dirname, 'client', req.params[0]));
});

app.post('*', (req, res) => {
    var user = req.body.user;
    var password = req.body.password;
    var dbPar = {
        TableName: "User",
        Key:{"user_id" : user}
    }

    console.log('Received ' + req.body.user + ' ' + req.body.password);

    docClient.get(dbPar, function(err, data){
        if(err) {
            console.log(err);
        }
        else {
            console.log(data.Item);
            if(data.Item.password === password) {
                console.log('success');
            }
            else {
                console.log(data.password + ' != ' + password);
            }
        }
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));