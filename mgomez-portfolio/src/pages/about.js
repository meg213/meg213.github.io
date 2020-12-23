import React from "react"
import me from "../images/me.jpg";


// image, bio, location, iterests
//skills, software?

const About = () => (
  <div className="about" id='about'>
    <h1>About</h1>
    <div className="about-me">
      <div className="block1">
        <div className="education">
          <h3>Education</h3>
            <p>2016-2018: University of Georgia</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Major: Computer Science</p>
            <p>2018-2021: Georgia Insititute of Techology</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Major: Computational Media</p>
        </div>
        <h3>Work</h3>
          <p>2019-2020: Software Engineer Co-op at 
            <a href="https://www.itential.com"> Itential</a>
          </p>
        <h3>Contact</h3>
          <p>e: danube213@gmail.com</p>
          <p>p: 404.416.3744</p>
      </div>
      <div className="bio">
        <img src={me} alt="Morgan Gomez" width="300" height="auto"></img>
        <p>Morgan Gomez is a Georgia Tech undergraduate student majoring in
         <a href="https://www.cc.gatech.edu/academics/degree-programs/bachelors/computational-media"> Computational Media</a>
          with a passion for 
        </p>
      </div>
    </div>
  </div>
)

export default About
