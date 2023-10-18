import { useEffect, useState } from "react";
import DetailsPage from "..";
import { BiPlus } from "react-icons/bi";
import { BsEye, BsThreeDots } from "react-icons/bs";
import MoreButton from "@/components/MoreButton";
import { HiOutlinePencil } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TiCancel } from "react-icons/ti";
import { useFormContext } from "@/context/form_context";
import TaskList from "@/components/TaskList";

const Tasks = () => {
  const [show, setShow] = useState(false);
  const [singleTaskList, setSingleTaskList] = useState([]);
  const [taskCard, setTaskCard] = useState(false);
  const { jobList, singleTeam } = useFormContext();
  const id = singleTeam?.id;

  const [invoice, setInvoice] = useState(false);
  const [jobCard, setJobCard] = useState(false);
  const [quote, setQuote] = useState(false);
  const [info, setInfo] = useState(false);
  const extraInfo = [
    { name: "view Details", icon: <BsEye /> },

    { name: "Edit Details", icon: <HiOutlinePencil /> },

    { name: "Delete", icon: <BsTrash /> },
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

  function fetchSingleTaskList(jobList, memberId) {
    const result = [];

    for (const job of jobList) {
      for (const task of job.task) {
        if (task.assignTo === memberId) {
          result.push(task);
          // console.log(job);
        }
      }
    }

    setSingleTaskList(result);
    return result;
  }

  useEffect(() => {
    fetchSingleTaskList(jobList, id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobList]);

  return (
    <DetailsPage>
      <div className="px-6">
        <div className="flex items-center">
          <div className="py-6 md:col-span-2">
            <h3 className="text-xl font-semibold">Assigned Tasks</h3>
            <p className="text-sm text-[#526484]">
              A list of tasks assigned to Solace Enyinnaya.
            </p>
          </div>
        </div>
        <div class="relative min-h-[70vh] overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-black">
            <thead class="text-xs text-[#8094ae] capitalize border-b">
              <tr>
                <th scope="col" class="px-6 py-3">
                  #
                </th>
                <th scope="col" class="px-6 py-3">
                  Project
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
            {singleTaskList?.length >= 1 ? (
              singleTaskList.map((task, index) => {
                return (
                  <TaskList
                    key={task?.id}
                    extraInfo={extraInfo}
                    handleClick={handleClick}
                    task={task}
                    index={index}
                  />
                );
              })
            ) : (
              <p className="text-xs text-center mx-auto">It`s empty here!</p>
            )}
            {/* <tbody>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td class="px-6 py-3">
                  <div className="flex items-center">1</div>
                </td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div>
                    <h3 className="font-medium text-black">RENAULT ZOE</h3>
                    <p className="text-[#8094ae] text-[13px]">6688982388</p>
                  </div>
                </th>
                <td class="px-4 py-4">Brake pad change</td>
                <td class="px-4 py-4 text-[#8094ae] text-[13px]">
                  Apr 17, 2023 • 02:21pm
                </td>
                <td class="px-6 py-4">KSh120.00</td>
                <td class="px-6 py-4">
                  <div className="font-medium bg-[#1ee0ac26] text-[#1ee0ac] py-1.5 px-4 text-center text-xs rounded-xl">
                    Completed
                  </div>
                </td>
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
    </DetailsPage>
  );
};

export default Tasks;
