const express = require('express');
const bodyParser = require('body-parser');
const App = express();

const userExist = {
    login: 'admin',
    pass: 'admin'
};

App.use(bodyParser.json());

App.post('/api/user', (req, res) => {
    console.log(req.body);
    const login = req.body.login;
    const pass = req.body.pass;

    if (userExist.login === login && userExist.pass === pass) {
        return res.json({
            check: 'exist'
        });
    }
    else {
        console.log('false');
        return res.json({
            check: 'not exists'
        });
    }
});

App.listen(4000, () => {
    console.log('server is started');
});