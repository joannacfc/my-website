import React, { useState } from 'react';
import { Grid } from '@mui/material';
import video_redesign from './video_redesign.gif';
import { Link } from 'react-router-dom';

function MainPage() {
  const [color, setColor] = useState('#2B9348');

  const handleClick = () => {
    setColor('#575761');
  };

  return (
    <div className="MainPage" style={{ paddingLeft: '4rem', paddingRight: '4rem', marginTop: '5em', marginBottom: '6em', marginLeft: 'auto', marginRight: 'auto', maxWidth: '960px' }}>
      <Grid container spacing={1} alignItems="flex-start">
        <Grid item xs={4} sx={{ flexBasis: '25%' }}>
          <div className="MainPage-content">
            <Link to="/Portfolio1" style={{ textDecoration: 'none' }}>
              <h2 style={{ fontSize: '1.6rem', color: color }} onClick={handleClick}>Application Redesign</h2>
            </Link>
            <p style={{ fontSize: '1rem'}}>Enhancing User Experience (UX)</p>
            <p style={{ fontSize: '1rem'}}>Prototype Creation in Figma</p>
            <p style={{ fontSize: '1rem', marginBottom: '18rem'}}>2023</p>
          </div>
        </Grid>
        <Grid item xs={8} sx={{ flexBasis: '75%' }}>
          <div className="MainPage-video">
            <img src={video_redesign} alt="Application Redesign" style={{ maxWidth: '100%', height: 'auto' }}/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;
