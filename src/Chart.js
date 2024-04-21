import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material'; // Import Grid from Material-UI
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { resumeSkills } from './Supabase';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 10,
      },
    },
  },
};

const Chart = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const skillsData = await resumeSkills();
      setSkills(skillsData);
    }

    fetchData();
  }, []);

  const filteredSkills = skills.filter(skill => skill.category === 'Technical skills');
  const labels = filteredSkills.map(skill => skill.name);
  const data = {
    labels,
    datasets: [
      {
        label: 'Proficiency',
        data: filteredSkills.map(skill => skill.point),
        borderColor: 'rgb(87, 87, 97, 0.6)',
        backgroundColor: 'rgba(87, 87, 97, 0.3)',
      },
    ],
  };

  return (
    <Grid container>
      <Grid item xs={12} md={8} lg={6}>
        <div style={{ width: '550px', height: '100%' }}>
          <Bar options={{ ...options, maintainAspectRatio: false }} data={data} /> {/* Adjust maintainAspectRatio */}
        </div>
      </Grid>
    </Grid>
  );
};

export default Chart;
