var express = require('express'),
    app = express();
    

app.get('/stats', function(req, res) {
    res.send('Story Game');
})