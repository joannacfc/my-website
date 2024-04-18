import './MainPage.css';
import video_redesign from './video_redesign.gif';

function MainPage() {
  return (
    <div className="MainPage">
      <div className="MainPage-content">
        <h2>Application Redesign</h2>
        <p>Enhancing User Experience (UX)</p>
        <p>Prototype Creation in Figma</p>
        <p>2023</p>
      </div>
      <div className="MainPage-video">
        <img src={video_redesign} alt="Application Redesign" />
      </div>
    </div>
  );
}

export default MainPage;