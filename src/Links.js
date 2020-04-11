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
    <Link className="d-block" to={{ pathname: '/render_and_memo_sandbox' }}>
      Render And Memo Sandbox
    </Link>
    <Link className="d-block" to={{ pathname: '/react_hooks_sandbox' }}>
      React Hooks Sandbox
    </Link>
    <Link className="d-block" to={{ pathname: '/xss_sandbox' }}>
      XSS Sandbox
    </Link>
  </div>
);

export default Links;
