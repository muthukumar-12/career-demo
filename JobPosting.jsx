import React, { useState } from "react";

const JobPosting = () => {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    jobType: "",
    location: "",
    salary: "",
    openings: "",
    deadline: "",
    description: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", formData);
    alert("Job Posted Successfully ✅");
    setFormData({ title: "", department: "", location: "", description: "" });
  };

  return (
    <div className="text-justify rounded-xl shadow-md max-w-lg  ">
  <h2 className="text-4xl font-bold text-blue-400 m-6">Post a New Job</h2>

  <form onSubmit={handleSubmit} className="bg-white p-6">
    {/* Job Title */}
    <div className="mb-4">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter job title"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    {/* Department */}
    <div className="mb-4">
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Enter department"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    {/* Location */}
    <div className="mb-4">
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Enter location"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    {/* Job Type */}
    <div className="mb-4">
      <select
        name="jobType"
        value={formData.jobType}
        onChange={handleChange}
        className="px-4 py-2 w-full rounded-md border focus:ring-2 focus:ring-blue-300"
        required
      >
        <option value="">Select Job Type</option>
        <option value="Internship">Internship</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Contract">Contract</option>
      </select>
    </div>

    {/* Salary */}
    <div className="mb-4">
      <input
        type="text"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        placeholder="Enter salary range (e.g. ₹5L – ₹8L / year)"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Openings */}
    <div className="mb-4">
      <input
        type="number"
        name="openings"
        value={formData.openings}
        onChange={handleChange}
        placeholder="Number of openings"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Deadline */}
    <div className="mb-4">
      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Description */}
    <div className="mb-4">
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter job description"
        rows="4"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    {/* Requirements */}
    <div className="mb-4">
      <textarea
        name="requirements"
        value={formData.requirements}
        onChange={handleChange}
        placeholder="Enter job requirements (skills, qualifications, etc.)"
        rows="3"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-orange-400 font-bold text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
    >
      Post Job
    </button>
  </form>
</div>

  );
};

export default JobPosting;
