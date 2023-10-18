import React, { useEffect, useState } from "react";
import DetailsPage from ".";
import { HiOutlinePencil } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TiCancel } from "react-icons/ti";
import NewInvoiceForm from "@/components/forms/NewInvoiceForm";
import NewJobCard from "@/components/forms/NewJobCard";
import NewQuotesForm from "@/components/forms/NewQuotesForm";
import NewInfoUpdate from "@/components/forms/NewInfoUpdate";
import { useFormContext } from "@/context/form_context";
import JobsList from "@/components/JobsList";
import { TbMessageCircle } from "react-icons/tb";
import MoreButton from "@/components/MoreButton";
import { RxDotFilled } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";

const Projects = () => {
  const [show, setShow] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [jobCard, setJobCard] = useState(false);
  const [quote, setQuote] = useState(false);
  const [info, setInfo] = useState(false);
  const [jobs, setJobs] = useState([]);
  const { jobList, singleClient } = useFormContext();
  const id = singleClient?.id;

  const fetchSingleJobs = (id) => {
    const job = jobList.filter((j) => j.jobForm.client.id === id);
    setJobs(job);
    console.log(job);
  };

  useEffect(() => {
    fetchSingleJobs(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const extraInfo = [
    { name: "Edit Details", icon: <HiOutlinePencil /> },
    {
      name: "Create Job Card",
      icon: <HiOutlineMenuAlt2 />,
      state: "setJobCard",
    },
    { name: "Create Quote", icon: <HiOutlineMenuAlt2 /> },
    {
      name: "Create Invoice",
      icon: <HiOutlineMenuAlt2 />,
    },
    {
      name: "Cancel Project",
      icon: <TiCancel />,
    },
    { name: "Delete", icon: <BsTrash /> },
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
    <DetailsPage>
      <div className="px-6">
        {invoice && (
          <NewInvoiceForm invoice={invoice} setInvoice={setInvoice} />
        )}
        {jobCard && <NewJobCard jobCard={jobCard} setJobCard={setJobCard} />}
        {quote && <NewQuotesForm quote={quote} setQuote={setQuote} />}
        {info && <NewInfoUpdate info={info} setInfo={setInfo} />}
        <div className="py-6 md:col-span-2">
          <h3 className="text-xl font-semibold">Client Projects</h3>
          <p className="text-sm text-[#526484]">
            A list of Autogirl Nig Ltd`s projects.
          </p>
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
        <div className="border rounded-md min-h-[30vh] overflow-x-auto">
          <main className="font-semibold text-[#8094ae] text-xs grid grid-cols-[3em,15em,10em,11em,8em,6em,9em,3em] lg:grid-cols-[3%,25%,15%,20%,15%,10%,14%,4%] p-2.5 border border-transparent border-b-gray-200">
            <div>#</div>
            <div>Client</div>
            <div>Project</div>
            <div>Profit / Start-Finish</div>
            <div>Invoiced / Cost</div>
            <div>P. Tasks</div>
            <div>Status</div>
            <div></div>
          </main>
          {/* <div className="font-normal text-[#364a63] text-[13px] grid grid-cols-[3em,15em,10em,11em,8em,6em,9em,3em] lg:grid-cols-[3%,25%,15%,20%,15%,10%,14%,4%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 hover:shadow-hoverPurple">
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
            <div>
              <h3 className="font-medium text-black">DODGE Journey</h3>
              <p className="text-[#8094ae]">LND398FC</p>
            </div>
            <div>
              <h3 className="font-medium text-black">N0.00</h3>
              <p className="text-[#8094ae]">Apr 24, 23 - May 02, 23</p>
            </div>
            <div>
              <h3 className="font-medium text-[#8094ae]">N0.00</h3>
              <p className="text-[#8094ae]">N0.00</p>
            </div>
            <div className="text-[#8094ae]">0/0</div>
            <div className="py-1.5 px-2.5 text-yellow-500 bg-yellow-100 rounded-2xl flex items-center mr-auto gap-2 ">
              <RxDotFilled className="text-md" />
              <p className="text-xs font-bold">In Progress</p>
            </div>
            <div>
              <BsThreeDots
                className="cursor-pointer text-xl"
                onClick={() => setShow(!show)}
              />
              {show && (
                <MoreButton
                  href={"/jobs/99/details"}
                  extraInfo={extraInfo}
                  handleClick={handleClick}
                />
              )}
            </div>
          </div> */}
          {jobs &&
            jobs.map((job, index) => {
              return (
                <JobsList
                  key={job?.id}
                  jobs={job}
                  index={index}
                  handleClick={handleClick}
                  extraInfo={extraInfo}
                />
              );
            })}
        </div>
      </div>
    </DetailsPage>
  );
};

export default Projects;
