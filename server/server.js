const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send({
        signal: 'Page exists',
        name: 'v1'
    });
});

app.listen(3000);

module.exports = {
    app
}