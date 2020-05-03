import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// const { colors, loaderDelay } = theme;
import '../styles/styles.scss';


const Side = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome);

//   useEffect(() => {
//     if (!isHome) {
//       return;
//     }
//     const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
//     return () => clearTimeout(timeout);
//   }, []);

  return (
    <div className='side' orientation={orientation}>
        Hello this is a test
      <TransitionGroup component={null}>
        {/* {isMounted && (
          <CSSTransition classNames={isHome ? 'fade' : ''} timeout={isHome ? loaderDelay : 0}>
            {children}
          </CSSTransition>
        )} */}
      </TransitionGroup>
    </div>
  );
};

Side.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  orientation: PropTypes.string,
};

export default Side;
