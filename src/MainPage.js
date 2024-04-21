import React, { useState } from 'react';
import { Grid } from '@mui/material';
import video_redesign from './video_redesign.gif';
import { Link } from 'react-router-dom';

function MainPage() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const color = hovered ? '#575761' : '#2B9348';

  return (
    <div className="MainPage" style={{ paddingLeft: '4rem', paddingRight: '4rem', marginTop: '4em', marginBottom: '6em', marginLeft: 'auto', marginRight: 'auto', maxWidth: '960px' }}>
      <Grid container spacing={1} alignItems="flex-start">
        <Grid item xs={12} sm={8} sx={{ flexBasis: '75%' }}>
          <div className="MainPage-video">
            <img src={video_redesign} alt="Application Redesign" style={{ maxWidth: '100%', height: 'auto' }}/>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ flexBasis: '25%' }}>
          <div className="MainPage-content" style={{ marginTop: '2em'}}>
            <Link to="/Portfolio1" style={{ textDecoration: 'none' }}>
              <h2 style={{ fontSize: '1.6rem', color: color }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Application Redesign</h2>
            </Link>
            <p style={{ fontSize: '1rem'}}>Enhancing User Experience (UX)</p>
            <p style={{ fontSize: '1rem'}}>Prototype Creation in Figma</p>
            <p style={{ fontSize: '1rem', marginBottom: '18rem'}}>2023</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;
