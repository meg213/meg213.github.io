import React from "react"
import Project from "../components/project"

const ProjectPage = () => (
  <div className="projects" id="projects">
    <h1>Projects</h1>
    <p>Here are a few of my favorite projects!</p>
    <div className="projects-container">
        <Project
            name="The Secret Laboratory"
            type="Unity"
            image="unity"
            link="/projectDescriptions#secret-lab"
        />
        <Project
            image="plane"
            name="Ready for Takeoff"
            type="Blender"
            link="/projectDescriptions#ready-for-takeoff"
        />
        <Project
            image="highway"
            name="Mountain Highway"
            type="Blender"
            link="/projectDescriptions#mountain-highway"
        />
        <Project
            image="Balance_Me"
            name="Balance Me"
            type="React Native/Figma"
            link="/projectDescriptions#balance-me"
        />
        <Project
            image="bdc"
            name="Blue Donkey Coffee Style Guide"
            type="Illustrator/InDesign"
            link="/projectDescriptions#blue-donkey"
        />
        <Project
            image="imaginary_planets"
            link="/projectDescriptions#twitterbot"
            name="Imaginary Planets"
            type="Javascript/Twitter"
        />
        <Project
            image="the_mirror"
            name="The Mirror"
            type="Blender"
            link="/projectDescriptions#mirror-comic"
        />
        <Project
            image="data_vis"
            name="Images in Time"
            type="Processing.js"
            link="/projectDescriptions#images-in-time"
        />
        <Project
            link="/projectDescriptions#growing-tree"
            image="tree"
            name="Tree"
            type="Blender"
        />
        <Project
            image="audio_art"
            name="Audio Art"
            type="Processing.js"
            link="/projectDescriptions#audio-art"
        />
        <Project
            image="website"
            name="This Portfolio!"
            type="React/Gatsby"
            link="/projectDescriptions#my-portfolio"
        />
        <Project/>
    </div>
  </div>
)

export default ProjectPage;
