import React, { useState } from "react";
import Button from "./Button";
import jsPDF from "jspdf";

const CandidateCard = ({ candidate }) => {
  const [open, setOpen] = useState(false);

  const handleViewResume = () => {
    setOpen(true);
  };

  const handleDownloadResume = (candidate) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text(candidate.name, 20, 20);

  doc.setFontSize(12);
  doc.text(`Email: ${candidate.email}`, 20, 30);
  doc.text(`Phone: ${candidate.phone}`, 20, 40);
  doc.text(`Applied Role: ${candidate.role}`, 20, 50);

  doc.text("Skills:", 20, 65);
  candidate.skills.forEach((skill, i) => {
    doc.text(`- ${skill}`, 25, 75 + i * 10);
  });

  doc.text("Experience:", 20, 120);
  doc.text(candidate.experience, 25, 130);

  doc.save(`${candidate.name}_Resume.pdf`);
};
  return (
    <>
       
      <div className="border rounded-lg shadow-sm p-4 mb-4 flex justify-between items-center hover:shadow-md transition">
        <div>
          <h3 className="text-lg font-semibold text-orange-400">{candidate.name}</h3>
          <p className="text-sm text-gray-500">{candidate.email}</p>
          <p className="text-sm text-gray-500">Applied for: {candidate.role}</p>
        </div>

        <div>
          <Button type="button" variant="primary2" onClick={handleViewResume}>
            View 
          </Button>
        </div>
      </div>
 

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-3/4 max-w-2xl p-6 shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-red-600 font-bold"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {/* Resume Content */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{candidate.name}</h2>
            <p className="text-gray-600">{candidate.email}</p>
            <p className="text-gray-600">Phone: {candidate.phone}</p>
            <hr className="my-4" />

            <h3 className="text-xl font-semibold text-gray-700">Location</h3>
            <p className="mb-4">{candidate.location}</p>

            <h3 className="text-xl font-semibold text-gray-700">Job Type</h3>
            <p className="mb-4">{candidate.job}</p>

            <h3 className="text-xl font-semibold text-gray-700">Applied Role</h3>
            <p className="mb-4">{candidate.type}</p>

            <h3 className="text-xl font-semibold text-gray-700">Skills</h3>
            <ul className="list-disc list-inside mb-4">
              {(candidate.skills || []).map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-700">Experience</h3>
            <p>{candidate.experience}</p>

            <div className="mt-4">
              <Button type="button" variant="secondary" onClick={handleDownloadResume}  className="hover:bg-blue-600 hover:scale-105 transition">
                Download
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CandidateCard;
