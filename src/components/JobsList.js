import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import MoreButton from "@/components/MoreButton";

export default function JobsList({ jobs, index, handleClick, extraInfo }) {
  const [show, setShow] = useState(false);

  const { fullName, phone } = jobs.jobForm.client;
  const { make, model, startDate, expectedDate, status, regNo } = jobs.jobForm;
  // const checkInitials = (fullName) => {
  //   const words = fullName;
  //   const wordList = words.split(" ");
  //   const firstLetters = wordList.map((word) => word[0]);
  //   const joinedWord = firstLetters.join("");
  //   return joinedWord;
  // };
  return (
    <div className="font-normal text-[#364a63] text-[13px] grid grid-cols-[3em,15em,10em,11em,8em,6em,9em,3em] lg:grid-cols-[3%,25%,15%,20%,12%,8%,14%,4%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 hover:shadow-hoverPurple">
      <div>{index + 1}</div>
      <div className="flex items-center gap-2">
        <p className="p-2.5 bg-blue-500 rounded-full text-white hidden sm:block">
          ME
        </p>
        <div>
          <h2 className="font-medium text-black">{fullName}</h2>
          <p className="text-xs text-[#8094ae]">{phone}</p>
        </div>
      </div>
      <div>
        <h3 className="font-medium text-black">{make}</h3>
        <p className="text-[#8094ae]">{regNo}</p>
      </div>
      <div>
        <h3 className="font-medium text-black">N0.00</h3>
        <p className="text-[#8094ae]">
          {startDate} - {expectedDate}
        </p>
      </div>
      <div>
        <h3 className="font-medium text-[#8094ae]">N0.00</h3>
        <p className="text-[#8094ae]">N0.00</p>
      </div>
      <div className="text-[#8094ae]">0/0</div>
      <div className="py-1.5 px-2.5 text-[#f4bd0e] bg-[#f4bd0e26] rounded-2xl flex items-center mr-auto ">
        <RxDotFilled className="text-xl" />
        <p className="text-xs font-bold">{status}</p>
      </div>
      <div>
        <BsThreeDots
          className="cursor-pointer text-xl"
          onClick={() => setShow(!show)}
        />
        {show && (
          <MoreButton
            href={`/jobs/${jobs.id}/details`}
            extraInfo={extraInfo}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}
