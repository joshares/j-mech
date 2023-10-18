import React, { useState, useEffect } from "react";
import Layout from "../../../layout/Layout";
import { RxDotFilled } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import NewInsuranceForm from "@/components/forms/NewInsuranceForm";
import { CgMenuRight } from "react-icons/cg";
import { useFormContext } from "@/context/form_context";
import MoreButton from "@/components/MoreButton";
import { HiOutlinePencil } from "react-icons/hi";
import { TbMessageCircle } from "react-icons/tb";
import { BsTrash, BsEye } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import NewJobCard from "@/components/forms/NewJobCard";
import NewInvoiceForm from "@/components/forms/NewInvoiceForm";
import NewQuotesForm from "@/components/forms/NewQuotesForm";
import NewInfoUpdate from "@/components/forms/NewInfoUpdate";
import InsuranceList from "@/components/InsuranceList";

const Insurance = () => {
  const [open, setOpen] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [jobCard, setJobCard] = useState(false);
  const [quote, setQuote] = useState(false);
  const [info, setInfo] = useState(false);
  const { insuranceList, fetchInsurance, fetchSingleInsurance } =
    useFormContext();
  const [show, setShow] = useState(false);
  const checkInitials = (fullName) => {
    const words = fullName;
    const wordList = words?.split(" ");
    const firstLetters = wordList?.map((word) => word[0]);
    const joinedWord = firstLetters?.join("");
    return joinedWord;
  };
  const extraInfo = [
    { name: "Edit Details", icon: <HiOutlinePencil />, state: "setInfo" },
    {
      name: "Create Job Card",
      icon: <HiOutlineMenuAlt2 />,
      state: "setJobCard",
    },
    { name: "Create Quote", icon: <HiOutlineMenuAlt2 />, state: "setQuote" },
    {
      name: "Create Invoice",
      icon: <HiOutlineMenuAlt2 />,
      state: "setInvoice",
    },
    { name: "Delete", icon: <BsTrash />, state: "none" },
  ];
  const handleClick = (index) => {
    // Perform different setState functions based on index
    if (index === 0) {
      setInfo(true);
    } else if (index === 1) {
      setJobCard(true);
    } else if (index === 2) {
      setQuote(true);
    } else if (index === 3) {
      setInvoice(true);
    } else {
      return "none";
    }
  };

  useEffect(() => {
    fetchInsurance();
    fetchSingleInsurance("1000");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <section className="flex justify-between items-center mb-6 px-6 sm:px-0">
        {open && <NewInsuranceForm open={open} setOpen={setOpen} />}
        {invoice && (
          <NewInvoiceForm invoice={invoice} setInvoice={setInvoice} />
        )}
        {jobCard && <NewJobCard jobCard={jobCard} setJobCard={setJobCard} />}
        {quote && <NewQuotesForm quote={quote} setQuote={setQuote} />}
        {info && <NewInfoUpdate info={info} setInfo={setInfo} />}
        <div>
          <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
            Insurance Companies
          </h1>
          <p className="text-sm text-[#8094ae] ">
            A total of 2 insurance companies.
          </p>
        </div>
        <button
          className="sm:flex hidden items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold ml-auto"
          onClick={() => setOpen(true)}
        >
          <BiPlus />
          <span>Add Insurance</span>
        </button>
        <div
          className="sm:hidden text-2xl cursor-pointer"
          onClick={() => setMoreInfo(!moreInfo)}
        >
          <CgMenuRight />
        </div>
      </section>
      <div className="bg-white min-h-[85vh] p-6 relative">
        <div
          className={`px-6 flex sm:hidden items-center justify-between transition-all duration-300 linear bg-white absolute left-0 top-0 w-full shadow-md ${
            moreInfo ? " h-20 opacity-100" : " h-0 opacity-0"
          }`}
        >
          {moreInfo && (
            <button
              className="flex sm:hidden items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold"
              onClick={() => {
                setOpen(true);
              }}
            >
              <BiPlus />
              <span>Add Insurance</span>
            </button>
          )}
        </div>
        <div className="flex justify-between mb-4">
          <input
            className="placeholder:text-xs border pl-2 py-1 rounded-sm"
            placeholder="Type in to Search"
          />
          <div className="flex items-center gap-2">
            <p className="text-md">Show</p>
            <select className="outline-none border rounded-md text-sm px-1">
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
        <div className="border rounded-md min-h-[30vh] overflow-x-auto ">
          <main className="font-semibold text-[#8094ae] text-sm grid grid-cols-[4%,50%,35%,5%] md:grid-cols-[3em,15em,14em,9em,7em,9em,8em,3em] lg:grid-cols-[3%,25%,20%,14%,6%,12%,10%,4%] p-2.5 border border-transparent border-b-gray-200 gap-2">
            <div>#</div>
            <div>Client</div>
            <div className="hidden md:block">Email</div>
            <div>Unpaid Amounts</div>
            <div className="hidden md:block">A.Jobs</div>
            <div className="hidden md:block">Created On</div>
            <div className="hidden md:block">Status</div>
            <div></div>
          </main>
          {/* <div className="font-medium text-[#364a63] text-sm grid grid-cols-[4%,50%,35%,5%] md:grid-cols-[3em,15em,14em,9em,7em,9em,8em,3em] lg:grid-cols-[3%,25%,20%,14%,6%,12%,10%,4%] items-center p-2.5 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="flex items-center gap-2">
              <p className="p-2.5 bg-blue-500 rounded-full text-white">ME</p>
              <div>
                <h2 className="font-medium text-[#364a63]">
                  Mr. Emmanuel Afolabi
                </h2>
                <p className="text-xs text-[#8094ae]">+2348167821219</p>
              </div>
            </div>
            <div className="hidden md:block text-[#8094ae]">
              emmanuel@email.com
            </div>
            <div>N390,000.00</div>
            <div className="hidden md:block text-[#8094ae] text-center">
              1/1
            </div>
            <div className="hidden md:block text-[#8094ae]">April 20,2023</div>
            <div className="py-1.5 px-2.5 text-[#1ee0ac] bg-[#1ee0ac26] rounded-2xl items-center gap-1 hidden md:flex">
              <RxDotFilled className="text-xl" />
              <p className="text-xs font-bold">Active</p>
            </div>
            <div>
              <BsThreeDots
                className="cursor-pointer text-xl"
                onClick={() => setShow(!show)}
              />
              {show && (
                <MoreButton
                  href={"/insurance/99/details"}
                  extraInfo={extraInfo}
                  handleClick={handleClick}
                />
              )}
            </div>
          </div> */}
          {insuranceList &&
            insuranceList.map((insurance, index) => {
              return (
                <InsuranceList
                  key={insurance?.id}
                  insurance={insurance}
                  index={index}
                  handleClick={handleClick}
                  extraInfo={extraInfo}
                />
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default Insurance;
