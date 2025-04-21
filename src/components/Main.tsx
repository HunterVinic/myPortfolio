import React, { useEffect, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import "../assets/styles/Main.scss";
import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';

interface MainProps {
  mode: 'dark' | 'light';
}

function Main({ mode }: MainProps) {
  const [scrolled, setScrolled] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDownloadResume = () => {
    const resumeUrl = require("../assets/resume.pdf");
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sheshehang_Limbu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreviewResume = () => {
    setShowResumeModal(true);
  };

  const handleCloseModal = () => {
    setShowResumeModal(false);
  };

  return (
    <div className={`container ${mode}-mode`}>
      <div className={`about-section ${scrolled ? 'scrolled' : ''}`}>
        {/* <div className="image-wrapper">
          <img
            src={require("../assets/images/pp/avatar.png")}
            alt="Avatar"
            className="avatar-img"
          />
        </div> */}
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/HunterVinic" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/sheshehang-limbu/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <h1>Sheshehang Limbu</h1>
          <p>Software Developer</p>
          <p><i><h6>
          "A developer is like a wizard—turning coffee into code, ideas into innovations, and bugs into lessons. Keep coding, keep creating, and remember: every error is just a stepping stone to mastery."
          </h6></i></p>

          {/* Resume Button */}
          <div className="resume-buttons">
            <Button
              variant="outlined"
              startIcon={<ShareIcon />}
              onClick={handlePreviewResume}
              className={`resume-button ${mode}-mode`}
            >
              Resume
            </Button>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/HunterVinic" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/sheshehang-limbu/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      {showResumeModal && (
        <div className="resume-modal active">
          <div className="modal-content">
            <button className="close-modal" onClick={handleCloseModal}>
              &times;
            </button>
            <iframe
              src={require("../assets/resume.pdf")}
              width="100%"
              height="100%"
              title="Resume Preview"
            />
            <Button
              variant="contained"
              onClick={handleDownloadResume}
              className="download-resume-btn"
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                backgroundColor: mode === "dark" ? "#444" : "#f5f5dc",
                color: mode === "dark" ? "#ecf0f1" : "#2c3e50",
              }}
            >
              Download
            </Button>
          </div>
        </div>
      )}
      {/* Artistic Hire Me Button */}
<div className={`hire-me-container ${mode}-mode`}>
  <button 
    className="hire-me-btn" 
    onClick={() => setShowContactModal(true)}
    aria-label="Hire Me"
  >
    <span className="text">Hire Me</span>
    <span className="blob"></span>
    <span className="blob"></span>
    <span className="blob"></span>
    <span className="blob"></span>
  </button>
</div>

{showContactModal && (
  <div className="contact-modal">
    <div className={`modal-content ${mode}-mode`}>
      <button 
        className="close-btn" 
        onClick={() => setShowContactModal(false)}
        aria-label="Close contact modal"
      >
        &times;
      </button>
      
      <div className="id-card">
        <div className="id-header">
          <h2>Developer ID</h2>
          <div className="id-photo">
            <img 
              src={require("../assets/images/pp/id-card.png")} 
              alt="Sheshehang Limbu"
            />
          </div>
        </div>
        
        <div className="id-body">
          <div className="id-info">
            <div className="info-row">
              <span className="label">Name:</span>
              <span className="value">Sheshehang Limbu</span>
            </div>
            <div className="info-row">
              <span className="label">Title:</span>
              <span className="value">Full Stack Developer</span>
            </div>
            <div className="info-row">
              <span className="label">Email:</span>
              <span className="value">
                <EmailIcon className="icon" />
                sheshehang2016@gmail.com
              </span>
            </div>
            <div className="info-row">
              <span className="label">LinkedIn:</span>
              <span className="value">
                <LinkedInIcon className="icon" />
                <a href="https://linkedin.com/in/sheshehang-limbu" target="_blank" rel="noopener noreferrer">
                  sheshehang-limbu
                </a>
              </span>
            </div>
            <div className="info-row">
              <span className="label">GitHub:</span>
              <span className="value">
                <GitHubIcon className="icon" />
                <a href="https://github.com/HunterVinic" target="_blank" rel="noopener noreferrer">
                  HunterVinic
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default Main;