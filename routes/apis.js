var fibonacci = require('fibonacci-fast');
var Big = require('big.js');

module.exports = function(app, fs) {
    app.get('/getServerTime', function(req, res) {
        res.send('');
    });

    app.post('/calcFibonacci', function(req, res) {
        if (!req.body["n"]) {
            res.send({result:'Invalid request!'})
        }
        var n = req.body["n"];
        else if (/^\d+$/.test(n) == false) {
            res.send({result:'Input only number!'});
        }
        var nthNum = new Big(fibonacci.get(n).number);
        res.send({result:nthNum});
    });
}
