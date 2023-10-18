import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import MoreButton from "@/components/MoreButton";

export default function SinglePaymentList({
  payment,
  index,
  extraInfo,
  handleClick,
}) {
  const [show, setShow] = useState(false);

  return (
    <tbody>
      <tr class="bg-white border-b hover:bg-gray-50">
        <td class="px-6 py-3">
          <div className="flex items-center">{index + 1}</div>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div>
            <h3 className="font-medium text-black">
              {payment?.paymentsForm?.job?.make}
            </h3>
            <p className="text-[#8094ae]">
              {payment?.paymentsForm?.job?.regNo}
            </p>
          </div>
        </th>
        <td class="px-6 py-4">Silver</td>
        <td class="px-6 py-4">{payment?.paymentsForm?.paymentDate}</td>
        <td class="px-6 py-4">N{payment?.paymentsForm?.amount}</td>
        <td class="px-6 py-4">
          <div className="font-medium bg-[#1ee0ac26] text-[#1ee0ac] py-1.5 px-4 text-center text-xs rounded-xl">
            Active
          </div>
        </td>
        <td class="px-6 py-4">
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
        </td>
      </tr>
    </tbody>
  );
}
