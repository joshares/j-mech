import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import MoreButton from "@/components/MoreButton";
export default function SingleQuoteList({
  quote,
  index,
  extraInfo,
  handleClick,
}) {
  const [show, setShow] = useState(false);

  const checkInitials = (names) => {
    const words = names;
    const wordList = words.split(" ");
    const firstLetters = wordList.map((word) => word[0]);
    const joinedWord = firstLetters.join("");
    return joinedWord;
  };
  return (
    <div
      // key={index}
      className="font-medium text-[#364a63] text-sm grid grid-cols-[7%,75%,5%] md:grid-cols-[3em,15em,14em,9em,7em,9em,8em,3em] lg:grid-cols-[4%,22%,17%,10%,15%,20%,5%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple"
    >
      <div>{index + 1}</div>
      <div className="flex items-center gap-2">
        <p>{quote?.quoteForm?.job?.make}</p>
      </div>
      <div className="hidden md:block">
        <h3 className="font-medium text-black">
          {quote?.quoteForm?.job?.regNo}
        </h3>
      </div>
      <div className="hidden md:block">
        <p className="font-medium text-black">{quote?.quoteForm?.quantity}</p>
      </div>
      <div className="hidden md:block text-[#8094ae]">
        <p>{quote?.date}</p>
      </div>
      <div className="font-medium text-black hidden md:block">
        N{quote?.quoteForm?.total}
      </div>
      <div>
        <BsThreeDots
          className="cursor-pointer text-xl"
          onClick={() => setShow(!show)}
        />
        {show && (
          <MoreButton
            href={"/quotes/id"}
            extraInfo={extraInfo}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}
