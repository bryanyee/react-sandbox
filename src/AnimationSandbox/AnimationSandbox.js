import React, { Fragment } from 'react';

import ElementTransitions from './ElementTransitions';
import FadeAnimation from './FadeAnimation';
import HoverText from './HoverText';
import Spinners from './Spinners';
import Slide from './Slide';

/*

element pop in/out
slide input bottom border

*/

const AnimationSandbox = () => (
  <Fragment>
    <Spinners />
    <Slide />
    <HoverText />
    <FadeAnimation />
    <ElementTransitions />
  </Fragment>
);

export default AnimationSandbox;
