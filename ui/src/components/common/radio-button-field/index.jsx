import React, { Component } from 'react';

import PropTypes from 'prop-types';

// import './styles/radio-button-field.scss';

export default class RadioButton extends Component {

  constructor(props) {
    super(props);

    this.generateOptions = this.generateOptions.bind(this);
  }

  /**
   * [generateOptions] Function to generate radio button options
   * @param  {[array]} options   array of object contains option info
   * @return {[array]}           array of generated list
   */
  generateOptions(options, onChange) {
    return options.map((elem, index) => {
      return (
        <label key={index} className="radio-inline radio-item">
          <input 
            type="radio"  
            value={elem.value} 
            checked={this.props.input.value === elem.value}
            onChange={ val => onChange(val) }
          />
          <i></i>
          <span>{elem.text}</span>
        </label>
      );
    });
  }

  render() {
    const {
      input: { onChange },
      meta: { touched, error },
      options
    } = this.props;

    return (
      <div >

        {this.generateOptions(options, onChange)}

        {/* show error message if validation failed */}
          <div className="error-msg-container">
            {
              touched && error ?
              <span className="error">{error}</span>
            : null
            }
          </div>
      </div>
    );
  }
}

RadioButton.propTypes = {
  'options': PropTypes.arrayOf(PropTypes.shape({
      'text': PropTypes.string.isRequired,
      'value': PropTypes.string.isRequired
    })).isRequired
}