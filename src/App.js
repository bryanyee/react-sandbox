import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AnimationSandbox from './AnimationSandbox/AnimationSandbox';
import Links from './Links';
import PureComponentSandbox from './PureComponentSandbox/PureComponentSandbox';

import './App.scss';

const App = () => (
  <div className="app">
    <div className="app-container">
      <div className="mb-5">
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
  </div>
);

export default App;

/* TODO

separate containers for each sandbox

Animation: element pop in/out
Animation: slide input bottom border
Throttle/debounce
Fetch data on scroll to page end
Giphy API app
React Hooks
Redux TODO
React Context API TODO
D3
Yelp Graphql API and react-apollo

*/
