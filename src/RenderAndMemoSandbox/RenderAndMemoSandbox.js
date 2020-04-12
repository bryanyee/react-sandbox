import PropTypes from 'prop-types';
import React, { Component, memo, useEffect, useState } from 'react';

import DomRemovalObserver from '../shared/DomRemovalObserver';
import { buildRandomNumber } from '../shared/utilities';

import './RenderAndMemoSandbox.scss';

class RenderAndMemoSandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.container = null;
    this.domRemovalObserver = null;
    this.timer = null;

    // Used for passing the same object reference. In a function component, this
    // would be accomplished with the useMemo hook.
    this.objectReference = { test: 'This is always the same object.' };
  }

  componentDidMount() {
    this.timer = setInterval(this.incrementCounter, 1000);

    // Log in the browser console whenver an element is removed.
    this.domRemovalObserver = new DomRemovalObserver(this.container, this.domRemovalhandler);
    this.domRemovalObserver.start();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.domRemovalObserver.disconnect();
  }

  domRemovalhandler = node => {
    console.log('Removed node:', node.dataset.name);
  }

  incrementCounter = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  test2 = () => 5;

  render() {

    return (
      <div className="container" ref={c => this.container = c}>
        <div className="row border-bottom mb-5 color-blue">
          <div className="col-6">App State</div>
          <div className="col-6">{this.state.counter}</div>
        </div>
        <div className="content">
          <div className="row mb-5 color-blue">
            <div className="col">
              <div>This app demonstrates render optimization techniques, when using features such as React.memo, PureComponent, and shouldComponentUpdate.</div><br />
              <div>Preventing re-renders based on the given props only works when using these techniques. If these are not used in child components, then passing the same reference from a parent component (such as when using the useMemo hook or _.memoize) will not help prevent re-renders.</div><br />
              <div>Caveat: Optimizing render performance is not necessary for most React apps. Even when render is called multiple times, React's reconciliation algorithm will not will destroy and recreate DOM nodes when component instances remain the same.</div><br />
              <div>In this demo, app state changes every second. The following things happen on each state change:</div>
              <ul>
                <li>The "Random Render Value" represents when a new value is calculated when the child component re-renders.</li>
                <li>The "Random Mount Value" represents when a new value is calculated when a child component mounts.</li>
                <li>A MutationObserver is used to listen for when DOM elements are removed. These events are logged to the console.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row border-bottom color-blue">
            <div className="col-3">Child Component Type</div>
            <div className="col-3">Prop Type</div>
            <div className="col-2">Random Render Value</div>
            <div className="col-1">Re-render?</div>
            <div className="col-2">Random Mount Value</div>
            <div className="col-1">Re-mount?</div>
          </div>
          <ChildComponent arbitraryProp={this.state.counter} propName="state.counter" rerender='Yes' remount='No' />
          <ChildComponent arbitraryProp={{ one: 1 }} propName="Object" rerender='Yes' remount='No' />
          <ChildComponent arbitraryProp={() => 5} propName="Inline Arrow Function" rerender='Yes' remount='No' />
          <ChildComponent arbitraryProp={10} propName="Number" rerender='Yes' remount='No' />
          <ChildComponent arbitraryProp={this.test2} propName="Parent Method" rerender='Yes' remount='No' />
          <ChildComponent arbitraryProp={this.objectReference} propName="Memoized value" rerender='Yes' remount='No' />
          <ChildComponent key={buildRandomNumber(4)} propName="Unique key" rerender='Yes' remount='Yes' />
          <MemoChildComponent arbitraryProp={this.state.counter} propName="state.counter" rerender='Yes' remount='No' />
          <MemoChildComponent arbitraryProp={{ one: 1 }} propName="Object" rerender='Yes' remount='No' />
          <MemoChildComponent arbitraryProp={() => 5} propName="Inline Arrow Function" rerender='Yes' remount='No' />
          <MemoChildComponent arbitraryProp={10} propName="Number" rerender='No' remount='No' />
          <MemoChildComponent arbitraryProp={this.test2} propName="Parent Method" rerender='No' remount='No' />
          <MemoChildComponent arbitraryProp={this.objectReference} propName="Memoized value" rerender='No' remount='No' />
          <MemoChildComponent key={buildRandomNumber(4)} propName="Unique key" rerender='Yes' remount='Yes' />
        </div>
      </div>
    );
  }
}

export default RenderAndMemoSandbox;

const ChildComponent = props => {
  const [mountValue, setMountValue] = useState(buildRandomNumber(4));
  useEffect(() => {
    setMountValue(buildRandomNumber(4));
  }, []);

  return (
    <div className="row border-bottom" data-name={`${props.type}, ${props.propName}`}>
      <div className="col-3">{props.type}</div>
      <div className="col-3">{props.propName}</div>
      <div className="col-2">{buildRandomNumber(4)}</div>
      <div className="col-1">{props.rerender}</div>
      <div className="col-2">{mountValue}</div>
      <div className="col-1">{props.remount}</div>
    </div>
  );
}

ChildComponent.defaultProps = {
  type: 'Function',
}

ChildComponent.propTypes = {
  arbitraryProp: PropTypes.any,
  propName: PropTypes.string.isRequired,
  remount: PropTypes.string.isRequired,
  rerender: PropTypes.string.isRequired,
  type: PropTypes.string,
};

// Prevent re-render of the component when given the same props.
// The same technique can be achieved with PureComponent and shouldComponentUpdate.
const MemoChildComponent = memo(props => (
  <ChildComponent type='React.memo(Function)' {...props} />
));
