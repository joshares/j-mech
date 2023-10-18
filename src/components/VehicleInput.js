import React from "react";
import VehicleRequiredPrompt from "./VehicleRequiredPrompt";

const VehicleInput = ({ label, onChange, name, value, error, touched }) => {
  return (
    <div className="text-sm grid gap-2 relative">
      <label>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
      />
      {error && touched && <VehicleRequiredPrompt message={error} />}
    </div>
  );
};

export default VehicleInput;
