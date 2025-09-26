import React, { useEffect, useState } from "react";

const CareerPage = () => {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", resume: "", jobId: "" });

  // Fetch job postings from backend
  useEffect(() => {
    fetch("http://localhost:5000/jobs") // Your admin job posting API
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error(err));

    fetch("http://localhost:5000/candidates") // Candidate applications list
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.error(err));
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit application
  const handleApply = async (e) => {
    e.preventDefault();
    if (!form.jobId) return alert("Please select a job to apply");

    const res = await fetch("http://localhost:5000/candidates/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Application Submitted!");
      setForm({ name: "", email: "", resume: "", jobId: "" });
    } else {
      alert("Error submitting application");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Career Page</h1>

      {/* Job Listings */}
      <h2 className="text-xl font-semibold mb-2">Available Jobs</h2>
      <table className="w-full border mb-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Job ID</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Department</th>
            <th className="border p-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td className="border p-2">{job.id}</td>
              <td className="border p-2">{job.title}</td>
              <td className="border p-2">{job.department}</td>
              <td className="border p-2">{job.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Application Form */}
      <h2 className="text-xl font-semibold mb-2">Apply for a Job</h2>
      <form onSubmit={handleApply} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <textarea
          name="resume"
          placeholder="Paste your resume here"
          value={form.resume}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          rows="5"
          required
        />
        <select
          name="jobId"
          value={form.jobId}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        >
          <option value="">Select Job</option>
          {jobs.map((job) => (
            <option key={job.id} value={job.id}>
              {job.title} ({job.department})
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>

      {/* Candidate Applications */}
      <h2 className="text-xl font-semibold mt-6 mb-2">My Applications</h2>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Job Applied</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td className="border p-2">{app.name}</td>
              <td className="border p-2">{app.email}</td>
              <td className="border p-2">{app.jobId}</td>
              <td className="border p-2">{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CareerPage;
