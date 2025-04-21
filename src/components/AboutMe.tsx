import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUserTie, faChartPie, faCode, faUsers, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'; 
import { faDatabase, faServer, faTools, faPalette, faCloud } from '@fortawesome/free-solid-svg-icons';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';
import '../assets/styles/AboutMe.scss';

const skillsData = [
  { skill: 'Flutter', level: 90 },
  { skill: 'IoT', level: 85 },
  { skill: 'AI/ML', level: 80 },
  { skill: 'Frontend', level: 75 },
  { skill: 'Backend', level: 70 },
  { skill: 'UI/UX', level: 65 },
  { skill: 'Web Development', level: 79 },
];

const statsData = [
  { icon: faProjectDiagram, value: '25+', label: 'Projects Completed' },
  { icon: faUsers, value: '5+', label: 'Satisfied Clients' },
  { icon: faCode, value: '10+', label: 'Programming Languages' },
];

const AboutMe = () => {
  return (
    <div className="container" id="about">
      <div className="about-container">
        <h1>About Me</h1>
        
        <div className="about-grid">
          {/* Left Column - Bio */}
          <div className="about-section">
            <FontAwesomeIcon icon={faUserTie} size="2x"/>
            <h3>Professional Profile</h3>
            <p>
              As a forward-thinking Computer & Software Engineer, I specialize in architecting 
              seamless digital experiences through Flutter development, IoT ecosystems, and 
              AI-driven innovation. With a Master's in IoT System Engineering in progress, 
              I merge theoretical rigor with hands-on expertise to solve complex problems, 
              delivering scalable solutions that bridge the gap between cutting-edge technology 
              and human-centric design.
            </p>
          </div>
          
          {/* Middle Column - Image */}
          <div className="about-section image-section">
            {/* <div className="profile-image-wrapper">
              <img 
                src={require("../assets/images/pp/aboutme_bg.png")} 
                alt="Profile" 
                className="profile-image"
              />
            </div> */}
          </div>
          
          {/* Right Column - Education */}
          <div className="about-section">
            <FontAwesomeIcon icon={faGraduationCap} size="2x"/>
            <h3>Education</h3>
            <div className="education-item">
              <h4>M.Sc. IoT System Engineering</h4>
              <p className="institution">Asian Institute of Technology, Thailand</p>
            </div>
            <div className="education-item">
              <h4>B.Sc. Computer Engineering</h4>
              <p className="institution">Assumption University, Thailand</p>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="skills-section">
          {/* <FontAwesomeIcon icon={faChartPie} size="3x"/> */}
          <h3>Skills & Achievements</h3>
          
          <div className="skills-grid">
            {/* Left Column - Radar Chart */}
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                  <PolarGrid gridType="circle" />
                  <PolarAngleAxis 
                    dataKey="skill" 
                    tick={{ fill: '#64ffda', fontSize: 12 }}
                  />
                  <PolarRadiusAxis 
                    angle={70}
                    domain={[0, 100]}
                    tick={{ fill: '#a8b2d1', fontSize: 10 }}
                  />
                  <Radar
                    name="Skill Level"
                    dataKey="level"
                    stroke="#64ffda"
                    fill="#64ffda"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Right Column - Stats */}
            <div className="stats-container">
              {statsData.map((stat, index) => (
                <div className="stat-item" key={index}>
                  <div className="stat-icon">
                    <FontAwesomeIcon icon={stat.icon} size="2x"/>
                  </div>
                  <div className="stat-content">
                    <h4>{stat.value}</h4>
                  </div>
                  <div className="stat-content">
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>

          <h3>Technical Skills Breakdown</h3>
  
  <div className="skills-categories">
    {/* Programming Languages */}
    <div className="skill-category">
      <FontAwesomeIcon icon={faCode} size="2x" />
      <h4>Languages</h4>
      <div className="skill-tags">
        <span>Python</span>
        <span>JavaScript</span>
        <span>Java</span>
        <span>Dart</span>
        <span>C++</span>
        <span>TypeScript</span>
      </div>
    </div>
    
    {/* Frameworks & Libraries */}
    <div className="skill-category">
      <FontAwesomeIcon icon={faProjectDiagram} size="2x" />
      <h4>Frameworks</h4>
      <div className="skill-tags">
        <span>Flutter</span>
        <span>React</span>
        <span>Node.js</span>
        <span>Django</span>
        <span>Flask</span>
        <span>TensorFlow</span>
      </div>
    </div>
    
    {/* Databases */}
    <div className="skill-category">
      <FontAwesomeIcon icon={faDatabase} size="2x" />
      <h4>Databases</h4>
      <div className="skill-tags">
        <span>MongoDB</span>
        <span>Firebase</span>
        <span>MySQL</span>
        <span>SQLite</span>
      </div>
    </div>
    
    {/* Tools & Platforms */}
    <div className="skill-category">
      <FontAwesomeIcon icon={faTools} size="2x" />
      <h4>Tools</h4>
      <div className="skill-tags">
        <span>Docker</span>
        <span>AWS</span>
        <span>Git</span>
        <span>CI/CD</span>
        <span>Kubernetes</span>
        <span>Linux</span>
      </div>
    </div>
    
    {/* Other Skills */}
    <div className="skill-category">
      <FontAwesomeIcon icon={faPalette} size="2x" />
      <h4>Other</h4>
      <div className="skill-tags">
        <span>UI/UX</span>
        <span>DevOps</span>
        <span>Cloud</span>
        <span>Testing</span>
        <span>IoT</span>
        <span>AI/ML</span>
      </div>
    </div>
  </div>   
        </div>
      </div>
</div>
    
  );
};

export default AboutMe;