import React, { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import { BsThreeDots } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import NewPaymentForm from "@/components/forms/NewPaymentForm";
import { CgMenuRight } from "react-icons/cg";
import { useFormContext } from "@/context/form_context";
import MoreButton from "@/components/MoreButton";
import { HiOutlinePencil } from "react-icons/hi";
import { BsTrash, BsEye } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import PaymentList from "@/components/PaymentList";

const Payments = () => {
  const [payment, setPayment] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const { paymentsList, fetchPayment } = useFormContext();
  const [show, setShow] = useState(false);
  const checkInitials = (fullName) => {
    const words = fullName;
    const wordList = words.split(" ");
    const firstLetters = wordList.map((word) => word[0]);
    const joinedWord = firstLetters.join("");
    return joinedWord;
  };
  const extraInfo = [
    { name: "Edit Payment", icon: <HiOutlinePencil /> },
    { name: "Delete Quote", icon: <BsTrash /> },
  ];
  const handleClick = (index) => {
    // Perform different setState functions based on index
    if (index === 0) {
      setPayment(true);
    }
  };
  useEffect(() => {
    fetchPayment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      {payment && <NewPaymentForm payment={payment} setPayment={setPayment} />}
      <section className="flex justify-between items-center mb-6 px-6 sm:px-0">
        <div>
          <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
            Payments
          </h1>
          <p className="text-sm text-[#8094ae] ">A total of 2 payments.</p>
        </div>
        <button
          className="sm:flex hidden items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold ml-auto"
          onClick={() => setPayment(true)}
        >
          <BiPlus />
          <span>Add Payment</span>
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
                setPayment(true);
              }}
            >
              <BiPlus />
              <span>Add Payment</span>
            </button>
          )}
        </div>
        <div className="flex justify-between mb-4">
          <input
            className="placeholder:text-xs border pl-2 py-1 rounded-sm"
            placeholder="Type in to Search"
          />
          <div className="flex items-center gap-2">
            <p className="text-sm hidden sm:block">Show</p>
            <select className="outline-none border rounded-md text-xs px-1">
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
        <div className="border rounded-md min-h-[30vh] overflow-x-auto ">
          <main className="font-semibold text-[#8094ae] text-sm grid grid-cols-[6%,80%,5%] md:grid-cols-[3em,15em,7em,4em,7em,9em,7em,3em] lg:grid-cols-[3%,25%,15%,10%,12%,14%,10%,5%] p-2.5 border border-transparent border-b-gray-200 gap-2">
            <div>#</div>
            <div>Client</div>
            <div className="hidden md:block">Project</div>
            <div className="hidden md:block">Items</div>
            <div className="hidden md:block">Date</div>
            <div className="hidden md:block">Total/Balance</div>
            <div className="hidden md:block">Status</div>
            <div></div>
          </main>
          {/* <div className="font-medium text-[#364a63] text-sm grid grid-cols-[6%,80%,5%] md:grid-cols-[3em,15em,7em,4em,7em,9em,7em,3em] lg:grid-cols-[3%,25%,15%,10%,12%,14%,10%,5%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="flex items-center gap-2">
              <p className="p-2.5 bg-blue-500 rounded-full text-white hidden sm:block">
                ME
              </p>
              <div>
                <h2 className="font-medium">Mr. Emmanuel Afolabi</h2>
                <p className="text-xs text-[#8094ae]">+2348167821219</p>
              </div>
            </div>
            <div className="hidden md:block">
              <h3 className="font-medium">TOYOTA Sienna</h3>
              <p className="text-xs text-[#8094ae]">AAA808EJ</p>
            </div>
            <div className="hidden md:block">
              <p className="font-medium">Invoice #117</p>
            </div>
            <div className="hidden md:block text-[#8094ae]">
              <p>Apr 20, 2023</p>
            </div>
            <div className="font-medium hidden md:block">
              <p>N64,000.00</p>
              <p className="text-[#8094ae] text-xs">Online Payment</p>
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
                  href={"/invoices/id/"}
                  extraInfo={extraInfo}
                  handleClick={handleClick}
                />
              )}
            </div>
          </div> */}
          {paymentsList &&
            paymentsList.map((payment, index) => {
              return (
                <PaymentList
                  key={payment?.id}
                  payment={payment}
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

export default Payments;
