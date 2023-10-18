import React, { useState } from "react";
import MySvg from "./MySvg";
import { useFormContext } from "@/context/form_context";

const Fuel = () => {
  const { fRange, fuelRange } = useFormContext();

  return (
    <div>
      <MySvg range={fRange} />

      <input
        type="range"
        min="-36"
        max="82"
        value={fRange}
        onChange={(e) => fuelRange(e)}
        name="fuel_level"
        className="w-full"
        aria-invalid="false"
      />
    </div>
  );
};

export default Fuel;
