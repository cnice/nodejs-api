module.exports = function(app, db) {
    app.post('/users', (req, res) => {
        // log name
        console.log(req.body);
        // You'll create your user here.
        res.send('Cris')
      });
};