import React from "react"
import "./header.scss";
import video from  "../files/tree.webm"

const Banner = () => {
    return (
        <div className="banner" id="">
            <div className="container">
                <div className="banner-name">Morgan Gomez</div>
                <div className="sub-text">A Georgia Tech undergratuate student passionate about user experience design and 3D modeling.</div>
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