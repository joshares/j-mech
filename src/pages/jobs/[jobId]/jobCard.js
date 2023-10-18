import { useEffect, useState } from "react";
import JobDetails from ".";
import { RiInformationLine } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import NewJobCard from "@/components/forms/NewJobCard";
import JobCardList from "@/components/JobCardList";
import { useFormContext } from "@/context/form_context";

const JobCard = () => {
  const [jobCard, setJobCard] = useState(false);
  const { singleJob, updateProjectJobCard } = useFormContext();
  const projectName = singleJob?.jobForm;
  const id = singleJob?.id;
  useEffect(() => {
    updateProjectJobCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <JobDetails>
      {jobCard && (
        <NewJobCard
          jobCard={jobCard}
          setJobCard={setJobCard}
          projectName={projectName}
        />
      )}

      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              Project Job Cards
            </h3>
            <p className="text-xs sm:text-sm text-[#526484]">
              A list of job cards for TOYOTA Camry - KSF-178-HX project.
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
        {singleJob?.jobCardList?.length >= 1 ? (
          singleJob?.jobCardList?.map((job, index) => {
            return <JobCardList key={job?.id} job={job} index={index} />;
          })
        ) : (
          <div className="min-h-[30vh] flex flex-col items-center justify-center gap-2 text-[#8094ae]">
            <RiInformationLine className="text-5xl" />
            <p>No job card created yet!t</p>
          </div>
        )}
      </div>
    </JobDetails>
  );
};

export default JobCard;
