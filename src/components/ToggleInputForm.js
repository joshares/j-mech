import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const ToggleInputForm = ({ label,onChange,checked }) => {

  return (
    <Switch.Group>
      <div className="flex items-center gap-4">
        <Switch
          checked={checked}
          onChange={onChange}
          className={`${
            checked ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-[44px] items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          <span
            className={`${
              checked ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-[16px] transform rounded-full bg-white transition-transform`}
          />
        </Switch>
        <Switch.Label className="text-xs">{label}</Switch.Label>
      </div>
    </Switch.Group>
  );
};

export default ToggleInputForm;
