import React from "react"
import "./header.scss";
import video from  "../files/tree.webm"

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner-name">Morgan Gomez</div>
                <div className="sub-text">interaction design and experimental media</div>
            </div>
            <div className="video-container">
                <video id="tree" autoPlay muted loop>
                    <source src={video} type="video/webm"/>
                </video>
           </div>
        </div>
    )
}

export default Banner;