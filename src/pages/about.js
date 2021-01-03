import { Link } from "gatsby";
import React from "react"
import me from "../images/me.png";


// image, bio, location, iterests
//skills, software?

const About = () => (
  <div className="about" id='about'>
    <h1>About</h1>
    <div className="about-me">
      <img src={me} alt="Morgan Gomez"></img>
      <div className="about-me-description">
          <div className="bio">
            <p>Hey! I'm Morgan Gomez, a Georgia Tech undergraduate student majoring in
              <a href="https://www.cc.gatech.edu/academics/degree-programs/bachelors/computational-media"> Computational Media</a>. 
              I like to think of it as computer science mixed with graphic design: a bit creative, a bit technical, and a lot of fun.
            </p>
            <p>I currently live in Atlanta, GA, where I will graduate from Georgia Tech in May of 2021.</p>
          </div>
          <div className="education block">
            <h3>Education</h3>
            <div className="info">
                <p>University of Georgia, <i>2016-2018</i></p>
                <p><i><b>Major:</b> Computer Science</i></p>
                <p>Georgia Insititute of Techology, <i>2018-2021</i></p>
                <p><i><b>Major:</b> Computational Media</i></p>
            </div>
          </div>

          <div className="work block">
              <h3>Work</h3>
              <div className="info">
                <p>Software Engineer Co-op at <a href="https://www.itential.com"> Itential</a>, <i>2019-2020</i></p>
                <p><i>Primarily worked with React, Javascript, HTML, and Figma</i></p>
              </div>
          </div>

          <div className="skills block">
              <h3>Web Technologies</h3>
              <div className="info">
                <p><b>Languages:</b> Java, Javascript, C, C#</p>
                <p><b>Frameworks/Libraries:</b> React.js, React Native, Gatsby.js, Processing.js</p>
                <p><b>Markup/Styling:</b> HTML, CSS, SASS</p>
              </div>
          </div>

          <div className="software block">
              <h3>Software</h3>
              <div className="info">
                <p><b>Design Tools:</b> Figma, Illustrator, InDesign, Photoshop</p>
                <p><b>Applications:</b> Blender, Unity, Visual Studio Code, JIRA, Git, Android Studio, After Effects</p>
              </div>
          </div>
          
          <div className="contact block">
            <h3>Contact</h3>
            <div className="info">
             <p><b>e:</b> danube213@gmail.com</p>
            </div>
          </div>


      </div>
    </div>
  </div>
)

export default About
