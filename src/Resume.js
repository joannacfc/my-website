import React, { useEffect, useState } from 'react';
import { resumeEducation, resumeWork, resumeSkills } from './Supabase';
import { Button, Typography, List, ListItem, ListItemText } from '@mui/material';

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
      <div className="Resume" style={{ paddingLeft: '4rem', paddingRight: '4rem', marginTop: '4em', marginBottom: '4em' }}>
        {/* EDUCATION SECTION */}
        <Typography variant="h6" style={{ color: '#2B9348', marginTop: '0.8em' }} gutterBottom>EDUCATION</Typography>
        <List>
          {schools.map((school, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${school.university} (${school.university_short}) | ${school.city}, ${school.country}`}
                secondary={`${school.degree} in ${school.school} | ${school.period}`}
              />
            </ListItem>
          ))}
        </List>

        {/* WORK EXPERIENCE SECTION */}
        <Typography variant="h6" style={{ color: '#2B9348', marginTop: '0.8em' }} gutterBottom>WORK EXPERIENCE</Typography>
        <List>
          {works.sort((a, b) => a.id - b.id).map((work, index) => {
            const prevWork = works[index - 1];
            const isSameCompany = index > 0 && prevWork.company === work.company;

            return (
              <ListItem key={index}>
                <ListItemText
                  primary={isSameCompany ? null : `${work.company} | ${work.location}`}
                  secondary={`${work.title}, ${work.department} | ${work.period}`}
                />
              </ListItem>
            );
          })}
        </List>

        {/* SKILLS SECTION */}
        <Typography variant="h6" style={{ color: '#2B9348', marginTop: '0.8em' }} gutterBottom>SKILLS</Typography>
        <List>
          {skills.reduce((acc, skill, index) => {
            const prevSkill = index > 0 ? skills[index - 1] : null;
            const isNewCategory = prevSkill ? prevSkill.category !== skill.category : true;

            if (!isNewCategory && index !== 0) {
              acc[acc.length - 1].secondary += `, ${skill.name}`;
            } else {
              acc.push({
                primary: `${skill.category}:`,
                secondary: `${skill.name}`
              });
            }

            return acc;
          }, []).map((skill, index) => (
            <ListItem key={index}>
              <ListItemText primary={skill.primary} secondary={skill.secondary} />
            </ListItem>
          ))}
        </List>

        <div className="centered-button-container" style={{ marginTop: '1.2em', display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" onClick={handleResumeButtonClick} style={{ backgroundColor: '#575761', color: 'white' }}>
            View Resume PDF
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
