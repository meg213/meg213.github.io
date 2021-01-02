import { Link } from "gatsby";
import PropTypes from "prop-types"
import React from "react"
import "./project.css";

class Project extends React.Component {
    render (){
        return (
            <Link to={this.props.link}>
             <div className="project">
                <img  src={require('../images/' + this.props.image + '.png')}  />
                <div className="overlay">
                    <div className="text">
                        <div className="name">{this.props.name} </div>
                        <div className="type">{this.props.type} </div>
                    </div>
                </div>
             </div>
            </Link>
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