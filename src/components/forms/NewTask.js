import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import DatePicker from "../DatePicker";
import { useFormContext } from "@/context/form_context";
import { useFormik } from "formik";
import ValidateForm from "../ValidateForm";
import { newTaskSchema } from "@/schemas";
import SuccessPrompt from "../SuccessPrompt";

const NewTask = ({ task, setTask }) => {
  const cancelButtonRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const {
    taskForm: {
      taskTitle,
      assign,
      status,
      taskDesc,
      taskCost,
      dueDate,
      dueTime,
      required,
    },
    newTaskData,
    addNewTask,
  } = useFormContext();
  const onSubmit = async (values, actions) => {
    addNewTask;
    setSuccess(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    values,
    handleBlur,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      taskTitle: taskTitle,
      assign: assign,
      status: status,
      taskDesc: taskDesc,
      taskCost: taskCost,
      dueDate: dueDate,
      dueTime: dueTime,
      required: required,
    },
    validationSchema: newTaskSchema,
    onSubmit,
  });

  return (
    <Transition.Root show={task} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setTask}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-60 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
                <div className="border bg-white rounded-lg capitalize text-gray-700 pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-gray-300 flex justify-between items-center text-xl">
                    <h3>Create Project Task</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setTask(false)}
                    />
                  </div>
                  <p className="text-xs font-semibold mt-6 normal-case px-4">
                    Create a project task
                  </p>
                  <form
                    className="mt-3 grid gap-8 px-4 pb-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="text-sm grid gap-2 relative">
                      <label>Task Title</label>
                      <input
                        name="taskTitle"
                        type="text"
                        value={values.taskTitle}
                        onChange={(e) => {
                          handleChange(e);
                          newTaskData(e);
                        }}
                        onBlur={handleBlur}
                        placeholder="Task Name"
                        className={`${
                          errors.taskTitle && touched.taskTitle
                            ? " border border-red-500 outline-none w-full  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                            : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        }`}
                      />
                      {errors.taskTitle && touched.taskTitle && (
                        <ValidateForm error={errors.taskTitle} />
                      )}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2 relative">
                        <label>Assign To</label>
                        <select
                          name="assign"
                          value={values.assign}
                          onChange={(e) => {
                            handleChange(e);
                            newTaskData(e);
                          }}
                          onBlur={handleBlur}
                          className={`${
                            errors.assign && touched.assign
                              ? " border border-red-500 outline-none  rounded-md py-2 px-2 font-medium capitalize"
                              : "outline-none border rounded-md py-2 px-2 font-medium capitalize"
                          }`}
                        >
                          <option>Select Staff</option>
                          <option>All clients</option>
                        </select>
                        {errors.assign && touched.assign && (
                          <ValidateForm error={errors.assign} />
                        )}
                      </div>
                      <div className="text-sm grid gap-2">
                        <label>Status</label>
                        <select
                          className="outline-none border rounded-md py-2 px-2 font-medium capitalize"
                          name="status"
                          value={values.status}
                          onChange={(e) => {
                            handleChange(e);
                            newTaskData(e);
                          }}
                        >
                          <option>In Progress</option>
                          <option>All clients</option>
                        </select>
                      </div>
                    </div>
                    <div className="text-sm grid gap-2">
                      <label>Task Description</label>
                      <textarea
                        name="taskDesc"
                        type="text"
                        value={values.taskDesc}
                        onChange={(e) => {
                          handleChange(e);
                          newTaskData(e);
                        }}
                        className="w-full outline-none border rounded-md pl-3 py-1 min-h-[9em] placeholder:text-[#8094ae]"
                        placeholder="Task Description"
                      />
                    </div>
                    <div className="text-sm grid gap-2">
                      <label>Task Cost</label>
                      <input
                        name="taskCost"
                        type="text"
                        value={values.taskCost}
                        onChange={(e) => {
                          handleChange(e);
                          newTaskData(e);
                        }}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="0.00"
                      />
                      <p className="text-xs text-[#8094ae] normal-case italic">
                        Task cost can`t be updated once saved.
                      </p>
                    </div>
                    <section className="grid grid-cols-2 gap-4 relative">
                      <DatePicker
                        label="Due Date"
                        name={"dueDate"}
                        date={values.dueDate}
                        setDate={(e) => {
                          handleChange(e);
                          newTaskData(e);
                        }}
                        onBlur={handleBlur}
                      />
                      {errors.dueDate && touched.dueDate && (
                        <ValidateForm error={errors.dueDate} />
                      )}
                      <div className="text-sm grid gap-2">
                        <label>Due Time</label>
                        <input
                          type="time"
                          name="dueTime"
                          value={values.dueTime}
                          onChange={(e) => {
                            handleChange(e);
                            newTaskData(e);
                          }}
                          className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        />
                      </div>
                    </section>
                    <div className="text-sm grid gap-2">
                      <label>Select required parts</label>
                      <select
                        className="outline-none border rounded-md py-2 px-2 font-medium capitalize"
                        name="required"
                        value={values.required}
                        onChange={(e) => {
                          handleChange(e);
                          newTaskData(e);
                        }}
                      >
                        <option>Select parts</option>
                      </select>
                      <p className="text-xs text-[#8094ae] normal-case italic">
                        If this task requires parts recorded on the system,
                        please select the parts below. A task can`t be completed
                        if any of the required parts are not delivered. Parts
                        are added on Expenses Tab
                      </p>
                    </div>
                    <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
                      <article
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                        onClick={() => setTask(false)}
                      >
                        <MdOutlineCancel />
                        <p className="text-xs">cancel</p>
                      </article>
                      <button
                        disabled={isSubmitting}
                        className={`${
                          isSubmitting
                            ? "opacity-40 flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
                            : 'flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"'
                        }`}
                        type="submit"
                      >
                        <BsShieldCheck />
                        <p className="text-xs">Create Task</p>
                      </button>
                    </div>
                  </form>
                  <SuccessPrompt
                    message="Task created successfully"
                    open={success}
                    setOpen={setSuccess}
                    setModals={setTask}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NewTask;
