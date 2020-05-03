import React from 'react';
import PropTypes from 'prop-types';
import IconGitHub from '../icons/github';
import IconInstagram from '../icons/instagram';
import IconLinkedin from '../icons/linkedin';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    default:
      return <IconLinkedin />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
