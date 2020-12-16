import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Resume from '../files/Resume.pdf'
import logo from '../images/logo-01.png';

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <img src={logo}/>
      <div className="navigation">
        <Link to='#projects'>Projects</Link>
        <Link to='#about'>About</Link>
        <a href={Resume} target="_blank" rel="noopener">Resume</a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}

export default Header
