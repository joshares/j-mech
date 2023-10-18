import React from "react";
import VehicleRequiredPrompt from "./VehicleRequiredPrompt";

const DropDownSelect = ({
  label,
  select,
  option,
  name,
  onChange,
  value,
  error,
  touched,
}) => {
  return (
    <div className="text-sm grid gap-2 relative">
      <label>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
      >
        {select && <option>{select}</option>}
        <option>{option}</option>
      </select>
      {error && touched && <VehicleRequiredPrompt message={error} />}
    </div>
  );
};

export default DropDownSelect;
