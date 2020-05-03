import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import IconGitHub from '../components/icons/github';
import IconInstagram from '../components/icons/instagram';
import IconLinkedin from '../components/icons/linkedin';
import '../styles/styles.scss';

const Side = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome);

  return (
    <div className='social' orientation={orientation}>
         <ul className = 'social-list'>
            <li className='icon'>
              <a
                className='icon-linkedIn'
                href='https://www.linkedin.com/in/morgan-gomez-8b4745142/'
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label='Linkedin'>
                <IconLinkedin/>
                </a>
            </li>
            <li className='icon'>
              <a
                className='icon-github'
                href='https://github.com/meg213'
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label='Github'>
                <IconGitHub/>
                </a>
            </li>
            <li className='icon'>
              <a
                className='icon-instagram'
                href='https://www.instagram.com/morgangomez213/?hl=en'
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label='Instagram'>
                <IconInstagram/>
                </a>
            </li>
        </ul>
    </div>
  );
};

Side.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  orientation: PropTypes.string,
};

export default Side;
