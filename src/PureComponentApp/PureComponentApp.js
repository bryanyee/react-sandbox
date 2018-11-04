import PropTypes from 'prop-types';
import React, { Component, PureComponent } from 'react';
import './PureComponentApp.css';

class PureComponentApp extends Component {
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
    console.log('render PureComponentApp');
    return (
      <div className="App">
        <div className="App-header">
          <FunctionRow content={this.state.counter} name="FunctionRow state.counter" />
          <FunctionRow content={10} name="FunctionRow static" />
          <PureComponentRow content={10} name="PureComponentRow static" />
          <PureComponentRow content={10} arbitraryProp={{ one: 1 }} name="PureComponentRow object prop" />
          <PureComponentRow content={10} arbitraryProp={() => 5} name="PureComponentRow inline function prop" />
          <PureComponentRow content={10} arbitraryProp={this.test2} name="PureComponentRow method prop"/>
          <FunctionRow content={10} arbitraryProp={this.test2} name="FunctionRow object prop" />
        </div>
      </div>
    );
  }
}

export default PureComponentApp;

const FunctionRow = ({ content, name }) => {
  console.log(`render ${name}`);
  return (
    <div className="Row">
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
      <div className="Row">
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
