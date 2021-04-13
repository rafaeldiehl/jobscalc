const express = require('express');
const routes = express.Router();

const views = __dirname + "/views/";

const profile = {
  name: "Rafael",
  avatar: "https://github.com/rafaeldiehl.png",
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4
}

routes.get('/', (req, res) => {
  return res.render(views + 'index', { profile });
});

routes.get('/job', (req, res) => {
  return res.render(views + 'job');
});

routes.get('/job/edit', (req, res) => {
  return res.render(views + 'job-edit');
});

routes.get('/profile', (req, res) => {
  return res.render(views + 'profile', { profile });
});

module.exports = routes;