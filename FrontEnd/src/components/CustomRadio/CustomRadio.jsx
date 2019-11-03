import React, { Component } from "react";

function CustomRadio(props) {
  const { number, label, option, name, ...rest } = props;

  return (
    <div className="radio">
      <input id={number} name={name} type="radio" value={option} {...rest} />
      <label htmlFor={number}>{label}</label>
    </div>
  );
}

export default CustomRadio;
