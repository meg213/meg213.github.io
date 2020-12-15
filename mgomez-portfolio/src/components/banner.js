import React from "react"
import "./header.scss";
import video from  "../files/tree.mp4"

const Banner = () => {
    return (
        <div className="banner">
            {/* <video id="tree" autoPlay muted loop src={video}></video> */}
            <div className="container">
                <div className="banner-name">Morgan Gomez</div>
                <div className="sub-text">interaction design and experimental media</div>
            </div>
        </div>
    )
}

export default Banner;