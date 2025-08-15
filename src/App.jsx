import {useState} from "react";
import Navbar from "./components/Navbar";
import AllApplications from "./pages/AllApplications";

//Day 1 : Single page (routing comes later)
export default function App(){
  const [applications] = useState([
    {
      id : "g-1",
      company : "Google",
       title: "Frontend Intern",
      status: "Applied",
      dateApplied: "2025-08-10",
      notes: "Referred by college alum",
    },
     {
      id: "ms-2",
      company: "Microsoft",
      title: "Backend Developer",
      status: "Interview",
      dateApplied: "2025-08-08",
      notes: "HR call done; tech round pending",
    },
    {
      id: "amz-3",
      company: "Amazon",
      title: "Fullstack Engineer",
      status: "Offer",
      dateApplied: "2025-08-01",
      notes: "Offer evaluation in progress",
    },
    {
      id: "ub-4",
      company: "Uber",
      title: "Mobile Engineer",
      status: "Rejected",
      dateApplied: "2025-07-29",
      notes: "No DS round cleared",
    },
  ]);

  return(
    <div className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* This is a Navbar components */}
      <Navbar/>
      
      {/* Main section of Application */}
      <main className="max-w-4xl mx-auto p-4">
        
        {/* The content of All Applications gets rendered here */}
        <h1 className="text-2xl font-semibold mb-4">All Applications</h1>
          <AllApplications applications={applications} />
      </main>

    </div>
  )
}