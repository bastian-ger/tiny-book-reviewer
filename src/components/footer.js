import React from 'react';
import FontAwesomeLink from './fontawesome_link';

const Footer = (props) => {
  return (
    <div className="text-center mb-3 mt-3">
      <FontAwesomeLink
        classes={['fab', 'fa-twitter', 'fa-3x', 'purple', 'mr-2', 'mr-sm-3']}
        url="https://twitter.com/?lang=de"
        name="Twitter"
      />
      <FontAwesomeLink
        classes={['fab', 'fa-facebook-f', 'fa-3x', 'purple', 'mr-2', 'mr-sm-3']}
        url="https://de-de.facebook.com/?_fb_noscript=1"
        name="Facebook"
      />
      <FontAwesomeLink
        classes={['fab', 'fa-youtube', 'fa-3x', 'purple', 'mr-2', 'mr-sm-3']}
        url="https://www.youtube.com/"
        name="Youtube"
      />
    </div>
  );
}

export default Footer;
