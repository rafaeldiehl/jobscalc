const express = require('express');
const routes = express.Router();

const views = __dirname + "/views/";

const profile = {
  name: "Rafael",
  avatar: "https://github.com/rafaeldiehl.png",
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4,
  "value-hour": 75
}

const Job = {
  data: [
    {
      id: 1,
      name: "Pizzaria Guloso",
      "daily-hours": 3,
      "total-hours": 1,
      createAt: Date.now()
    },
    {
      id: 2,
      name: "OneTwo Project",
      "daily-hours": 3,
      "total-hours": 47,
      createAt: Date.now()
    }
  ],
  controllers: {
    index: (req, res) => {
      const updatedJobs = Job.data.map((job) => {
        const remaining = Job.services.remainingDays(job);
        const status = remaining <= 0 ? 'done' : 'progress';
    
        return {
          ...job,
          remaining,
          status,
          budget: profile["value-hour"] + Number(job["total-hours"])
        }
      });
    
      return res.render(views + 'index', { profile, jobs: updatedJobs });
    },
    create: (req, res) => {
      return res.render(views + 'job');
    },
    save: (req, res) => {
      const lastId = Job.data[Job.data.length - 1]?.id || 1;
    
      Job.data.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        createAt: Date.now() // atribuindo data de hoje
      });
    
      return res.redirect('/');
    }
  },
  services: {
    remainingDays: (job) => {
      const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();
      const createdDate = new Date(job.createAt);
    
      const dueDay = createdDate.getDate() + Number(remainingDays);
      const dueDate = createdDate.setDate(dueDay);
    
      const timeDiffInMs = dueDate - Date.now();
    
      const dayInMs = 1000 * 60 * 60 * 24;
      const dayDiff = (timeDiffInMs / dayInMs).toFixed();
    
      return dayDiff;
    }
  }
}


routes.get('/', Job.controllers.index);

routes.get('/job', Job.controllers.create);

routes.post('/job', Job.controllers.save);

routes.get('/job/edit', (req, res) => {
  return res.render(views + 'job-edit');
});

routes.get('/profile', (req, res) => {
  return res.render(views + 'profile', { profile });
});

module.exports = routes;