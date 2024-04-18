import './About.css';

function About() {
  const headshotUrl = 'https://xftjoyrggcewuljctysj.supabase.co/storage/v1/object/public/headshot/headshot.png';

  return (
    <div className="About">
      {headshotUrl && <img src={headshotUrl} alt="Joanna Chang" className="headshot" />}
      <div className="text-container">
        <h2>Hello, nice to meet you! 👋🏼</h2>
        <p>I’m Joanna Chang. I’m a researcher with a knack for user experience in digital environments and customer experience in offline retail settings. I’ve worked at Nielsen and CXG for five years. Currently, I’m pursuing a master’s degree in Media & Information at Michigan State University.</p>
        <p>Feel free to check out my resume, and reach out if anything piques your interest.</p>
      </div>
    </div>
  );
}

export default About;
