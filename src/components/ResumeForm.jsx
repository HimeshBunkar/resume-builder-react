import React from 'react';

function ResumeForm({ resumeData, handleChange }) {
  return (
    <div className="form-container">
      <h1>Resume Builder</h1>
      <div className="form-section">
        <h2>Personal Details</h2>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="e.g., Himesh Bunkar"
          value={resumeData.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="e.g., himeshbunkar@example.com"
          value={resumeData.email}
          onChange={handleChange}
        />
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="e.g., +917357408582"
          value={resumeData.phone}
          onChange={handleChange}
        />
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="e.g., 123 Main St, Anytown, USA"
          value={resumeData.address}
          onChange={handleChange}
        />
      </div>

      <div className="form-section">
        <h2>Professional Summary</h2>
        <textarea
          name="summary"
          placeholder="A brief summary of your career and skills..."
          value={resumeData.summary}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-section">
        <h2>Work Experience</h2>
        <textarea
          name="experience"
          placeholder="Your job title, company, dates, and responsibilities..."
          value={resumeData.experience}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-section">
        <h2>Education</h2>
        <textarea
          name="education"
          placeholder="Your degree, university, and graduation year..."
          value={resumeData.education}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-section">
        <h2>Skills</h2>
        <textarea
          name="skills"
          placeholder="List your key skills, separated by commas..."
          value={resumeData.skills}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
}

export default ResumeForm;