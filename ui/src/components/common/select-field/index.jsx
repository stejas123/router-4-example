import React, {Component} from 'react';

import PropTypes from 'prop-types';

// import './styles/select-field';

export default class SelectField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptionValue: ''
    };

    this.onOptionChange = this.onOptionChange.bind(this);
  }

  onOptionChange(value) {
    this.setState({
      selectedOptionValue: value
    }, () => {
      this.props.input.onChange(value);
    });
  }

  render() {
    const {
      input: { value, onChange, onFocus, onBlur },
      meta: { touched, error },
      onFieldFocus,
      onFieldBlur,
      fieldLabel,
      fieldClassName,
      fieldId,
      options
    } = this.props;

    let renderOptions;

    if(options) {
      renderOptions = options.map(function(val, index) {
        if(val.hasOwnProperty('disabled') && val.disabled) {
          return <option
          key={index}
          value={val.value}
          className={`${fieldClassName || ''}`}
          disabled>{val.text}</option>;
        } else {
          return <option
          key={index}
          value={val.value}
          className={`${fieldClassName || ''}`}>{val.text}</option>;
        }
      });
    } else {
      renderOptions = <option value="" className={`${fieldClassName || ''}`}>Nothing to select</option>;
    }

    return (
      <div className="form-group clearfix">
        <div>
        {
          fieldLabel && fieldId ? <label className="filed-label" htmlFor={fieldId}>{fieldLabel}</label> : null
        }

        <div>
          {
            fieldId
            ?
              <select id={fieldId} className="form-control"
                value={value || this.state.selectedOptionValue}
                onChange={val => onChange(val)}
                onFocus={
                  () => {
                    const fieldFocus = onFieldFocus || (()=>{});
                    fieldFocus();
                    onFocus();
                  }
                }
                onBlur={
                 (val) => {
                    const fieldBlur = onFieldBlur || (()=>{});
                    fieldBlur();
                    onBlur(val);
                  }
                }
              >
                  {renderOptions}
                </select>
            :
              <select className="form-control"
                value={value || this.state.selectedOptionValue}
                onChange={val => onChange(val)}
                onFocus={
                  () => {
                    const fieldFocus = onFieldFocus || (()=>{});
                    fieldFocus();
                    onFocus();
                  }
                }
                onBlur={
                 (val) => {
                    const fieldBlur = onFieldBlur || (()=>{});
                    fieldBlur();
                    onBlur(val);
                  }
                }
               >
                {renderOptions}
              </select>
          }
          </div>
        </div>

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

SelectField.propTypes = {
  'fieldLabel': PropTypes.string,
  'fieldClassName': PropTypes.string,
  'fieldId': PropTypes.string,
  'options': PropTypes.arrayOf(PropTypes.shape({
      'text': PropTypes.string.isRequired,
      'value': PropTypes.string.isRequired
    })).isRequired
}
