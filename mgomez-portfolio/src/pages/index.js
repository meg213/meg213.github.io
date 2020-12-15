import React from "react";
import "../styles/styles.scss";
import Header from "../components/header";
import Banner from "../components/banner";
import Side from "../components/side";
import About from "../pages/about";
import Projects from "../pages/project"

const IndexPage = () => (
 <div >
   <Header></Header>
   <Side orientation="left"/>
   <div className="contents">
     <Banner/>
     <Projects/>
    <About/>
   </div>
 </div>
);

export default IndexPage;
 