import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import MoreButton from "@/components/MoreButton";

export default function Client({ clients, index, handleClick, extraInfo }) {
  const [show, setShow] = useState(false);

  const { names, phone, address, email } = clients.clientDetails;
  const checkInitials = (names) => {
    const words = names;
    const wordList = words.split(" ");
    const firstLetters = wordList.map((word) => word[0]);
    const joinedWord = firstLetters.join("");
    return joinedWord;
  };

  return (
    <div
      // key={index + 2}
      className="font-medium min-w-full text-[#364a63] text-sm grid grid-cols-[4%,50%,35%,5%] md:grid-cols-[3em,15em,14em,9em,6em,9em,8em,3em] lg:grid-cols-[3%,25%,23%,12%,5%,12%,10%,4%] items-center p-2.5 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple"
    >
      <div>{index + 1}</div>
      <div className="flex items-center gap-2">
        <p className="p-2.5 bg-blue-500 rounded-full text-white hidden sm:block uppercase">
          {checkInitials(names)}
        </p>
        <div>
          <h2 className="font-medium text-black">{names}</h2>
          <p className="text-xs text-[#8094ae]">{phone}</p>
        </div>
      </div>
      <div className="hidden md:block text-[#8094ae]">{email}</div>
      <div>N390,000.00</div>
      <div className="hidden md:block text-[#8094ae] text-center">1/1</div>
      <div className="hidden md:block">{clients.date}</div>
      <div className="py-1.5 px-2.5 text-[#1ee0ac] bg-[#1ee0ac26] rounded-2xl items-center gap-2 hidden md:flex">
        <RxDotFilled className="text-lg" />
        <p className="text-xs font-bold">Active</p>
      </div>
      <div>
        <BsThreeDots
          className="cursor-pointer text-xl"
          onClick={() => setShow(!show)}
        />
        {show && (
          <MoreButton
            href={`/clients/${clients.id}/details`}
            extraInfo={extraInfo}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}
