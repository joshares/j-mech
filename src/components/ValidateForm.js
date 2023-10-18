import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

export default function ValidateForm({ error }) {
  return (
    <main className="text-[#ff5c75] mt-2 p-1 pr-3 z-10 inline-block absolute bg-[#ff5c7533] rounded-lg top-full">
      <div className="border-8 border-b-[#ff5c7533] border-transparent absolute left-4 -top-4"></div>
      <div className="lowercase flex items-center gap-2 ">
        <RiErrorWarningLine />
        <p className="text-xs">{error}</p>
      </div>
    </main>
  );
}
