import React, { useEffect, useState } from "react";
import { BsEye, BsThreeDots, BsTrash } from "react-icons/bs";
import MoreButton from "./MoreButton";
import { useFormContext } from "@/context/form_context";
import ManageTeamInfo from "./ManageTeamInfo";
import { HiOutlinePencil } from "react-icons/hi";

export default function TaskList({ task, index, project, vin }) {
  const [show, setShow] = useState(false);
  const [singleProject, setSingleProject] = useState([]);
  const [singleTask, setSingleTask] = useState({});
  const { jobList } = useFormContext();
  const [taskCard, setTaskCard] = useState(false);

  const id = task?.assignTo;

  function selectTaskById(taskId) {
    for (const job of jobList) {
      for (const task of job.task) {
        if (task.id === taskId) {
          console.log(task);
          setSingleTask(task);
          return task;
        }
      }
    }
  }

  function selectJobByTaskId(taskId) {
    // Find the object in jobList array that matches the given task ID
    const selectedJob = jobList.find((job) =>
      job.task.some((task) => task.id === taskId)
    );

    // Return the selected job object
    console.log(selectedJob);
    setSingleProject(selectedJob);
  }

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

  useEffect(() => {
    selectJobByTaskId(task?.id);
    selectTaskById(task?.id);
    console.log(singleTask, task?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobList]);

  return (
    <tbody>
      {taskCard && (
        <ManageTeamInfo
          task={singleTask}
          payment={taskCard}
          setPayment={setTaskCard}
        />
      )}
      <tr class="bg-white border-b hover:bg-gray-50">
        <td class="px-6 py-3">
          <div className="flex items-center">{index + 1}</div>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div>
            <h3 className="font-medium text-black uppercase">
              {project ? project : singleProject?.jobForm?.make}
            </h3>
            <p className="text-[#8094ae] text-[13px]">
              {/* {vin} */}
              {vin ? vin : singleProject?.jobForm?.vin}
            </p>
          </div>
        </th>
        <td class="px-4 py-4">{task?.taskTitle}</td>
        <td class="px-4 py-4 text-[#8094ae] text-[13px]">
          {task?.dueDate} • {task?.dueTime}
        </td>
        <td class="px-6 py-4">KSh{task?.taskCost}.00</td>
        <td class="px-6 py-4">
          <div className="font-medium bg-[#1ee0ac26] text-[#1ee0ac] py-1.5 px-4 text-center text-xs rounded-xl">
            {task?.status}
          </div>
        </td>
        <td class="px-6 py-4 text-lg cursor-pointer">
          <BsThreeDots onClick={() => setShow(!show)} />
          {show && (
            <MoreButton
              // href={"clients/:99/details"}
              extraInfo={extraInfo}
              handleClick={handleClick}
            />
          )}
        </td>
      </tr>
    </tbody>
  );
}
