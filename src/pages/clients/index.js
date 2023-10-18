import React, { useState, useEffect } from "react";
import Layout from "../../../layout/Layout";
import { RxDotFilled } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import NewClientForm from "@/components/forms/NewClientForm";
import MoreButton from "@/components/MoreButton";
import { CgMenuRight } from "react-icons/cg";
import NewJobCard from "@/components/forms/NewJobCard";
import NewInvoiceForm from "@/components/forms/NewInvoiceForm";
import NewQuotesForm from "@/components/forms/NewQuotesForm";
import NewInfoUpdate from "@/components/forms/NewInfoUpdate";
import NewSMSForm from "@/components/forms/NewSMSForm";
import { useFormContext } from "@/context/form_context";
import { HiOutlinePencil } from "react-icons/hi";
import { TbMessageCircle } from "react-icons/tb";
import { BsTrash } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Client from "@/components/Client";
import Loading from "@/components/Loading";

const Clients = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [jobCard, setJobCard] = useState(false);
  const [quote, setQuote] = useState(false);
  const [info, setInfo] = useState(false);
  const [sms, setSms] = useState(false);
  const {
    clientList,
    fetchClients,
    fetchSingleClient,
    client_loading: loading,
  } = useFormContext();
  const checkInitials = (fullName) => {
    const words = fullName;
    const wordList = words.split(" ");
    const firstLetters = wordList.map((word) => word[0]);
    const joinedWord = firstLetters.join("");
    return joinedWord;
  };
  const extraInfo = [
    { name: "Edit Details", icon: <HiOutlinePencil /> },
    { name: "Send SMS", icon: <TbMessageCircle /> },
    {
      name: "Create Job Card",
      icon: <HiOutlineMenuAlt2 />,
      state: "setJobCard",
    },
    { name: "Create Quote", icon: <HiOutlineMenuAlt2 /> },
    {
      name: "Create Invoice",
      icon: <HiOutlineMenuAlt2 />,
      state: "setInvoice",
    },
    { name: "Delete", icon: <BsTrash /> },
  ];
  const handleClick = (index) => {
    // Perform different setState functions based on index
    if (index === 0) {
      setInfo(true);
    } else if (index === 1) {
      setSms(true);
    } else if (index === 2) {
      setJobCard(true);
    } else if (index === 3) {
      setQuote(true);
    } else if (index === 4) {
      setInvoice(true);
    } else {
      return "none";
    }
  };

  useEffect(() => {
    fetchClients();
    fetchSingleClient(100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <main className="text-center text-2xl mx-auto">
        <Loading />
      </main>
    );
  }

  return (
    <Layout>
      {open && <NewClientForm open={open} setOpen={setOpen} />}
      {invoice && <NewInvoiceForm invoice={invoice} setInvoice={setInvoice} />}
      {jobCard && <NewJobCard jobCard={jobCard} setJobCard={setJobCard} />}
      {quote && <NewQuotesForm quote={quote} setQuote={setQuote} />}
      {info && <NewInfoUpdate info={info} setInfo={setInfo} />}
      {sms && <NewSMSForm sms={sms} setSms={setSms} />}

      <section className="flex justify-between items-center mb-6 px-6 sm:px-0">
        <div className="mb-6">
          <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
            Clients List
          </h1>
          <p className="text-sm text-[#8094ae] ">A total of ~ clients</p>
        </div>
        <button
          className="sm:flex hidden items-center gap-2 bg-[#0971fe] py-2 px-4 rounded-md text-sm text-white cursor-pointer font-bold ml-auto"
          onClick={() => {
            setOpen(true);
          }}
        >
          <BiPlus />
          <span>Create Client</span>
        </button>
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
            <button
              className="flex sm:hidden items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold"
              onClick={() => {
                setOpen(true);
              }}
            >
              <BiPlus />
              <span>Create Client</span>
            </button>
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
        <div className="border rounded-md min-h-[60vh] overflow-x-auto relative z-10">
          <main className="font-semibold min-w-full text-[#8094ae] text-sm grid grid-cols-[4%,50%,35%,5%] md:grid-cols-[3em,15em,14em,9em,6em,9em,8em,3em] lg:grid-cols-[3%,25%,23%,12%,5%,12%,10%,4%] p-2.5 border border-transparent border-b-gray-200 gap-2">
            <div>#</div>
            <div>Client</div>
            <div className="hidden md:block">Email</div>
            <div>Balance</div>
            <div className="hidden md:block">A.Jobs</div>
            <div className="hidden md:block">Created On</div>
            <div className="hidden md:block">Status</div>
            <div></div>
          </main>
          {/* <div className="font-medium min-w-full text-[#364a63] text-sm grid grid-cols-[4%,50%,35%,5%] md:grid-cols-[3em,15em,14em,9em,6em,9em,8em,3em] lg:grid-cols-[3%,25%,23%,12%,5%,12%,10%,4%] items-center p-2.5 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="flex items-center gap-2">
              <p className="p-2.5 bg-blue-500 rounded-full text-white hidden sm:block">
                ME
              </p>
              <div>
                <h2 className="font-medium text-black">Mr. Emmanuel Afolabi</h2>
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
            <div className="hidden md:block">April 20,2023</div>
            <div className="py-1.5 px-2.5 text-[#1ee0ac] bg-[#1ee0ac26] rounded-2xl items-center gap-1 hidden md:flex">
              <RxDotFilled className="text-lg" />
              <p className="text-xs font-bold">Active</p>
            </div>
            <div>
              <BsThreeDots
                className="cursor-pointer text-xl"
                onClick={() => setShow(!show)}
              />
              {show && (
                <MoreButton
                  href={"clients/:99/details"}
                  extraInfo={extraInfo}
                  handleClick={handleClick}
                />
              )}
            </div>
          </div> */}
          {clientList &&
            clientList.map((clients, index) => {
              return (
                <Client
                  key={clients?.id}
                  clients={clients}
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

export default Clients;
