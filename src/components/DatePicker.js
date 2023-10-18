import React, { useState } from "react";
const date = new Date();
const options = { month: "2-digit", day: "2-digit", year: "numeric" };
let formattedDate = date.toLocaleDateString("en-US", options);

const DatePicker = ({ label,date,setDate,name }) => {
  // const [date, setDate] = useState(formattedDate);

  return (
    <div className="text-sm grid gap-2">
      <label>{label}</label>
      <input
        type="date"
        name={name}
        value={date}
        onChange={setDate}
        className="flex items-center outline-none border relative text-[#8094ae] py-2 px-2 rounded-md font-medium capitalize"
      />
    </div>
  );
};

export default DatePicker;
