import React, { Component } from 'react';

// import './styles/button.scss';

class Button extends Component {
  render() {

    const {
      fieldClassName,
      fieldLabel,
      isDisabled,
      onClick,
      clickParameter
    } = this.props;

    /**
     * check whether onClick function provided or not
     * if not then assign an anonymous function to avoid errors
     */
    let onClickAction = typeof onClick === 'function' ? onClick : () => {};

    return(
      <button
        type="button"
        className={`btn sub-btn normal-btn text-uppercase ${fieldClassName}`}
        onClick={e => onClickAction(e, clickParameter)}
        disabled={isDisabled}
      >

        {
          isDisabled ? <i className="glyphicon glyphicon-refresh glyphicon-refresh-animate" /> : <i />
        }

        { fieldLabel ? fieldLabel : 'Submit' }

      </button>
    );
  }
}

export default Button;
