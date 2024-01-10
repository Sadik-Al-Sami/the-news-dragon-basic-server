const express = require('express');
var cors = require('cors');
const categories = require('./data/categories.json');
const news = require('./data/news.json');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Dragon is alive');
});
app.get('/categories', (req, res) => {
  res.send(categories);
});
//! Gets all news
app.get('/news', (req, res) => {
  res.send(news);
});
//! Gets a specific news
app.get('/news/:id', (req, res) => {
  id = req.params.id;
  const selectedNews = news.find((singleNews) => singleNews._id === id);
  res.send(selectedNews);
});
//! Gets news by id
app.get('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => parseInt(n.category_id) === id);
    res.send(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`Dragon API is running on port: ${port}`);
});
