import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

import AnimationSandbox from './AnimationSandbox/AnimationSandbox';
import Links from './Links';
import ReactHooksSandbox from './ReactHooksSandbox/ReactHooksSandbox';
import RenderAndMemoSandbox from './RenderAndMemoSandbox/RenderAndMemoSandbox';
import XssSandbox from './XssSandbox/XssSandbox';

import './App.scss';

const Layout = () => <><Links /><Outlet /></>;

const App = () => (
  <div className="app">
    <div className="app-container">
      <div className="mb-5">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Layout />}>
              <Route path="animation_sandbox" element={<AnimationSandbox />} />
              <Route path="render_and_memo_sandbox" element={<RenderAndMemoSandbox />} />
              <Route path="react_hooks_sandbox" element={<ReactHooksSandbox />} />
              <Route path="xss_sandbox" element={<XssSandbox />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </div>
);

export default App;

/* TODO

separate containers for each sandbox

useEffect vs useLayoutEffect
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
