import JobCard from "../components/JobCard";

export default function CareerPage() {
  const jobs = [
    { title: "Frontend Developer", location: "Remote",rate:"  ₹70/hour to ₹80/hour on W2", type: "Full-Time" },
    { title: "Backend Developer", location: "Bangalore",rate: "  ₹70/hour to ₹80/hour on W2", type: "Full-Time" },
    { title: "UI/UX Designer", location: "Remote", rate:" $65/hour to ₹70/hour on W2 ",type: "Internship" },
    { title: "Project Manager", location: "Chennai, India",rate:"  ₹70/hour to $80/hour on W2" ,type: "Full-Time" },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 text-center">
        <h1 className=" text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
        <p className=" text-lg max-w-2xl mx-auto">
          We’re looking for passionate individuals to grow with us. Explore exciting career opportunities below.
        </p>
      </section>
 
      <main className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Open Positions</h2>

      
        <div className="grid md:grid-cols-1  gap-5">
          {jobs.map((job, index) => 
          (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </main>
    </div>
  );
}
