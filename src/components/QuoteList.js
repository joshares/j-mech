import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import MoreButton from "@/components/MoreButton";
export default function QuoteList({ quote, index, extraInfo, handleClick }) {
  const [show, setShow] = useState(false);

  const checkInitials = (names) => {
    const words = names;
    const wordList = words.split(" ");
    const firstLetters = wordList.map((word) => word[0]);
    const joinedWord = firstLetters.join("");
    return joinedWord;
  };
  return (
    <tbody>
      <tr class="bg-white border-b hover:bg-gray-50">
        <td class="px-4 py-3">
          <div className="flex items-center">{index + 1}</div>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div className="flex items-center gap-2">
            <p className="p-2.5 bg-blue-500 rounded-full text-white hidden sm:block">
              ME
            </p>
            <div>
              <h2 className="font-medium">
                {quote?.quoteForm?.client?.fullName}
              </h2>
              <p className="text-xs text-[#8094ae]">
                {" "}
                {quote?.quoteForm?.client?.phone}
              </p>
            </div>
          </div>
        </th>
        <td class="px-4 py-4">
          <div>
            <h3 className="font-medium text-black">
              {quote?.quoteForm?.job?.make}
            </h3>
            <p className="text-[#8094ae] text-xs">
              {quote?.quoteForm?.job?.regNo}
            </p>
          </div>
        </td>
        <td class="px-4 py-4">{quote?.quoteForm?.quantity}</td>
        <td class="px-4 py-4 text-[#8094ae] text-[13px]">
          {quote?.date} • 02:21pm
        </td>
        <td class="px-6 py-4">KSh{quote?.quoteForm?.total}.00</td>
        <td class="px-6 py-4 text-lg cursor-pointer">
          <BsThreeDots onClick={() => setShow(!show)} />
          {show && (
            <MoreButton
              href={"/quotes/id"}
              extraInfo={extraInfo}
              handleClick={handleClick}
            />
          )}
        </td>
      </tr>
    </tbody>
  );
}
