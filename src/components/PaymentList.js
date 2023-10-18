import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import MoreButton from "@/components/MoreButton";
export default function PaymentList({
  payment,
  index,
  extraInfo,
  handleClick,
}) {
  const [show, setShow] = useState(false);

  const checkInitials = (fullName) => {
    const words = fullName;
    const wordList = words.split(" ");
    const firstLetters = wordList.map((word) => word[0]);
    const joinedWord = firstLetters.join("");
    return joinedWord;
  };
  return (
    <div className="font-medium text-[#364a63] text-sm grid grid-cols-[6%,80%,5%] md:grid-cols-[3em,15em,7em,4em,7em,9em,7em,3em] lg:grid-cols-[3%,25%,15%,10%,12%,14%,10%,5%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
      <div>{index + 1}</div>
      <div className="flex items-center gap-2">
        <p className="p-2.5 bg-blue-500 rounded-full text-white hidden sm:block">
          {checkInitials(payment?.paymentsForm?.client?.fullName)}
        </p>
        <div>
          <h2 className="font-medium">
            {payment?.paymentsForm?.client?.fullName}
          </h2>
          <p className="text-xs text-[#8094ae]">
            {payment?.paymentsForm?.client?.phone}
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <h3 className="font-medium">{payment?.paymentsForm?.job?.make}</h3>
        <p className="text-xs text-[#8094ae]">
          {payment?.paymentsForm?.job?.regNo}
        </p>
      </div>
      <div className="hidden md:block">
        <p className="font-medium">Invoice #117</p>
      </div>
      <div className="hidden md:block text-[#8094ae]">
        <p>{payment?.paymentsForm?.paymentDate}</p>
      </div>
      <div className="font-medium hidden md:block">
        <p>N{payment?.paymentsForm?.amount}</p>
        <p className="text-[#8094ae] text-xs">
          {payment?.paymentsForm?.paymentMethod}
        </p>
      </div>
      <div className="py-1.5 px-2.5 text-[#1ee0ac] bg-[#1ee0ac26] rounded-2xl mr-auto items-center gap-1 hidden md:flex">
        <RxDotFilled className="text-lg" />
        <p className="text-xs font-bold">Paid</p>
      </div>
      <div>
        <BsThreeDots
          className="cursor-pointer text-xl"
          onClick={() => setShow(!show)}
        />
        {show && (
          <MoreButton
            href={"/invoices/id"}
            extraInfo={extraInfo}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}
