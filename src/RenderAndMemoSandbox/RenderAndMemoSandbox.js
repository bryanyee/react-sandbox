import PropTypes from 'prop-types';
import React, { Component, memo } from 'react';
import _ from 'underscore';

import './RenderAndMemoSandbox.scss';

// Add project description
// Add dom observers and key props

class RenderAndMemoSandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    setInterval(this.incrementCounter, 1000);
  }

  incrementCounter = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  test2 = () => 5;

  render() {
    const testFunction = _anyArg => 5;
    const memoizedTestFunction = _.memoize(testFunction);
    const memoizedValue = memoizedTestFunction('anyArg');

    return (
      <div className="container">
        <div className="row mb-5 color-blue">
          <div className="col-6">App State</div>
          <div className="col-6">{this.state.counter}</div>
        </div>
        <div className="content">
          <div className="row color-blue">
            <div className="col-3">Child Component Type</div>
            <div className="col-3">Prop Type</div>
            <div className="col-3">Random Render Value</div>
            <div className="col-3">Re-render?</div>
          </div>
          <ChildComponent arbitraryProp={this.state.counter} propName="state.counter" rerender='Yes' />
          <ChildComponent arbitraryProp={10} propName="Number" rerender='Yes' />
          <ChildComponent arbitraryProp={{ one: 1 }} propName="Object" rerender='Yes' />
          <ChildComponent arbitraryProp={() => 5} propName="Inline Arrow Function" rerender='Yes' />
          <ChildComponent arbitraryProp={this.test2} propName="Parent Method" rerender='Yes' />
          <ChildComponent arbitraryProp={memoizedValue} propName="Memoized value" rerender='Yes' />
          <MemoChildComponent arbitraryProp={this.state.counter} propName="state.counter" rerender='Yes' />
          <MemoChildComponent arbitraryProp={10} propName="Number" rerender='No' />
          <MemoChildComponent arbitraryProp={{ one: 1 }} propName="Object" rerender='Yes' />
          <MemoChildComponent arbitraryProp={() => 5} propName="Inline Arrow Function" rerender='Yes' />
          <MemoChildComponent arbitraryProp={this.test2} propName="Parent Method" rerender='No' />
          <MemoChildComponent arbitraryProp={memoizedValue} propName="Memoized value" rerender='No' />
        </div>
      </div>
    );
  }
}

export default RenderAndMemoSandbox;

const ChildComponent = props => (
  <div className="row">
    <div className="col-3">Function</div>
    <div className="col-3">{props.propName}</div>
    <div className="col-3">{Math.random()}</div>
    <div className="col-3">{props.rerender}</div>
  </div>
);

ChildComponent.propTypes = {
  arbitraryProp: PropTypes.any,
  propName: PropTypes.string.isRequired,
  rerender: PropTypes.string.isRequired,
};

const MemoChildComponent = memo(props => (
  <div className="row">
    <div className="col-3">React.memo(Function)</div>
    <div className="col-3">{props.propName}</div>
    <div className="col-3">{Math.random()}</div>
    <div className="col-3">{props.rerender}</div>
  </div>
));

MemoChildComponent.propTypes = {
  arbitraryProp: PropTypes.any,
  propName: PropTypes.string.isRequired,
  rerender: PropTypes.string.isRequired,
}
