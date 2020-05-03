import React from "react";
import "../styles/styles.scss";
import Header from "../components/header";
import Banner from "../components/banner";
import Side from "../components/side";

const IndexPage = () => (
 <div>
   <Header/>
   <Side orientation="left"/>
   <Banner/>
 </div>
);

export default IndexPage;
 