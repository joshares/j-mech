import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { RxDotFilled } from "react-icons/rx";
import { BsThreeDots, BsArrowLeft } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { TiArrowUnsorted } from "react-icons/ti";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";
import NewPartsForm from "@/components/forms/NewPartsForm";
import OrderParts from "@/components/OrderParts";

const BookingParts = () => {
  const [parts, setParts] = useState(false);
  const [orderPart, setOrderPart] = useState(false);
  const [show, setShow] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <Layout>
      {parts && <NewPartsForm parts={parts} setParts={setParts} />}
      {orderPart && (
        <OrderParts orderPart={orderPart} setOrderPart={setOrderPart} />
      )}
      <section className="flex justify-between items-center mb-6 px-6 sm:px-0">
        <div className="mb-6">
          <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
            Booking Parts
          </h1>
          <p className="text-sm text-[#8094ae] ">A total of 20 parts.</p>
        </div>
        <div className="flex items-center gap-4 relative">
          <Link
            href={"/settings/personal"}
            className="sm:flex hidden items-center gap-2 bg-white py-2 px-4 border rounded-sm text-sm text-[#364a63] cursor-pointer font-bold ml-auto"
          >
            <BsArrowLeft />
            <span>Back</span>
          </Link>
          <button
            className="sm:flex hidden items-center gap-2 bg-blue-500 py-2 px-4 rounded-sm text-sm text-white cursor-pointer font-bold ml-auto"
            onClick={() => {
              setShow(!show);
            }}
          >
            <BsThreeDots />
            <span>Add & Order</span>
          </button>
          {show && (
            <div className="absolute p-6 pr-16 shadow-lg sm:grid hidden gap-4 bg-white rounded-md text-md font-medium top-[2.4rem] right-0 z-10">
              <div
                className="flex items-center gap-2 cursor-pointer text-[#8094ae]"
                onClick={() => setParts(true)}
              >
                <BiPlus />
                <p className="text-[0.84rem]">Add Part</p>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer text-[#8094ae]"
                onClick={() => setOrderPart(true)}
              >
                <TiArrowUnsorted />
                <p className="text-[0.84rem]">Order List</p>
              </div>
            </div>
          )}
        </div>
        <div
          className="sm:hidden text-2xl cursor-pointer"
          onClick={() => setMoreInfo(!moreInfo)}
        >
          <CgMenuRight />
        </div>
      </section>

      <div className="bg-white min-h-[85vh] overflow-x-auto p-6 relative">
        <div
          className={`px-6 flex sm:hidden items-center justify-between transition-all duration-300 linear bg-white absolute left-0 top-0 w-full shadow-md ${
            moreInfo ? " h-20 opacity-100" : " h-0 opacity-0"
          }`}
        >
          {moreInfo && (
            <div className="flex items-center gap-4 relative">
              <Link
                href={"/settings/personal"}
                className="flex sm:hidden items-center gap-2 bg-white py-2 px-4 border rounded-sm text-sm text-[#364a63] cursor-pointer font-bold ml-auto"
              >
                <BsArrowLeft />
                <span>Back</span>
              </Link>
              <button
                className="flex sm:hidden items-center gap-2 bg-blue-500 py-2 px-4 rounded-sm text-sm text-white cursor-pointer font-bold ml-auto"
                onClick={() => {
                  setShow(!show);
                }}
              >
                <BsThreeDots />
                <span>Add & Order</span>
              </button>
              {show && (
                <div className="absolute p-6 pr-16 shadow-lg grid sm:hidden gap-4 bg-white rounded-md text-md font-medium top-[2.4rem] right-0 z-10">
                  <div
                    className="flex items-center gap-2 cursor-pointer text-[#8094ae]"
                    onClick={() => setParts(true)}
                  >
                    <BiPlus />
                    <p className="text-[0.84rem]">Add Part</p>
                  </div>
                  <div
                    className="flex items-center gap-2 cursor-pointer text-[#8094ae]"
                    onClick={() => setOrderPart(true)}
                  >
                    <TiArrowUnsorted />
                    <p className="text-[0.84rem]">Order List</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex justify-between mb-4">
          <input
            className="placeholder:text-xs border pl-2 py-1 rounded-sm"
            placeholder="Type in to Search"
          />
          <div className="flex items-center gap-2">
            <p className="text-sm">Show</p>
            <select className="outline-none border rounded-md text-xs px-1">
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
        <div className="border rounded-md min-h-[30vh] overflow-x-auto ">
          <main className="font-medium min-w-full text-[#8094ae] text-sm grid grid-cols-[3em,15em,14em,8em,6em,3em] md:grid-cols-[4%,30%,25%,15%,18%,4%] p-2.5 border border-transparent border-b-gray-200 gap-2">
            <div>#</div>
            <div>Name</div>
            <div>Input</div>
            <div>Added On</div>
            <div>Status</div>
            <div></div>
          </main>
          <div className="font-normal min-w-full text-[#364a63] text-sm grid grid-cols-[3em,15em,14em,8em,6em,3em] md:grid-cols-[4%,30%,25%,15%,18%,4%] items-center p-2.5 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="flex items-center gap-2">
              <h2 className="font-medium">Wiper</h2>
            </div>
            <div className="text-[#8094ae]">-|-</div>
            <div>March 3, 2023</div>
            <div className="py-1.5 px-2.5 text-green-500 bg-green-100 rounded-2xl items-center gap-2 mr-auto flex">
              <RxDotFilled className="text-lg" />
              <p className="text-sm font-bold">Enabled</p>
            </div>
            <div>
              <BsThreeDots
                className="cursor-pointer text-xl"
                // onClick={() => setShow(!show)}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingParts;
