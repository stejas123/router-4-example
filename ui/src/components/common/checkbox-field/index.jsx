import React, {Component} from 'react';
import {Field} from "redux-form";
import PropTypes from 'prop-types';

export default class CheckboxField extends Component {

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      showTextBox: false
    }
  }

  field = ({input, meta, options}) => {

    const {name, onChange, onBlur, onFocus} = input;
    const {touched, error} = meta;
    const inputValue = input.value;

    const checkboxes = options.map(({label, value}, index) => {

      const handleChange = (event) => {
        const arr = [...inputValue];
        if (event.target.checked) {
          arr.push(value);
        }
        else {
          arr.splice(arr.indexOf(value), 1);
        }
        onBlur(arr);
        return onChange(arr);
      };

      const checked = inputValue.includes(value);

      return (
        <label key={`checkbox-${index}`}>
          <input
            type="checkbox"
            name={`${name}[${index}]`}
            value={inputValue || value}
            checked={checked}
            onChange={handleChange}
            onFocus={onFocus}
          />
        <span className="checkbox-lbl">{label}</span>
        </label>
      );
    });

    return (
      <div>
        <div>{checkboxes}</div>
        {touched && error && <p className="error">{error}</p>}
      </div>
    );
  };

  render() {
    const {
      input
    } = this.props;

    return <Field {...this.props} type="checkbox" component={this.field} name={input.name} />;
  }
}
