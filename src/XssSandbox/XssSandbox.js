/* eslint no-script-url: "off" */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class XssSandbox extends PureComponent {
  state = { show: false };

  toggeShow = () => {
    this.setState(({ show }) => ({ show: !show }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <a href={this.props.badHref}>Bad link</a>
        </div>
        <div className="row">
          <button onClick={this.toggeShow} >Render bad component</button>
          {this.state.show && (
            <div className="d-inline">
              <span>Attacked!</span>
              <span dangerouslySetInnerHTML={{ __html: this.props.badMarkup }}></span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

XssSandbox.defaultProps = {
  badHref: "javascript:alert('Attacked!')",
  badMarkup: "<img src=x onerror=alert('Attacked!') />",
};

XssSandbox.propTypes = {
  badHref: PropTypes.string,
  badMarkup: PropTypes.string,
};
