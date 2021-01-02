import React from "react"
import me from "../images/me.jpg";


// image, bio, location, iterests
//skills, software?

const About = () => (
  <div className="about" id='about'>
    <h1>About</h1>
    <div className="about-me">
      {/* <div className="block1">
        <div className="education">
          <h3>Education</h3>
            <p>2016-2018: University of Georgia</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>Major:</b> Computer Science</p>
            <p>2018-2021: Georgia Insititute of Techology</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>Major:</b> Computational Media</p>
        </div>
        <h3>Work</h3>
          <p>2019-2020: Software Engineer Co-op at 
            <a href="https://www.itential.com"> Itential</a>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>Primary Tools:</b> React, Javascript, HTML, Figma</p>
          </p>
        <h3>Skills</h3>
          <p><b>Programming Languages:</b> Java, Javascript, C, C#</p>
          <p><b>Frameworks/Libraries:</b> React.js, React Native, Gatsby.js, Processing.js</p>
          <p><b>Markup/Styling:</b> HTML, CSS, SASS</p>
          <p><b>Design Tools:</b> Figma, Adobe Illustrator, InDesign, Photoshop</p>
          <p><b>Applications:</b> Blender, Unity, Visual Studio Code, JIRA, Git, Android Studio, After Effects</p>
        <h3>Contact</h3>
          <p><b>e:</b> danube213@gmail.com</p>
      </div> */}
      <div className="bio">
        <div className="image"> 
          <img src={me} alt="Morgan Gomez" width="300" height="auto"></img>
        </div>
        <p>Hey! I'm Morgan Gomez, a Georgia Tech undergraduate student majoring in
         <a href="https://www.cc.gatech.edu/academics/degree-programs/bachelors/computational-media"> Computational Media</a>
         . I like to think of it as computer science mixed with graphic design: a bit creative, a bit technical, and a lot of fun.
        </p>
        <p>I currently live in Atlanta, GA, where I will graduate from Georgia Tech in May of 2021.</p>
        <h3>When I'm not working...</h3>
        <p>I love sodoku, Reddit, and Orange Theory Fitness! I'm also a fan of Westworld, The Queen's Gambit, Bob's Burgers, and House.</p>
      </div>
    </div>
  </div>
)

export default About
