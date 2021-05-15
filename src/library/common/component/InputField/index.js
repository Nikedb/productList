import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
                      type,
                      onChange,
                      label,
                      field,
                      testId,
                      inputValue,
                      placeholder,
                      extraProps,
                      fieldError,
                      isDisabled,
                    }) => {
  const handleChange = event => {
    const { value } = event.target;
    onChange(value, field);
  };

  return (
    <div className={`input-field ${fieldError}`}>
      {label !== '' ? (
        <label className="inputField-label" htmlFor="inputField">{label}</label>
      ) : null}
      <input
        autoComplete="off"
        {...extraProps}
        disabled={isDisabled}
        type={type}
        className="form-control"
        data-test={testId}
        aria-describedby="inputField"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  inputValue: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  testId: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.string,
  extraProps: PropTypes.object,
};

InputField.defaultProps = {
  label: '',
  testId: '',
  placeholder: '',
  field: '',
  type: 'text',
  isDisabled: false,
  extraProps: {},
};

export default InputField;
