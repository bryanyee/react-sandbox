import React, { Fragment } from 'react';

import HoverText from './HoverText';
import Spinners from './Spinners';
import Slide from './Slide';

/*

fade in/out changing text
element pop in/out
slide input bottom border

*/

const AnimationSandbox = () => (
  <Fragment>
    <Spinners />
    <Slide />
    <HoverText />
  </Fragment>
);

export default AnimationSandbox;
