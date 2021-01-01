import PropTypes from "prop-types"
import React from "react"
import "./project.css";
import tree from "../images/tree.png"

class Project extends React.Component {
    handleClick = () => {
        window.location.assign(this.props.link);
    }

    render (){
        return (
            <div className="project" onClick={this.handleClick}>
                <img  src={require('../images/' + this.props.image + '.png')}  />
                <div className="overlay">
                    <div className="text">
                        <div className="name">{this.props.name} </div>
                        <div className="type">{this.props.type} </div>
                    </div>
                </div>
            </div>
        )
    }
}

Project.propTypes = {
    image: PropTypes.any,
    name: PropTypes.string,
    type: PropTypes.string,
    link: PropTypes.string,
}
Project.defaultProps = {
    image: "gatsby-icon",
    name: "Sample",
    type: 'Illustrator',
    link: null,
}

export default Project;