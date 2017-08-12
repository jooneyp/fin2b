var fibonacci = require('fibonacci-fast');
var Big = require('big.js');

module.exports = function(app, fs) {
    app.get('/getServerTime', function(req, res) {
        res.send('');
    });

    app.post('/calcFibonacci', function(req, res) {
        console.log(req.body)
        if (!req.body["n"]) {
            res.send({result:'Invalid request!'})
        } else if (/^\d+$/.test(req.body["n"]) == false) {
            res.send({result:'Input only number!'});
        }
        var n = req.body["n"];
        console.log("Received n = " + n);
        var nthNum = new Big(fibonacci.get(n).number);
        res.send({result:nthNum});
    });
}
