import { useState } from 'react';
import { Link } from "react-router-dom";
import './Signup.css';

export default function Signup() {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    college: '',
    password: ''
  });

  const defaultSkills = ['React', 'Python', 'JavaScript', 'Machine Learning', 'Node.js', 'UI/UX Design'];

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleAddDefaultSkill = (skill) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, skills });
  };

  return (
    <div className="signup-container">
      <div className="main-content">
        <div className="left-pane">
          <div className="left-content">
            <div className="icon-wrapper">
              <svg className="users-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h2 className="left-title">Join the Community</h2>
            <p className="left-description">
              Create your profile, showcase your skills, and connect with students who share your passion for building.
            </p>
            
            <div className="testimonial">
              <p className="testimonial-text">
                "TeamUP helped me find the perfect team for Smart India Hackathon. We won first place!"
              </p>
              <div className="testimonial-author">
                <div className="avatar">AR</div>
                <span className="author-name">Arjun Reddy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-pane">
          <div className="form-container">
            <div className="form-header">
              <div className="brand-header">
                <svg className="brand-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
                <span className="brand-name">TeamUP</span>
              </div>
              <h2 className="form-title">Create your account</h2>
              <p className="form-subtitle">Start finding your perfect teammates today</p>
            </div>

            <div className="signup-form">
              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="form-input"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="College Email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="college"
                  placeholder="College/University"
                  className="form-input"
                  value={formData.college}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Create a strong password"
                  className="form-input"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <div className="skill-input-wrapper">
                  <input
                    type="text"
                    placeholder="Add a skill and press Enter"
                    className="form-input"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button
                    type="button"
                    className="add-skill-btn"
                    onClick={handleAddSkill}
                  >
                    +
                  </button>
                </div>
              </div>

              {skills.length > 0 && (
                <div className="selected-skills">
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-tag selected">
                      {skill}
                      <button
                        type="button"
                        className="remove-skill"
                        onClick={() => handleRemoveSkill(skill)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}

              <div className="skill-suggestions">
                {defaultSkills.map((skill, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`skill-tag ${skills.includes(skill) ? 'disabled' : ''}`}
                    onClick={() => handleAddDefaultSkill(skill)}
                    disabled={skills.includes(skill)}
                  >
                    + {skill}
                  </button>
                ))}
              </div>

              <button onClick={handleSubmit} className="create-account-btn">
                Create Account →
              </button>

              <p className="terms-text">
                By creating an account, you agree to our{' '}
                <a href="#" className="terms-link">Terms of Service</a> and{' '}
                <a href="#" className="terms-link">Privacy Policy</a>
              </p>

              <p className="login-text">
                Already have an account? <Link to="/login" className="login-link">Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}