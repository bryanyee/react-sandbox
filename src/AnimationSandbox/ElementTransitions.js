import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './ElementTransitions.scss'

const VALUES = Object.freeze(['One', 'Two', 'Three', 'Four', 'Five']);

class ElementTransitions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      show: false,
    };
  }

  componentDidMount() {
    this.setState({ show: true });
  }

  setExitTimeout = () => {
    setTimeout(() => {
      this.setState({ show: false });
    }, 1000);
  }

  setNextValue = () => {
    let index = this.state.index + 1;

    if (index / (VALUES.length - 1) > 1) {
      index = 0;
    }

    this.setState({
      index,
      show: true,
    });
  }

  render() {
    return (
      <div className="my-3">
        <CSSTransition
          classNames="my-fade"
          in={this.state.show}
          onEntered={this.setExitTimeout}
          onExited={this.setNextValue}
          timeout={500}
        >
          {() => (
            <div className="my-fade">{VALUES[this.state.index]}</div>
          )}
        </CSSTransition>
      </div>
    )
  }
}

export default ElementTransitions;
