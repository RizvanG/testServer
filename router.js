import Router from "express";
import News from "./model/News.js";
import Events from "./model/Events.js";
import Values from "./model/Values.js";
import Scenarios from "./model/Scenarios.js";
import WeekData from "./model/WeekData.js";

const router = new Router();

router.get('/news', async (req, res) => {
    try {
      const listNews = await News.find();
      res.json(listNews);
    } catch (error) {
      console.log(error);
    }
  })

router.get('/events', async (req, res) => {
    try {
        const listEvents = await Events.find();
        res.json(listEvents); 
    } catch (error) {
        console.log(error);
    }
})

router.get('/values', async (req, res) => {
    try {
        const listValues = await Values.find();
        res.json(listValues);
    } catch (error) {
        console.log(error);
    }
})

router.get('/scenarios', async (req, res) => {
    try {
        const scenarios = await Scenarios.find();
        res.json(scenarios);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/week', async (req, res) => {
    try {
      const weekData = await WeekData.find();
      res.json(weekData); 
    } catch (error) {
      console.log(error);
    }
  })

export default router;