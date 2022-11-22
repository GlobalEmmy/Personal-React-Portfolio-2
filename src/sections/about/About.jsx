import AboutImage from "../../assets/Photo2.jpeg";
import CV from "../../assets/CV.pdf";
import {HiDownload} from "react-icons/hi";
import Card from "../../components/Card";
import data from "./data";
import "./about.css";

const about = () => {
  return (
    <section id="about">
        <div className="container about__container">
          <div className="about__left">
            <div className="about__portrait">
              <img src={AboutImage} alt="About Image" />
            </div>
          </div>
          <div className="about__right">
            <h2>About Me</h2>
            <div className="about__cards">
              {
                data.map(item => (
                  <Card key={item.id} className = "about__card">
                    <span className="about__card-icon">{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                    </Card>
                ))
              }
            </div>
            <p>
              Building projects my clients love have been my passion. Being in the 
              web development industry for over  2 years and serving more than 50 happy clients
              worldwide, I'm motivated to do more!
            </p>
            <p>
              Hi, my name is Emmanuel monyem from Lagos, Nigeria. I'm a full-stack web developer
              with a Bachelor degree in Mechanical Engineering. My top priority is to get your 
              business online the right way, giving you industry-standard design and att the 
              functionality you need to operate smoothly online. Get in touch toady with 
              the details of your project let's get started! Check out my resume below!
            </p>
            
            <a href={CV} download className="btn primary">Download CV<HiDownload/></a>

          </div>
        </div>
    </section>
  )
}

export default about