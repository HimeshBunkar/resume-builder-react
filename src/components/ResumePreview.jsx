import React from 'react';

function ResumePreview({ resumeData, template }) {
  const { name, email, phone, address, summary, experience, education, skills } = resumeData;

  const summaryDefault = 'Highly motivated and detail-oriented professional seeking an entry-level position. Eager to apply academic knowledge and develop practical skills in a dynamic environment.';
  const experienceDefault = `Job Title | Company Name | Month Year - Present\n- Responsibility or achievement 1.\n- Responsibility or achievement 2.\n- Responsibility or achievement 3.`;
  const educationDefault = `Degree Name | University Name | Month Year - Month Year\n- Relevant coursework or academic achievements.`;
  const skillsDefault = 'Technical Skill 1, Technical Skill 2, Soft Skill 1, Soft Skill 2, Language 1';

  if (template === 'modern') {
    return (
      <div className="preview-container">
        <div id="resume-preview" className={`resume-template ${template}`}>
          <aside className="modern-sidebar">
            <header className="resume-header">
              <h1>{name || 'Your Name'}</h1>
            </header>
            <section className="resume-section modern-contact">
              <h2>Contact</h2>
              {/* Added icons for a professional touch */}
              <p>📧 {email || 'your.email@example.com'}</p>
              <p>📞 {phone || '(123) 456-7890'}</p>
              <p>📍 {address || 'Your City, Country'}</p>
            </section>
            <section className="resume-section">
              <h2>Skills</h2>
              <p>{skills || skillsDefault}</p>
            </section>
          </aside>
          <main className="modern-main">
            <section className="resume-section">
              <h2>Summary</h2>
              <p>{summary || summaryDefault}</p>
            </section>
            <section className="resume-section">
              <h2>Experience</h2>
              <p>{experience || experienceDefault}</p>
            </section>
            <section className="resume-section">
              <h2>Education</h2>
              <p>{education || educationDefault}</p>
            </section>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="preview-container">
      <div id="resume-preview" className={`resume-template ${template}`}>
        <header className="resume-header">
          <h1>{name || 'Your Name'}</h1>
          <p>
            {email || 'your.email@example.com'} | {' '}
            {phone || '(123) 456-7890'} | {' '}
            {address || 'Your Address, City, Country'}
          </p>
        </header>
        <section className="resume-section">
          <h2>Summary</h2>
          <p>{summary || summaryDefault}</p>
        </section>
        <section className="resume-section">
          <h2>Experience</h2>
          <p>{experience || experienceDefault}</p>
        </section>
        <section className="resume-section">
          <h2>Education</h2>
          <p>{education || educationDefault}</p>
        </section>
        <section className="resume-section">
          <h2>Skills</h2>
          <p>{skills || skillsDefault}</p>
        </section>
      </div>
    </div>
  );
}

export default ResumePreview;