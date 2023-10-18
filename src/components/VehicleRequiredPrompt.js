import React from "react";

const VehicleRequiredPrompt = ({ message }) => {
  return (
    <span id="make-error" className="invalid normal-case">
      {message}
    </span>
  );
};

export default VehicleRequiredPrompt;
