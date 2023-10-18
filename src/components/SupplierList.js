import React, { useState } from "react";
import MoreButton from "./MoreButton";
import { BsThreeDots, BsTrash } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { HiOutlinePencil } from "react-icons/hi";
import EditSuppliersForm from "./forms/EditForms/EditSupplierForm";
import { useFormContext } from "@/context/form_context";

export default function SupplierList({ supplier, index }) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const { fillSupplierForm } = useFormContext();

  const handleForm = (supplier) => {
    fillSupplierForm(supplier);
    setShow(!show);
  };

  const extraInfo = [
    { name: "Edit Details", icon: <HiOutlinePencil /> },
    {
      name: "View Report",
      icon: <TbReportAnalytics />,
    },
    { name: "Delete Supplier", icon: <BsTrash /> },
  ];
  const handleClick = (index) => {
    // Perform different setState functions based on index
    if (index === 0) {
      setOpen(true);
    }
  };
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
      className="font-normal text-[#364a63] text-sm grid grid-cols-[6%,50%,30%,6%] lg:grid-cols-[3%,25%,25%,15%,9%,12%,4%] items-center p-2.5 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple"
    >
      {open && (
        <EditSuppliersForm open={open} setOpen={setOpen} supplier={supplier} />
      )}
      <div>{index + 1}</div>
      <div className="flex items-center gap-2">
        <p className="p-2.5 bg-blue-500 rounded-full text-white hidden sm:block">
          {checkInitials(supplier.supplierForm?.supplierName)}
        </p>
        <div>
          <h2 className="font-medium">
            {supplier?.supplierForm?.supplierName}
          </h2>
          <p className="text-xs text-[#8094ae]">
            {supplier?.supplierForm?.phone}
          </p>
        </div>
      </div>
      <div className="hidden sm:block text-[#8094ae]">
        {supplier?.supplierForm?.email}
      </div>
      <div className="text-[#8094ae]">{supplier?.supplied}</div>
      <div className="hidden sm:block text-[#8094ae]">{supplier?.ad}</div>
      <div className="hidden sm:block">N{supplier?.balance}</div>
      <div>
        <BsThreeDots
          className="cursor-pointer text-xl"
          onClick={() => handleForm(supplier)}
        />
        {show && (
          <MoreButton
            href={""}
            extraInfo={extraInfo}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}
