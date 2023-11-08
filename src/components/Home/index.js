// eslint-disable-next-line import/no-extraneous-dependencies
import Tilt from 'react-parallax-tilt'
import './index.css'
import {Link} from 'react-router-dom'

const Home = () => (
  <div className="user-info-container">
    <div>
      <Tilt>
        <img
          src="https://res.cloudinary.com/dbomut0aw/image/upload/v1699096671/Picsart_23-11-04_16-42-53-459_sfjke9.png"
          className="image1"
          alt="image1"
        />
      </Tilt>
    </div>
    <div>
      <h1 className="user-name">
        Hii There!!{' '}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h1>
      <p className="user-designation">I&apos;M ARUN KUMAR</p>
      <div className="buttons-container">
        <Link className="route-link" to="/about">
          <button className="about-button" type="button">
            Know More about me
          </button>
        </Link>
        <a
          href="https://flowcv.com/resume/solm09cjt7"
          target="_blank"
          rel="noopener noreferrer"
          className="cvbutton"
        >
          <button className="about-button resume-button" type="button">
            My Resume
          </button>
        </a>
      </div>
    </div>
  </div>
)

export default Home
