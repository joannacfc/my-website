import React, { useEffect, useState } from 'react';
import { resumeEducation, resumeWork, resumeSkills } from './Supabase';
import './Resume.css';
import Button from '@mui/material/Button';

function Resume() {
  const [schools, setSchools] = useState([]);
  const [works, setWorks] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const schoolsData = await resumeEducation();
      setSchools(schoolsData);
      const worksData = await resumeWork();
      setWorks(worksData);
      const skillsData = await resumeSkills();
      setSkills(skillsData);
    }

    fetchData();
  }, []);

  const handleResumeButtonClick = () => {
    window.open('https://xftjoyrggcewuljctysj.supabase.co/storage/v1/object/public/resume/Resume_Chia-Fang%20(Joanna)%20Chang.pdf?t=2024-04-20T04%3A47%3A42.685Z', '_blank');
  };

  return (
    <div className="ResumeContainer">
      <div className="Resume">
        <h3>EDUCATION</h3>
        {schools.map((school, index) => (
          <div key={index} className="education-item">
            <p className="university">
              {school.university} ({school.university_short}) | {school.city}, {school.country}
            </p>
            <p className="degree">
              {school.degree} in {school.school}
            </p>
            <p className="period">
              {school.period}
            </p>
            {index !== schools.length - 1 && <hr />}
          </div>
        ))}
        <h3>WORK EXPERIENCE</h3>
        {works.sort((a, b) => a.id - b.id).map((work, index) => {
          const isSameCompany = index > 0 && works[index - 1].company === work.company;

          return (
            <div key={index} className="work-item">
              {index !== 0 && !isSameCompany && (
                <hr />
              )}
              {index !== 0 && isSameCompany && (
                <hr className="hr-dotted" />
              )}
              {!isSameCompany && (
                <p className="first-line">
                  <span className="company">{work.company}</span> | <span className="location">{work.location}</span>
                </p>
              )}
              <p className="second-line">
                {work.title}, {work.department}
              </p>
              <p className="period">
                {work.period}
              </p>
            </div>
          );
        })}
        <h3>SKILLS</h3>
        {skills.reduce((acc, skill, index) => {
          const prevSkill = index > 0 ? skills[index - 1] : null;
          const isNewCategory = prevSkill ? prevSkill.category !== skill.category : true;

          if (!isNewCategory && index !== 0) {
            acc[acc.length - 1] = (
              <p key={index} className="first-line-skills">
                {`${acc[acc.length - 1].props.children}, ${skill.name}`}
              </p>
            );
          } else {
            acc.push(
              <p key={index} className="first-line-skills">
                {`${skill.category}: ${skill.name}`}
              </p>
            );
          }

          return acc;
        }, [])}
        <div style={{ height: '40px' }}></div>
        <div className="centered-button-container">
          <Button variant="contained" onClick={handleResumeButtonClick} style={{ backgroundColor: '#575761', color: 'white' }}>
            View Resume PDF
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
