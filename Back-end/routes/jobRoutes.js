const express = require("express");
const Job = require("../models/Job");

const router = express.Router();

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ date: -1 }); // latest first
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST add a new job
router.post("/", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.json(savedJob);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
