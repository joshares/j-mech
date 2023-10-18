import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import MoreButton from "@/components/MoreButton";
export default function SingleInvoiceList({
  invoice,
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
    <tbody>
      <tr class="bg-white border-b hover:bg-gray-50">
        <td class="px-4 py-3">
          <div className="flex items-center">1</div>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div>
            <h3 className="font-medium text-black">
              {invoice?.invoiceForm?.job?.make}
            </h3>
            <p className="text-[#8094ae] text-xs">
              {invoice?.invoiceForm?.job?.regNo}
            </p>
          </div>
        </th>
        <td class="px-6 py-4">{invoice?.invoiceForm?.quantity}</td>
        <td class="px-6 py-4 text-[#8094ae] text-[13px]">
          <div>{invoice?.invoiceForm?.invoiceDate}</div>
          <div>{invoice?.invoiceForm?.paymentDate}</div>
        </td>
        <td class="px-6 py-4 text-[#8094ae] text-[13px]">
          <div className="text-black">KSh{invoice?.invoiceForm?.total}.00</div>
          <div>KSh{invoice?.invoiceForm?.balance}.00</div>
        </td>
        <td class="px-6 py-4">
          <div className="font-medium bg-[#1ee0ac26] text-[#1ee0ac] py-1.5 px-4 text-center text-xs rounded-xl">
            Paid
          </div>
        </td>
        <td class="px-6 py-4 text-lg cursor-pointer">
          <BsThreeDots onClick={() => setShow(!show)} />
          {show && (
            <MoreButton
              href={"/invoices/id"}
              extraInfo={extraInfo}
              handleClick={handleClick}
            />
          )}
        </td>
      </tr>
    </tbody>
  );
}
