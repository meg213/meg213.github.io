import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className='morgan'>Morgan Gomez</div>
      <div className="navigation">
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>About</Link>
        <Link to='/resume'>Resume</Link>
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
