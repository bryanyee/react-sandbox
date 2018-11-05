import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AnimationSandbox from './AnimationSandbox/AnimationSandbox';
import Links from './Links';
import PureComponentSandbox from './PureComponentSandbox/PureComponentSandbox';

import './App.scss';

const App = () => (
  <div className="app">
    <div className="app-container">
      <BrowserRouter basename="/">
        <Fragment>
          <Route exact path="/" component={() => <div />} />
          <Route path="/animation_sandbox" component={AnimationSandbox} />
          <Route path="/pure_component_sandbox" component={PureComponentSandbox} />
          <Route component={Links} />
        </Fragment>
      </BrowserRouter>
    </div>
  </div>
);

export default App;
