import { useEffect, useState } from "react";
import DetailsPage from ".";
import { BiPlus } from "react-icons/bi";
import { HiOutlineMenuAlt2, HiOutlinePencil } from "react-icons/hi";
import { TiCancel } from "react-icons/ti";
import { BsTrash } from "react-icons/bs";
import { useFormContext } from "@/context/form_context";
import JobsList from "@/components/JobsList";

const Projects = () => {
  const [jobs, setJobs] = useState([]);
  const [invoice, setInvoice] = useState(false);
  const [jobCard, setJobCard] = useState(false);
  const [quote, setQuote] = useState(false);
  const [info, setInfo] = useState(false);
  const { jobList, singleInsurance } = useFormContext();
  const id = singleInsurance?.id;

  const fetchSingleJobs = (id) => {
    const job = jobList.filter((j) => j.jobForm.insuranceCovered === id);
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
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-xl font-semibold">Company Projects</h3>
            <p className="text-sm text-[#526484]">
              A list of Jubilee Insurance Company`s projects.
            </p>
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
          {jobs && jobs.length >= 1 ? (
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
            })
          ) : (
            <p className="text-xs text-center">It`s empty here!</p>
          )}
        </div>
      </div>
    </DetailsPage>
  );
};

export default Projects;
