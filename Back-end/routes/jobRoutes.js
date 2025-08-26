import express from 'express';
import Job from "../models/Job.js";

const router = express.Router();

//POST : Add a new job 
router.post("/", async (req,res) => {
  try {
    const { title, company, location, status, priority, date } = req.body;

    const newJob = new Job({
      title,
      company,
      location,
      status,
      priority,
      dateApplied: date,   // 🔑 match schema field
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//GET : fetch all jobs 
router.get("/", async (req,res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error : err.message });
  }
});

export default router;
