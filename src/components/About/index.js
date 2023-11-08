import './index.css'
import BlogList from '../BlogList'

const About = () => (
  <div className="about-container">
    <div className="about-container-main">
      <div className="about-container-image">
        <img
          src="https://res.cloudinary.com/dbomut0aw/image/upload/v1699023662/Picsart_23-11-03_20-21-41-327_hdlk5x.png"
          className="image2"
          alt="dummy"
        />
      </div>
      <div className="about-container-text">
        <h1 className="about-heading">About Me</h1>
        <p className="intro1">
          Hi, This is Arun Kumar, I was recently graduated from Nallamallareddy
          Engineering College
        </p>
        <p className="intro1">
          As a recent software engineering graduate, I am excited to kickstart
          my career with a passion for coding, a strong foundation in
          programming languages like Java and Python, and a proactive approach
          to problem solving. I am eager to contribute my technical skills and
          collaborative mindset to innovative software projects and continue
          learning and growing as part of a dynamic team.
        </p>
      </div>
    </div>
    <BlogList />
  </div>
)

export default About
