import Grid from '@mui/material/Grid';

function About() {
  const headshotUrl = 'https://xftjoyrggcewuljctysj.supabase.co/storage/v1/object/public/headshot/headshot.png';

  return (
    <div className="bg-gray-100 p-8">
      <div style={{ paddingLeft: '4rem', paddingRight: '4rem', marginTop: '5em', marginBottom: '6em', marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px' }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={headshotUrl} alt="Joanna Chang" style={{ maxWidth: '80%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
              <h3 style={{ fontSize: '1.8rem', color: '#2B9348' }}>Hello, nice to meet you! 👋🏼</h3>
              <p style={{ fontSize: '1rem' }}>I’m Joanna Chang. I’m a researcher with a knack for user experience in digital environments and customer experience in offline retail settings. I’ve worked at Nielsen and CXG for five years. Currently, I’m pursuing a master’s degree in Media & Information at Michigan State University.</p>
              <p style={{ fontSize: '1rem' }}>Feel free to check out my resume, and reach out if anything piques your interest.</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
