import React, { Fragment } from 'react';

import logo from './logo.svg';

import './Spinners.scss';

const Spinners = () => (
  <Fragment>
    <img src={logo} className="App-logo spin-very-slow" alt="logo" />
    <div className="my-3 spin-fast spinner-sm" />
    <div className="my-3 spin-medium spinner-md" />
  </Fragment>
);

export default Spinners;
