import React from "react";
import "../styles/styles.scss";
import Header from "../components/header";
import Banner from "../components/banner";
import Side from "../components/side";
import About from "../pages/about";
import ProjectPage from "../pages/projectPage"

const IndexPage = () => (
 <div >
   <Header></Header>
   <Side orientation="left"/>
    <Banner/>
    <div className="contents">
     <ProjectPage/>
    <About/>
   </div>
 </div>
);

export default IndexPage;
 