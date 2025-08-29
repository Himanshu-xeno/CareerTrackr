import express from 'express';
import Job from "../models/Job.js";
import mongoose from 'mongoose';

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

//GET : fetch single job by id 
router.get('/:id', async (req,res) => {
  const {id} = req.params;

  //Validate ObjectId 
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error : 'Invalid job id'});
  }
  try{
    const job = await Job.findById(id);
    if(!job) return res.status(404).json({erro : 'Job not found'});
    res.json(job);
  }catch(err){
    res.status(500).json({error : err.message});
  }
});

export default router;
