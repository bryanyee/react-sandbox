import PropTypes from 'prop-types';
import React, { Component, memo } from 'react';
import _ from 'underscore';

import './RenderAndMemoSandbox.scss';

// Add colors to text
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
            <div className="col-4">Child Component Type</div>
            <div className="col-4">Prop Type</div>
            <div className="col-4">Random Render Value</div>
          </div>
          <ChildComponent arbitraryProp={this.state.counter} propName="state.counter" />
          <ChildComponent arbitraryProp={10} propName="Number" />
          <ChildComponent arbitraryProp={{ one: 1 }} propName="Object" />
          <ChildComponent arbitraryProp={() => 5} propName="Inline Arrow Function" />
          <ChildComponent arbitraryProp={this.test2} propName="Parent Method" />
          <ChildComponent arbitraryProp={memoizedValue} propName="Memoized value" />
          <MemoChildComponent arbitraryProp={this.state.counter} propName="state.counter" />
          <MemoChildComponent arbitraryProp={10} propName="Number" />
          <MemoChildComponent arbitraryProp={{ one: 1 }} propName="Object" />
          <MemoChildComponent arbitraryProp={() => 5} propName="Inline Arrow Function" />
          <MemoChildComponent arbitraryProp={this.test2} propName="Parent Method"/>
          <MemoChildComponent arbitraryProp={memoizedValue} propName="Memoized value" />
        </div>
      </div>
    );
  }
}

export default RenderAndMemoSandbox;

const ChildComponent = props => (
  <div className="row">
    <div className="col-4">Function</div>
    <div className="col-4">{props.propName}</div>
    <div className="col-4">{Math.random()}</div>
  </div>
);

ChildComponent.propTypes = {
  arbitraryProp: PropTypes.any,
  propName: PropTypes.string.isRequired,
};

const MemoChildComponent = memo(props => (
  <div className="row">
    <div className="col-4">React.memo(Function)</div>
    <div className="col-4">{props.propName}</div>
    <div className="col-4">{Math.random()}</div>
  </div>
));

MemoChildComponent.propTypes = {
  arbitraryProp: PropTypes.any,
  propName: PropTypes.string.isRequired,
}
