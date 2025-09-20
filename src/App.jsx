import React, { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './App.css';

function TemplateSelector({ onTemplateChange, activeTemplate }) {
  return (
    <div className="template-selector">
      <h3>Choose a Template</h3>
      <div className="template-buttons">
        <button
          className={activeTemplate === 'classic' ? 'active' : ''}
          onClick={() => onTemplateChange('classic')}
        >
          Classic
        </button>
        <button
          className={activeTemplate === 'modern' ? 'active' : ''}
          onClick={() => onTemplateChange('modern')}
        >
          Modern
        </button>
        <button
          className={activeTemplate === 'compact' ? 'active' : ''}
          onClick={() => onTemplateChange('compact')}
        >
          Compact
        </button>
      </div>
    </div>
  );
}

function App() {
  const [resumeData, setResumeData] = useState({
    name: '', email: '', phone: '', address: '',
    summary: '', experience: '', education: '', skills: '',
  });

  const [template, setTemplate] = useState('classic');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDownload = () => {
    const element = document.getElementById('resume-preview');
    const opt = {
      margin: 0,
      filename: `${resumeData.name.split(' ').join('_') || 'resume'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <img src="/resume-maker-logo.png" alt="Resume Forge Logo" className="header-logo" />
          <div>
            <h1>Resume Forge</h1>
            <p>Create a Professional Resume in Minutes</p>
          </div>
        </div>

        <button onClick={toggleTheme} className="theme-toggle-button">
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </header>
      
      <div className="App">
        <div className="form-section-wrapper">
          <TemplateSelector
            onTemplateChange={setTemplate}
            activeTemplate={template}
          />
          <ResumeForm resumeData={resumeData} handleChange={handleChange} />
          <button className="download-button" onClick={handleDownload}>
            Download PDF 📄
          </button>
        </div>
        <ResumePreview resumeData={resumeData} template={template} />
      </div>
    </>
  );
}

export default App;