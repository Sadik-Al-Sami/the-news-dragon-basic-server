const express = require('express');
var cors = require('cors');
const categories = require('./data/categories.json');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is alive')
});

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`);
})