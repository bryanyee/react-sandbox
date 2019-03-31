import { Link } from 'react-router-dom';
import React from 'react';

import './Links.scss';

const Links = () => (
  <div className="links-container">
    <Link className="d-block" to={{ pathname: '/' }}>
      /
    </Link>
    <Link className="d-block" to={{ pathname: '/animation_sandbox' }}>
      Animation Sandbox
    </Link>
    <Link className="d-block" to={{ pathname: '/pure_component_sandbox' }}>
      Pure Component Sandbox
    </Link>
    <Link className="d-block" to={{ pathname: '/xss_sandbox' }}>
      XSS Sandbox
    </Link>
  </div>
);

export default Links;
