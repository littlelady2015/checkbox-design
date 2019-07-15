import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';

class Checkbox extends Component {
  render() {
    const { label, checked, disabled, handleCheckboxChange, style } = this.props;
    return (
      <div className="checkbox">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={handleCheckboxChange}
      />
          {label}
          <span className={style}></span>
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  handleCheckboxChange: PropTypes.func,
};
Checkbox.defaultProps = {
    label: 'label',
    disabled: false,
    checked: false,
}

export default Checkbox;
