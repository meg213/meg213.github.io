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
            link="/projectInfo"
        />
        <Project
            image="plane"
            name="Ready for Takeoff"
            type="Blender"
            link="/projectInfo"
        />
        <Project
            image="highway"
            name="Mountain Highway"
            type="Blender"
            link="/projectInfo"
        />
        <Project
            image="Balance_Me"
            name="Balance Me"
            type="React Native/Figma"
            link="/projectInfo"
        />
        <Project
            image="bdc"
            name="Blue Donkey Coffee Style Guide"
            type="Illustrator/InDesign"
            link="/projectInfo"
        />
        <Project
            image="imaginary_planets"
            link="/projectInfo"
            name="Imaginary Planets"
            type="Javascript/Twitter"
        />
        <Project
            image="the_mirror"
            name="The Mirror"
            type="Blender"
            link="/projectInfo"
        />
        <Project
            image="data_vis"
            name="Images in Time"
            type="Processing.js"
            link="/projectInfo"
        />
        <Project
            link="/projectInfo"
            image="tree"
            name="Tree"
            type="Blender"
        />
        <Project
            image="audio_art"
            name="Audio Art"
            type="Processing.js"
            link="/projectInfo"
        />
        <Project
            image="website"
            name="This Portfolio!"
            type="React/Gatsby"
            link="/projectInfo"
        />
        <Project/>
    </div>
  </div>
)

export default ProjectPage;
