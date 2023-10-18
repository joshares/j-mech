import { useState, useEffect } from "react";
import JobDetails from ".";
import { BiPlus, BiTask } from "react-icons/bi";
import { BsThreeDots, BsFileMedical } from "react-icons/bs";
import NewQuotesForm from "@/components/forms/NewQuotesForm";
import { RiArrowLeftRightFill } from "react-icons/ri";
import NewWorkRequestedForm from "@/components/forms/NewWorkRequestedForm";
import JobCardImport from "@/components/JobCardImport";
import { FiDownloadCloud, FiMail } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { BsTrash, BsEye } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import QuoteList from "@/components/QuoteList";
import { useFormContext } from "@/context/form_context";
import SingleQuoteList from "@/components/SingleQuoteList";

const Quotes = () => {
  const [quote, setQuote] = useState(false);
  const [show, setShow] = useState(false);
  const [workRequested, setWorkRequested] = useState(false);
  const [jobImport, setJobImport] = useState(false);

  const [singleQuote, setSingleQuote] = useState([]);
  const { quoteList, singleJob } = useFormContext();
  const id = singleJob?.id;

  const fetchSingleQuote = (id) => {
    const quote = quoteList.filter((p) => p.quoteForm.job.id === id);
    setSingleQuote(quote);
    console.log(quote);
  };
  useEffect(() => {
    fetchSingleQuote(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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

  return (
    <JobDetails>
      {quote && <NewQuotesForm quote={quote} setQuote={setQuote} />}
      {workRequested && (
        <NewWorkRequestedForm
          workRequested={workRequested}
          setWorkRequested={setWorkRequested}
        />
      )}
      {jobImport && (
        <JobCardImport jobImport={jobImport} setJobImport={setJobImport} />
      )}

      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold">Project Quotes</h3>
            <p className="text-xs sm:text-sm text-[#526484]">
              A list of quotes for TOYOTA Camry - KSF-178-HX project.
            </p>
          </div>
          <div className="grid sm:flex items-center gap-2">
            <button
              className="flex items-center gap-2 hover:bg-[#0971fe] hover:text-white border border-[#9dc6ff] bg-[#e4efff] text-[#0971fe] py-2 px-4 rounded-md text-sm cursor-pointer font-bold relative"
              onClick={() => setShow(!show)}
            >
              <RiArrowLeftRightFill />
              <span>Import From</span>
              {show && (
                <div className="absolute py-6 shadow-lg sm:grid hidden gap-4 bg-white rounded-md text-lg font-medium top-[2.4rem] -left-7 z-10">
                  <div
                    className="flex items-center gap-2 px-4 cursor-pointer text-[#364a63]"
                    onClick={() => setWorkRequested(true)}
                  >
                    <BiTask />
                    <p className="text-[0.76rem]">Work Requested</p>
                  </div>
                  <div
                    className="flex items-center px-4 gap-2 cursor-pointer text-[#364a63]"
                    onClick={() => setJobImport(true)}
                  >
                    <BsFileMedical />
                    <p className="text-[0.76rem]">Approved Jobcard</p>
                  </div>
                </div>
              )}
            </button>
            <button
              className="flex items-center gap-2 bg-[#0971fe] py-2 px-4 rounded-md text-sm text-white cursor-pointer font-bold"
              onClick={() => setQuote(true)}
            >
              <BiPlus />
              <span>Create Quote</span>
            </button>
          </div>
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
          <main className="font-semibold text-[#8094ae] text-sm grid grid-cols-[7%,75%,5%] md:grid-cols-[3em,15em,14em,9em,7em,9em,8em,3em] lg:grid-cols-[4%,22%,17%,10%,15%,20%,5%] p-2.5 border border-transparent border-b-gray-200 gap-2">
            <div>#</div>
            <div className="hidden md:block">Project</div>
            <div>Registration</div>
            <div className="hidden md:block">Items</div>
            <div className="hidden md:block">Date</div>
            <div className="hidden md:block">Total</div>
            <div></div>
          </main>
          {/* <div className="font-medium text-[#364a63] text-sm grid grid-cols-[7%,75%,5%] md:grid-cols-[3em,15em,14em,9em,7em,9em,8em,3em] lg:grid-cols-[4%,22%,20%,10%,15%,20%,5%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="flex items-center gap-2">
              <p>TOYOTA Camry</p>
            </div>
            <div className="hidden md:block">
              <h3 className="font-medium text-black">KSF-178-HX</h3>
            </div>
            <div className="hidden md:block">
              <p className="font-medium text-black">22</p>
            </div>
            <div className="hidden md:block text-[#8094ae]">
              <p>May 2, 2023</p>
            </div>
            <div className="font-medium text-black hidden md:block">
              N538,075.00
            </div>
            <div>
              <BsThreeDots className="cursor-pointer text-xl" />
            </div>
          </div> */}
          {singleQuote &&
            singleQuote.map((quote, index) => {
              return (
                <SingleQuoteList
                  key={quote?.id}
                  quote={quote}
                  index={index}
                  handleClick={handleClick}
                  extraInfo={extraInfo}
                />
              );
            })}
        </div>
      </div>
    </JobDetails>
  );
};

export default Quotes;
