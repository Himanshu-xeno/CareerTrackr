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
    if(!job) return res.status(404).json({error : 'Job not found'});
    res.json(job);
  }catch(err){
    res.status(500).json({error : err.message});
  }
});

//PATCH : partial update of Job
router.patch("/:id", async (req, res) => {
  const { id } = req.params;

  //Validate ObjectId
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error : 'Invalid job id'});
  }

  //Allowed fields for updating 
  const allowed = ['title', 'company', 'location', 'status', 'priority', 'dateApplied'];
  const updates = {};
  
  for(const key of allowed){
    if (req.body[key] !== undefined) updates[key] = req.body[key];
  }

  //accept `date` from client as alias for dateApplied 
  if(req.body.date !== undefined) updates.dateApplied = req.body.date;

  try{
    const updated = await Job.findByIdAndUpdate(id, updates, {
      new : true,
      runValidators : true,
      context : 'query'   //Helps validators run properly on update
    });
    if(!updated) return res.status(404).json({error : 'Job not found'});
    res.json(updated);
  }catch(err){
    if(err.name === 'ValidationError') return res.status(400).json({error : err.message});
    res.status(500).json({error : err.message});
  }
});

//DELETE : remove job by id 
router.delete('/:id', async (req,res) => {
  const { id } = req.params;

  //Validate ObjectID
   if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid job id' });
  }
  try{
    const deleted = await Job.findByIdAndDelete(id);
    if(!deleted) return res.status(404).json({error : 'Job not found'});
    res.json({message : 'Deleted', id : deleted._id});
  } catch(err){
    res.status(500).json({error : WriteError.message});
  }
});

export default router;
