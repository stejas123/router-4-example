import React, {Component} from 'react';

import PropTypes from 'prop-types';

import './styles/submit-button.scss';

export default class SubmitButton extends Component {
  render() {
    const { disableSubmit, classes, buttonText, justDisableBtn } = this.props;

    /**
     * check whether redirectToError function has provided or not
     * if not then assign dummy function
     */
    const redirectToError = typeof this.props.redirectToError === 'function' ? this.props.redirectToError : () => {};

    const btnClass = classes ? classes : '';

    return (
      <button title={ buttonText || '' } type="submit" className={`btn sub-btn ${btnClass}`} disabled={disableSubmit ? disableSubmit : justDisableBtn} onClick={e => redirectToError(e)}>
        {disableSubmit ?
          <i className="glyphicon glyphicon-refresh glyphicon-refresh-animate" /> :
          <i/>
        } { buttonText ? buttonText : 'Submit' }
      </button>
    );
  }
}

SubmitButton.propTypes = {
  'disableSubmit': PropTypes.bool,
  'classes': PropTypes.string,
  'buttonText': PropTypes.string,
  'justDisableBtn': PropTypes.bool
}
