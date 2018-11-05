import PropTypes from 'prop-types';
import React, { Component, Fragment, PureComponent } from 'react';

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
    console.log('render PureComponentSandbox');
    return (
    <Fragment>
      <FunctionRow content={this.state.counter} name="FunctionRow state.counter" />
      <FunctionRow content={10} name="FunctionRow static" />
      <PureComponentRow content={10} name="PureComponentRow static" />
      <PureComponentRow content={10} arbitraryProp={{ one: 1 }} name="PureComponentRow object prop" />
      <PureComponentRow content={10} arbitraryProp={() => 5} name="PureComponentRow inline function prop" />
      <PureComponentRow content={10} arbitraryProp={this.test2} name="PureComponentRow method prop"/>
      <FunctionRow content={10} arbitraryProp={this.test2} name="FunctionRow object prop" />
    </Fragment>
    );
  }
}

export default PureComponentSandbox;

const FunctionRow = ({ content, name }) => {
  console.log(`render ${name}`);
  return (
    <div className="row">
      {content}
    </div>
  );
}

FunctionRow.propTypes = {
  arbitraryProp: PropTypes.any,
  content: PropTypes.any,
  name: PropTypes.string.isRequired,
};

class PureComponentRow extends PureComponent {
  render() {
    console.log(`render ${this.props.name}`);
    return (
      <div className="row">
        {this.props.content}
      </div>
    );
  }
}

PureComponentRow.propTypes = {
  arbitraryProp: PropTypes.any,
  content: PropTypes.any,
  name: PropTypes.string.isRequired,
}
