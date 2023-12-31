// Input.jsx
import React, { useState } from "react";
import "./input.css";

function Input(props) {
  const {
    name,
    id,
    placeholder,
    type,
    label,
    errormsg,
    pattern,
    handleChange,
  } = props;
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const handleBlur = (event) => {
    const isValid = pattern
      ? new RegExp(pattern).test(event.target.value)
      : true;
    setIsErrorVisible(!isValid);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={(e) => handleChange(id, e.target.value)}
        {...props}
      />
      {isErrorVisible && <span>{errormsg}</span>}
    </div>
  );
}

export default Input;
