import { useEffect, useState } from 'react';
import { resumeEducation } from './Supabase';
import './Resume.css';

function Resume() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const schoolsData = await resumeEducation();
        setSchools(schoolsData);
      } catch (error) {
        console.error('Error fetching resume education:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
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
        </div>
      ))}
    </div>
  );
}

export default Resume;
