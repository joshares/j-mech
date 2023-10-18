import React, { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import { BsThreeDots } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import { useFormContext } from "@/context/form_context";
import MoreButton from "@/components/MoreButton";
import { FiDownloadCloud, FiMail } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { BsTrash, BsEye } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TbMessageCircle } from "react-icons/tb";
import NewQuotesForm from "@/components/forms/NewQuotesForm";
import QuoteList from "@/components/QuoteList";

const Quotes = () => {
  const [quote, setQuote] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const { quoteList, fetchQuote } = useFormContext();
  const [show, setShow] = useState(false);
  const extraInfo = [
    { name: "Download", icon: <FiDownloadCloud /> },
    {
      name: "Send Via Email",
      icon: <FiMail />,
    },
    { name: "Edit Quote", icon: <HiOutlinePencil /> },
    {
      name: "Convert to Invoice",
      icon: <HiOutlineMenuAlt2 />,
    },
    { name: "Delete Quote", icon: <BsTrash /> },
  ];

  const handleClick = (index) => {
    // Perform different setState functions based on index
    if (index === 2) {
      setQuote(true);
    }
  };
  useEffect(() => {
    fetchQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      {quote && <NewQuotesForm quote={quote} setQuote={setQuote} />}

      <section className="flex justify-between items-center mb-6 px-6 sm:px-0">
        <div>
          <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
            Quotes
          </h1>
          <p className="text-sm text-[#8094ae] ">A total of 3 quotes.</p>
        </div>
        <button
          className="sm:flex hidden items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold ml-auto"
          onClick={() => setQuote(true)}
        >
          <BiPlus />
          <span>Create a Quote</span>
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
                setQuote(true);
              }}
            >
              <BiPlus />
              <span>Create a Quote</span>
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
        <div class="relative min-h-[70vh] overflow-x-auto shadow-md sm:rounded-lg border-t">
          <table class="w-full text-sm text-left text-black">
            <thead class="text-xs text-[#8094ae] capitalize border-b">
              <tr>
                <th scope="col" class="px-4 py-3">
                  #
                </th>
                <th scope="col" class="px-6 py-3">
                  Client
                </th>
                <th scope="col" class="px-4 py-3">
                  Project
                </th>
                <th scope="col" class="px-4 py-3">
                  Items
                </th>
                <th scope="col" class="px-4 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Total
                </th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            {quoteList &&
              quoteList?.length >= 1 &&
              quoteList.map((quote, index) => {
                return (
                  <QuoteList
                    key={quote?.id}
                    quote={quote}
                    index={index}
                    handleClick={handleClick}
                    extraInfo={extraInfo}
                  />
                );
              })}
            {/* <tbody>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td class="px-4 py-3">
                  <div className="flex items-center">1</div>
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
                      <h2 className="font-medium">Mr. Emmanuel Afolabi</h2>
                      <p className="text-xs text-[#8094ae]">+2348167821219</p>
                    </div>
                  </div>
                </th>
                <td class="px-4 py-4">
                  <div>
                    <h3 className="font-medium text-black">RENAULT ZOOM</h3>
                    <p className="text-[#8094ae] text-xs">u7687o89</p>
                  </div>
                </td>
                <td class="px-4 py-4">2</td>
                <td class="px-4 py-4 text-[#8094ae] text-[13px]">
                  Apr 17, 2023 • 02:21pm
                </td>
                <td class="px-6 py-4">KSh120.00</td>
                <td class="px-6 py-4 text-lg cursor-pointer">
                  <BsThreeDots onClick={() => setShow(!show)} />
                  {show && (
                    <MoreButton
                      href={"clients/:99/details"}
                      extraInfo={extraInfo}
                      handleClick={handleClick}
                    />
                  )}
                </td>
              </tr>
            </tbody> */}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Quotes;
