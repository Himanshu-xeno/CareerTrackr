import mongoose from "mongoose";

// Define the Job schema
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // job must have a title
  },
  company: {
    type: String,
    required: true, // Company must have a name
  },
  location: {
    type: String,
    required: true, // Location cannot be empty
  },
  status: {
    type: String,
    enum: ["Applied", "Interview", "Offer", "Rejected"], // Only allow these values
    default: "Applied",
  },
  priority: {
    type: String,
    enum: ["High", "Medium", "Low"],
    default: "Medium",
  },
  dateApplied: {
    type: Date,
    default: Date.now, // if not given, take current date
  },
});

// Create the model
const Job = mongoose.model("Job", jobSchema);

// ✅ Export in ESM style
export default Job;
