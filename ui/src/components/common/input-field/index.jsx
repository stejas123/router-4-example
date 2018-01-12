import React, {Component} from 'react';

import PropTypes from 'prop-types';

import './styles/input-field';

export default class InputField extends Component {
   constructor(props) {
    super(props);
    this.triggerBlur = this.triggerBlur.bind(this);
  }

  // blur the TextInput on submit editing
  triggerBlur() {
    if (this.refs.textInput) this.refs.textInput.blur();
  }

  render() {

    const {
      input: { value, onChange, onBlur, onFocus },
      meta: { touched, error, active },
      fieldType, /*specify if the input should be of any specific type*/
      fieldName, /* specify name of the field */
      fieldLabel, /* specify Label for the field */
      fieldId, /* specify Id for the field */
      placeholderName, /* specify placeholder */
      fieldClassName, /* specify className for the field */
      isDisabled, /* make field disable */
      onFieldFocus, /* Field focus */
      onFieldBlur, /* Field blur */
      isMandatory,
      maxLength,
      minLength
    } = this.props;

    return (
      <div className="form-group clearfix">
        <div className={`clearfix label-and-field ${fieldClassName ? fieldClassName : ''}`}>

          {
            fieldLabel && fieldId ? <label className={`filed-label ${isMandatory ? 'required' : ''}`} htmlFor={fieldId}>{fieldLabel}</label> : null
          }

          {
            fieldId
            ?
              <input
                onChange={ val => onChange(val) }
                onSubmit={ () => { this.triggerBlur(); } }
                value={ value }
                type={fieldType || 'text'}
                id={fieldId}
                placeholder={placeholderName}
                maxLength={maxLength}
                minLength={minLength}
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
                disabled={isDisabled}
                className={`form-control text-field ${ touched && error ? 'has-error' : ''} ${ active && error ? 'focus' : ''}`} {...fieldName}/>
            :
              <input
                onChange={ val => onChange(val) }
                onSubmit={ () => { this.triggerBlur(); } }
                value={ value }
                type={ fieldType || 'text' }
                maxLength={maxLength}
                minLength={minLength}
                placeholder={placeholderName}
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
              disabled={isDisabled}
              className={`form-control text-field ${ touched && error ? 'has-error' : ''} ${ active && !error ? 'focus' : ''}`} {...fieldName}/>
          }

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

InputField.propTypes = {
  'fieldType': PropTypes.string,
  'fieldName': PropTypes.string,
  'fieldLabel': PropTypes.string,
  'fieldId': PropTypes.string,
  'placeholderName': PropTypes.string,
  'fieldClassName': PropTypes.string,
  'isDisabled': PropTypes.bool,
  'isMandatory': PropTypes.bool
}
