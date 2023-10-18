import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import MoreButton from "@/components/MoreButton";

export default function TeamList({ team, index, handleClick, extraInfo }) {
  const [show, setShow] = useState(false);

  const { fullName, phone, address, email } = team.team;
  const checkInitials = (fullName) => {
    const words = fullName;
    const wordList = words.split(" ");
    const firstLetters = wordList.map((word) => word[0]);
    const joinedWord = firstLetters.join("");
    return joinedWord;
  };
  return (
    <div
      // key={index}
      className="font-normal text-[#364a63] text-sm grid grid-cols-[6%,40%,22%,22%,5%] gap-2 md:grid-cols-[3em,15em,8em,8em,7em,9em,7em,3em] lg:grid-cols-[3%,25%,12%,12%,10%,15%,10%,4%] items-center p-2.5 border border-transparent border-b-gray-200 hover:shadow-hoverPurple"
    >
      <div>{index + 1}</div>
      <div className="flex items-center gap-2">
        <p className="p-2.5 bg-blue-500 rounded-full text-white hidden sm:block">
          {checkInitials(fullName)}
        </p>
        <div>
          <h2 className="font-medium">
            {/* {team.firstName} {team.lastName} */}
            {fullName}
          </h2>
          <p className="text-xs text-[#8094ae]">{phone}</p>
        </div>
      </div>
      <div className="py-1.5 px-2.5 text-[#1ee0ac] bg-[#1ee0ac26] rounded-2xl flex items-center gap-2 mr-auto">
        <RxDotFilled className="text-lg" />
        <p className="text-xs font-bold">{team.role}</p>
      </div>
      <div>N0.00</div>
      <div className="hidden md:block text-[#8094ae]">0/0</div>
      <div className="hidden md:block text-[#8094ae]">{team.date}</div>
      <div className="text-[#1ee0ac] hidden md:block">{team.status}</div>
      <div>
        <BsThreeDots
          className="cursor-pointer"
          onClick={() => setShow(!show)}
        />
        {show && (
          <MoreButton
            href={`/teamMembers/${team.id}/details`}
            extraInfo={extraInfo}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}
