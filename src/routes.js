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

const jobs = [
  {
    id: 1,
    name: "Pizzaria Guloso",
    "daily-hours": 2,
    "total-hours": 60,
    createAt: Date.now() 
  },
  {
    id: 2,
    name: "OneTwo Project",
    "daily-hours": 3,
    "total-hours": 47,
    createAt: Date.now()
  }
];

routes.get('/', (req, res) => {
  return res.render(views + 'index', { profile, jobs });
});

routes.get('/job', (req, res) => {
  return res.render(views + 'job');
});

routes.post('/job', (req, res) => {
  const lastId = jobs[jobs.length - 1]?.id || 1;

  jobs.push({
    id: lastId + 1,
    name: req.body.name,
    "daily-hours": req.body["daily-hours"],
    "total-hours": req.body["total-hours"],
    createAt: Date.now() // atribuindo data de hoje
  });

  console.log(jobs);
  return res.redirect('/');
});

routes.get('/job/edit', (req, res) => {
  return res.render(views + 'job-edit');
});

routes.get('/profile', (req, res) => {
  return res.render(views + 'profile', { profile });
});

module.exports = routes;