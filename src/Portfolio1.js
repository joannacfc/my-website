import React from 'react';
import { Grid, Typography } from '@mui/material';

function Portfolio1() {
    const competitiveAnalysisUrl = 'https://xftjoyrggcewuljctysj.supabase.co/storage/v1/object/public/portfolio1/01_competitive_analysis.png?t=2024-04-21T02%3A22%3A23.173Z';
    const userFlowsUrl = 'https://xftjoyrggcewuljctysj.supabase.co/storage/v1/object/public/portfolio1/02_user_flows.png';
    const paperPrototypesUrl = 'https://xftjoyrggcewuljctysj.supabase.co/storage/v1/object/public/portfolio1/03_paper_prototypes.png';
    const digitalPrototypesUrl = 'https://xftjoyrggcewuljctysj.supabase.co/storage/v1/object/public/portfolio1/04_digital_prototypes.png';

  return (
    <div className="Portfolio1" style={{ paddingLeft: '4rem', paddingRight: '4rem', marginTop: '5em', marginBottom: '6em', marginLeft: 'auto', marginRight: 'auto', maxWidth: '960px' }}>
      <Typography variant="h2" style={{ textAlign: 'left', fontSize: '1.6rem', color: '#2B9348', marginBottom: '1.5em' }}>
        Application Redesign
      </Typography>
      <Grid container spacing={4}>
        {/* Section 1 */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" style={{ fontSize: '1rem', marginBottom: '1em' }}>PROBLEM STATEMENT</Typography>
          <Typography style={{ fontSize: '0.8rem' }}>
            This design project aims to create a new performing arts event section on the existing MSU app to promote arts and culture (A&amp;C) events affiliated with different venues, providing more opportunities for the community to explore A&amp;C events.
          </Typography>
        </Grid>

        {/* Section 2 */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" style={{ fontSize: '1rem', marginBottom: '1em' }}>SOLUTION</Typography>
          <Typography style={{ fontSize: '0.8rem' }}>
            I incorporated a new section called “Performing Arts on Campus” to the MSU app. This section collects event details from different venues but doesn’t handle ticket sales. If users want more information or to book tickets, they’ll be directed to the venues’ official websites. So, the main purpose of this new feature is to share information and guide users to the event organizers for registration and tickets.
          </Typography>
        </Grid>

        {/* Section 3 */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" style={{ fontSize: '1rem', marginBottom: '1em' }}>DESIGN PROCESS</Typography>
          <Typography style={{ fontSize: '0.8rem' }}>
            First, I consolidated ideas by conducting competitive analysis, defining design values, and identifying target users. Then, I brought the design to life by creating user flows, sketches, paper prototypes, and digital prototypes.
          </Typography>
        </Grid>
      </Grid>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2em' }}>
          <div style={{ marginBottom: '2em', textAlign: 'center' }}>
            <Typography variant="h6" style={{fontSize: '0.8rem'}}>⬇ Competitive Analysis</Typography>
            <img src={competitiveAnalysisUrl} alt="01_competitive_analysis" style={{ maxWidth: '60%', height: 'auto' }} />
          </div>
          <div style={{ marginBottom: '2em', textAlign: 'center' }}>
            <Typography variant="h6" style={{fontSize: '0.8rem'}}>⬇ User Flows</Typography>
            <img src={userFlowsUrl} alt="02_user_flows" style={{ maxWidth: '60%', height: 'auto' }} />
          </div>
          <div style={{ marginBottom: '2em', textAlign: 'center' }}>
            <Typography variant="h6" style={{fontSize: '0.8rem'}}>⬇ Paper Prototypes</Typography>
            <img src={paperPrototypesUrl} alt="03_paper_prototypes" style={{ maxWidth: '60%', height: 'auto' }} />
          </div>
          <div style={{ marginBottom: '2em', textAlign: 'center' }}>
            <Typography variant="h6" style={{fontSize: '0.8rem'}}>⬇ Digital Prototypes</Typography>
            <img src={digitalPrototypesUrl} alt="04_digital_prototypes" style={{ maxWidth: '60%', height: 'auto' }} />
          </div>
        </div>
    </div>
  );
}

export default Portfolio1;
