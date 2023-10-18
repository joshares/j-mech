import { useEffect, useState } from "react";
import DetailsPage from ".";
import { RiInformationLine } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import { BiPlus } from "react-icons/bi";
import NewJobCard from "@/components/forms/NewJobCard";
import { useFormContext } from "@/context/form_context";
import JobCardList from "@/components/JobCardList";

const JobCard = () => {
  const [jobCard, setJobCard] = useState(false);
  // const { jobCardList } = useFormContext();
  const [singleJobList, setSingleJobList] = useState([]);
  const { jobList, singleClient } = useFormContext();
  const id = singleClient.id;
  const [jobs, setJobs] = useState([]);

  const fetchSingleJobs = (id) => {
    const job = jobList.filter((j) => j.jobForm.client.id === id);
    setJobs(job);
    console.log(job);
  };

  function fetchSingleJobCard(jobList, clientId) {
    const result = [];
    for (const job of jobList) {
      if (job.jobForm.client.id === clientId) {
        result.push(...job.jobCardList);
      }
    }
    setSingleJobList(result);
    return result;
  }

  useEffect(() => {
    fetchSingleJobCard(jobList, id);
    fetchSingleJobs(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobList]);

  return (
    <DetailsPage>
      {jobCard && (
        <NewJobCard
          jobCard={jobCard}
          selectOptions={jobs}
          setJobCard={setJobCard}
        />
      )}

      <div className="px-6 pb-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              Project Job Cards
            </h3>
            <p className="text-xs sm:text-sm text-[#526484]">
              A list of job cards for Autogirl Nig Ltd projects.
            </p>
          </div>
          <button
            className="flex items-center gap-2 bg-[#0971fe] py-2 px-4 rounded-md text-sm text-white cursor-pointer font-bold"
            onClick={() => setJobCard(true)}
          >
            <BiPlus className="text-lg sm:text-sm" />
            <span className="hidden sm:block">Create Job Card</span>
          </button>
        </div>
        {singleJobList?.length >= 1 ? (
          singleJobList?.map((job, index) => {
            return <JobCardList key={job?.id} job={job} index={index} />;
          })
        ) : (
          <div className="min-h-[30vh] flex flex-col items-center justify-center gap-2 text-[#8094ae]">
            <RiInformationLine className="text-5xl" />
            <p>No job card created yet!t</p>
          </div>
        )}
      </div>
    </DetailsPage>
  );
};

export default JobCard;
