import React, { useState } from "react";

function CustomCheckbox(props) {
  const { isChecked, number, label, inline, ...rest } = props;
  const [is_checked, setIs_checked] = useState(isChecked ? true : false);

  function handleClick() {
    setIs_checked(!is_checked);
  }
  const classes =
    inline !== undefined ? "checkbox checkbox-inline" : "checkbox";
  return (
    <div className={classes}>
      <input
        id={number}
        type="checkbox"
        onChange={handleClick}
        checked={is_checked}
        {...rest}
      />
      <label htmlFor={number}>{label}</label>
    </div>
  );
}

export default CustomCheckbox;
