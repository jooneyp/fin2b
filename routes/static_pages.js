module.exports = function(app, fs) {
    app.get('/', function(req, res) {
        res.render('home');
    });

    app.get('/home', function(req, res) {
        res.render('home', {layout: false});
    })

    app.get('/changePassword', function(req, res) {
        res.render('change-password', {layout: false});
    })

    app.get('/calcFibonacci', function(req, res) {
        res.render('fibonacci', {layout: false});
    })
}
