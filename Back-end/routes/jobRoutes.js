import express from 'express';

const router = express.Router();

//Simple test route 
router.get("/", (req,res) => {
  res.send("Jobs API is working");
});


//POST : Add a new job 
router.post("/", async (req,res) => {
  try{
    const{title, company, location, status, priority, date} = req.body;

    //Create a new Job document
    const newJob = new Job({
      title,
      company,
      location,
      status,
      priority,
      date,
    });

    //save to DB 
    const savedJob = await newJob.save();

    //Send back the saved job
    res.status(201).json(savedJob);
  }catch(err){
    res.status(500).json({error:err.message});
  }
});

export default router;