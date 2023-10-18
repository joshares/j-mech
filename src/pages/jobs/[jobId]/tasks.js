import { useState } from "react";
import JobDetails from ".";
import { BiPlus, BiTask } from "react-icons/bi";
import { BsEye, BsFileMedical, BsThreeDots, BsTrash } from "react-icons/bs";
import { RiArrowLeftRightFill, RiInformationLine } from "react-icons/ri";
import NewTask from "@/components/forms/NewTask";
import NewWorkRequestedForm from "@/components/forms/NewWorkRequestedForm";
import JobCardImport from "@/components/JobCardImport";
import MoreButton from "@/components/MoreButton";
import TaskList from "@/components/TaskList";
import { HiOutlineMenuAlt2, HiOutlinePencil, HiViewList } from "react-icons/hi";
import { TiCancel, TiDownload } from "react-icons/ti";
import { useFormContext } from "@/context/form_context";
import ManageTeamInfo from "@/components/ManageTeamInfo";

const Tasks = () => {
  const [task, setTask] = useState(false);
  const [taskCard, setTaskCard] = useState(false);
  const [show, setShow] = useState(false);
  const [workRequested, setWorkRequested] = useState(false);
  const [jobImport, setJobImport] = useState(false);
  const { singleJob } = useFormContext();

  const extraInfo = [
    { name: "view Details", icon: <BsEye /> },
    { name: "Edit Details", icon: <HiOutlinePencil /> },

    {
      name: "Download",
      icon: <TiDownload />,
    },
    { name: "Delete task", icon: <BsTrash /> },
  ];
  const handleClick = (index) => {
    // Perform different setState functions based on index
    if (index === 0) {
      setTaskCard(true);
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
      {task && <NewTask task={task} setTask={setTask} />}
      {jobImport && (
        <JobCardImport jobImport={jobImport} setJobImport={setJobImport} />
      )}
      {workRequested && (
        <NewWorkRequestedForm
          workRequested={workRequested}
          setWorkRequested={setWorkRequested}
        />
      )}

      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold">Project Tasks</h3>
            <p className="text-xs sm:text-sm text-[#526484]">
              A list of tasks for TOYOTA Camry - KSF-178-HX project totalling
              N0.00.
            </p>
          </div>
          <div className="grid sm:flex items-center gap-2 relative">
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
              onClick={() => setTask(true)}
            >
              <BiPlus />
              <span>Create Task</span>
            </button>
          </div>
        </div>
        {/* <div className="w-full min-h-[9em] bg-white mx-auto text-[#8094ae] text-md pb-4">
          <section className="flex items-center justify-between pt-6 pb-4 text-xs font-bold">
            <p>#</p>
            <p>Project / Assigned To</p>
            <p>Title</p>
            <p>Due Date</p>
            <p>Cost</p>
            <p>Status</p>
          </section>
          <hr className="mb-3" />
          <p className="text-xs text-center">It`s empty here!</p>
        </div> */}
        <div class="relative min-h-[70vh] overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-black">
            <thead class="text-xs text-[#8094ae] uppercase border-b">
              <tr>
                <th scope="col" class="px-6 py-3">
                  #
                </th>
                <th scope="col" class="px-6 py-3">
                  Project/Assigned to
                </th>
                <th scope="col" class="px-4 py-3">
                  Title
                </th>
                <th scope="col" class="px-4 py-3">
                  Due Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Cost
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            {singleJob?.task?.length >= 1 ? (
              singleJob?.task?.map((task, index) => {
                return (
                  <TaskList
                    key={index}
                    extraInfo={extraInfo}
                    handleClick={handleClick}
                    task={task}
                    index={index}
                    project={singleJob?.jobForm?.make}
                    vin={singleJob?.jobForm?.vin}
                    setTaskCard={setTaskCard}
                    taskCard={taskCard}
                  />
                );
              })
            ) : (
              <p className="text-xs text-center mx-auto">It`s empty here!</p>
            )}
          </table>
        </div>
      </div>
    </JobDetails>
  );
};

export default Tasks;
