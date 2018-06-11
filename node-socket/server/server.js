const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.port || 3000;

const app = express();

app.use(express.static(publicPath));

//console.log(__dirname + '/../public');

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});