import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AnimationSandbox from './AnimationSandbox/AnimationSandbox';
import Links from './Links';
import ReactHooksSandbox from './ReactHooksSandbox/ReactHooksSandbox';
import RenderAndMemoSandbox from './RenderAndMemoSandbox/RenderAndMemoSandbox';
import XssSandbox from './XssSandbox/XssSandbox';

import './App.scss';

const App = () => (
  <div className="app">
    <div className="app-container">
      <div className="mb-5">
        <BrowserRouter basename="/">
          <Fragment>
            <Route exact path="/" component={() => <div />} />
            <Route path="/animation_sandbox" component={AnimationSandbox} />
            <Route path="/render_and_memo_sandbox" component={RenderAndMemoSandbox} />
            <Route path="/react_hooks_sandbox" component={ReactHooksSandbox} />
            <Route path="/xss_sandbox" component={XssSandbox} />
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
Redux TODO
React Context API TODO
D3
Yelp Graphql API and react-apollo

*/
