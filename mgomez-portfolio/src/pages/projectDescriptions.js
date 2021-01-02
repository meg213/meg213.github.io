import React from "react";
import "../styles/styles.scss";
import "../styles/projectInfo.scss"
import Header from "../components/header";
import Side from "../components/side";
import comic from "../files/The_Mirror_comic.pdf"
import bdc from "../files/styleGuide.pdf"
import audioArt from "../files/audioArt.pdf"
import twitterbot from "../files/twitterbot.pdf"
import dataVis from "../files/dataVis.pdf"
import { Link } from "gatsby"


const projectDescriptions = () => (
 <div className="project-descriptions">
   <Header></Header>
   <Side orientation="left"/>
   <div className="contents">
   <h1 className="title">Projects</h1>

    {/* The Secret Laboratory block */}
    <article className="block" id="secret-lab">
      <div className="visual">
        <video id="unity" autoPlay muted loop>
          <source src={require('../files/unityClip.mp4')} type="video/mp4"/>
        </video>
      </div>
      <div className="project-description">
        <div className="project-name"> The Secret Labratory</div>
        <p>Perhaps one of my favorite projects, The Secret Laboratory is a first person game prototype made using Unity.
          The game follows a girl who stumbles across a secret laboratory in the woods, only to discover all the scientists have mysteriously disappeared...
        </p>
        <p style={{marginBlockEnd: "0"}}>Click <a href="https://youtu.be/6Eh_4aEM0Pg" target="_blank" rel="noopener noreferrer">here</a> view the 4 minute game video. </p>
        <p style={{fontSize: 14, marginBlockStart: "2px"}}>(Please excuse the poor video quality, my computer could not handle running Unity + screen recording without my laptop fan sounding like a jet engine)</p>
        <p>Click <a href="https://drive.google.com/file/d/16HxR-_BIjGTcXeqf34BGHiZZ-JN6mgif/view?usp=sharing">here</a> to download the Unity .zip file.</p>
      </div> 
    </article>

    {/* plane block */}
     <article className="block" id="ready-for-takeoff">
        <div className="visual">
          <video id="plane-video" autoPlay muted loop>
            <source src={require('../files/plane.mp4')} type="video/mp4"/>
          </video>
        </div>
        <div className="project-description">
          <div className="project-name"> Ready for Takeoff</div>
          <p>Using Blender, Ready for Takeoff is a short animated clip of a plane.
          </p>
          <p>Click <a href="https://github.com/meg213/blenderFiles" target="_blank" rel="noopener noreferrer">here</a> to view or download the Blender file.</p>
        </div> 
     </article>

    {/* Mountain Tunnel block */}
    <article className="block" id="mountain-highway">
      <div className="visual">
        <video id="tunnel-video" autoPlay muted loop>
          <source src={require('../files/tunnel.mp4')} type="video/mp4"/>
        </video>
      </div>
      <div className="project-description">
          <div className="project-name"> Mountain Highway</div>
          <p> This is a low poly animation of cars travelling through a tunnel. The inspiration for this animation
          came from the Coastal Highway Route E39 project, which is to develop a series of coastal highway routes along the western region of Norway.
          </p>
         <p>Click <a href="https://github.com/meg213/blenderFiles" target="_blank" rel="noopener noreferrer">here</a> to view or download the Blender file.</p>
      </div> 
    </article>

      {/* Balance Me block */}
      <article className="block" id="balance-me">
      <div className="visual">
         <video id="bm-video" autoPlay muted loop>
          <source src={require('../files/balanceMe.mp4')} type="video/mp4"/>
        </video>
      </div>
      <div className="project-description">
        <div className="project-name"> Balance Me</div>
        <p>An application made for those with intellectual or developmental disabilities designed using Figma and developed using React Native and Fitbit SDK. The goal
          of the application is to help those that have trouble completing daily tasks and time management.
        </p>
        <p>Click <a href="https://www.figma.com/file/fCAMuaf1GMQzgupHkwO60q/App?node-id=217222%3A448" target="_blank" rel="noopener noreferrer">here</a> to view the Figma file.</p>
        <p>Click <a href="https://github.com/meg213/balance_me" target="_blank" rel="noopener noreferrer">here</a> to view the project files.</p>
        <p>Click <a href="https://youtu.be/IbOtIXRyzlg" target="_blank" rel="noopener noreferrer">here</a> to see a demo of the application.</p>
      </div>
    </article>


      {/* Blue Donkey block */}
      <article className="block" id="blue-donkey">
      <div className="visual">
        <img src={require('../images/bdc.png')} alt="Dlue Donkey Coffee"/>
      </div>
      <div className="project-description">
        <div className="project-name"> Blue Donkey Coffee Style Guide</div>
        <p>One of my favorite coffee shops on Georgia Tech's campus is <a href="https://www.bluedonkeycoffee.com/" target="_blank" rel="noopener noreferrer">Blue Donkey Coffee</a>.
          Using Adobe InDesign and Illustrator, I created a style guide that updated their logo, website, and overall company image.
        </p>
        <p>Click <a href={bdc} target="_blank" rel="noopener noreferrer">here</a> to see the style guide.</p>
      </div>
    </article>

    {/* twitterbot block */}
    <article className="block" id="twitterbot">
      <div className="visual">
        <img src={require('../images/twitter.png')} alt="twitterbot"/>
      </div>
      <div className="project-description">
        <div className="project-name"> Imaginary Planets</div>
        <p>As someone who has always been interested in space, I thought it would be fun to create a twitterbot that shared my passion for space exploration. 
          The bot uses Javascript and Cheerio to web scrape and generate planet names and descriptions, and Javascript's canvas to generate png images.
        </p>
        <p>Click <a href="https://twitter.com/making_planets" target="_blank" rel="noopener noreferrer">here</a> to see the twitter page!</p>
        <p>Click <a href="https://github.com/meg213/twitterbot" target="_blank" rel="noopener noreferrer">here</a> to view or download the project files.</p>
        <p>Want even more? <a href={twitterbot} target="_blank" rel="noopener noreferrer">Here's</a> the full project write up.</p>
      </div>
    </article>

    {/* mirror block */}
    <article className="block" id="mirror-comic">
      <div className="visual">
        <img src={require('../images/the-mirror-more.png')} alt="the mirror"/>
      </div>
      <div className="project-description">
        <div className="project-name"> The Mirror</div>
        <p>The Mirror is a comic strip made using rendered Blender images. The 13 panel comic follows a little fish who discovers
          a mirror on the ocean floor.
        </p>
        <p>Click <a href={comic} target="_blank" rel="noopener noreferrer">here</a> to see the full comic!</p>
      </div>
    </article>

    {/* data vis block */}
    <article className="block" id="images-in-time">
        <div className="visual">
          <video id="data-vis" autoPlay muted loop>
            <source src={require('../files/data.mp4')} type="video/mp4"/>
          </video>
        </div>
      <div className="project-description">
        <div className="project-name"> Images in Time</div>
        <p>Using over 3000 images, images were arranged 
        </p>
        <p>Click <a href="https://github.com/meg213/data_visualization" target="_blank" rel="noopener noreferrer">here</a> to see or download the files.</p>
        <p>Want even more? <a href={dataVis} target="_blank" rel="noopener noreferrer">Here's</a> the full project write up.</p>
      </div>
    </article>

    {/* tree block */}
    <article className="block" id="growing-tree">
      <div className="visual">
        <video id="blender" autoPlay muted loop>
          <source src={require('../files/tree.mp4')} type="video/mp4"/>
        </video>
      </div>
      <div className="project-description">
        <div className="project-name"> Tree</div>
        <p>As my first animated Blender project, this really jumpstarted my love for animation and 3D rendering!
        </p>
        <p>Click <a href="https://github.com/meg213/blenderFiles" target="_blank" rel="noopener noreferrer">here</a> to view or download the Blender file.</p>
      </div>
    </article>
    
    {/* Audio Art block */}
    <article className="block" id="audio-art">
      <div className="visual">
       <img src={require('../images/audio_art.png')} alt="audio art"/>
      </div>
      <div className="project-description">
        <div className="project-name"> Audio Art</div>
        <p>As my first animated Blender project, this really jumpstarted my love for animation and 3D rendering!
        </p>
        <p>Click <a href="https://github.com/meg213/audio_art" target="_blank" rel="noopener noreferrer">here</a> to view or download the project files.</p>
        <p>Want even more? <a href={audioArt} target="_blank" rel="noopener noreferrer">Here's</a> the full project write up.</p>
      </div>
    </article>
    

      {/* This website */}
    <article className="block" id="my-portfolio">
      <div className="visual">
        <img src={require('../images/website.png')} alt="portfolio"/>
      </div>
      <div className="project-description">
        <div className="project-name"> This Portfolio</div>
        <p>Last but not least is this portfolio! Made with React, SCSS, and Gatsby.js, I wanted to create a portfolio website that
          showcased some of my favorite works, and give a little insight into who I am.
        </p>
        <p>Click <a href="https://github.com/meg213/meg213.github.io" target="_blank" rel="noopener noreferrer">here</a> to see the project files.</p>
      </div>
    </article>  


    <div className='return'> 
     <Link to='/'> return to homepage</Link>
    </div>
  </div>
 </div>
);

export default projectDescriptions;
 