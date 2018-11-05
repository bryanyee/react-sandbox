import PropTypes from 'prop-types';
import React, { Component, PureComponent } from 'react';

import './PureComponentSandbox.scss';

class PureComponentSandbox extends Component {
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
            <div className="col-4">Render</div>
          </div>
          <ComponentRow arbitraryProp={this.state.counter} propName="state.counter" />
          <ComponentRow arbitraryProp={10} propName="Number" />
          <ComponentRow arbitraryProp={{ one: 1 }} propName="Object" />
          <ComponentRow arbitraryProp={() => 5} propName="Inline Arrow Function" />
          <ComponentRow arbitraryProp={this.test2} propName="Parent Method" />
          <PureComponentRow arbitraryProp={this.state.counter} propName="state.counter" />
          <PureComponentRow arbitraryProp={10} propName="Number" />
          <PureComponentRow arbitraryProp={{ one: 1 }} propName="Object" />
          <PureComponentRow arbitraryProp={() => 5} propName="Inline Arrow Function" />
          <PureComponentRow arbitraryProp={this.test2} propName="Parent Method"/>
        </div>
      </div>
    );
  }
}

export default PureComponentSandbox;

class ComponentRow extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">Component</div>
        <div className="col-4">{this.props.propName}</div>
        <div className="col-4">{Math.random()}</div>
      </div>
    );
  }
}

ComponentRow.propTypes = {
  arbitraryProp: PropTypes.any,
  propName: PropTypes.string.isRequired,
};

class PureComponentRow extends PureComponent {
  render() {
    return (
      <div className="row">
        <div className="col-4">PureComponent</div>
        <div className="col-4">{this.props.propName}</div>
        <div className="col-4">{Math.random()}</div>
      </div>
    );
  }
}

PureComponentRow.propTypes = {
  arbitraryProp: PropTypes.any,
  propName: PropTypes.string.isRequired,
}
