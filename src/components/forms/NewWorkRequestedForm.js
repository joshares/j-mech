import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import DatePicker from "../DatePicker";
import { useFormContext } from "@/context/form_context";
import { useFormik } from "formik";
import ValidateForm from "../ValidateForm";
import { newWorkRequestedSchema } from "@/schemas";
import SuccessPrompt from "../SuccessPrompt";

const NewWorkRequestedForm = ({ workRequested, setWorkRequested }) => {
  const cancelButtonRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const {
    workForm: {
      taskTitle,
      assignTo,
      status,
      taskCost,
      taskDesc,
      dueDate,
      dueTime,
      requiredParts,
    },
    newWorkData,
    addNewWork,
  } = useFormContext();
  const onSubmit = async (values, actions) => {
    addNewWork();
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
      assignTo: assignTo,
      status: status,
      taskCost: taskCost,
      taskDesc: taskDesc,
      dueDate: dueDate,
      dueTime: dueTime,
      requiredParts: requiredParts,
    },
    validationSchema: newWorkRequestedSchema,
    onSubmit,
  });

  return (
    <Transition.Root show={workRequested} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setWorkRequested}
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-5/6 ">
                <div className="border bg-white rounded-lg capitalize text-gray-700 pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-[#8094ae] flex justify-between items-center text-xl">
                    <h3>Manage Info</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setWorkRequested(false)}
                    />
                  </div>
                  <p className="text-xs font-semibold mt-6 normal-case px-6">
                    Create project tasks
                  </p>
                  <form
                    className="mt-3 grid gap-8 p-4 px-6 "
                    onSubmit={handleSubmit}
                  >
                    <section className=" border">
                      <h2 className="text-[#364a63] text-lg font-bold px-4 py-2">
                        #1 Check Vehicle Overheating.
                      </h2>
                      <hr />
                      <div className="grid gap-8 p-4">
                        <div className="grid sm:grid-cols-4 gap-4">
                          <div className="text-sm grid gap-2 relative">
                            <label>Task Title</label>
                            <input
                              type="text"
                              name="taskTitle"
                              placeholder="Check Vehicle Overheating"
                              className={`${
                                errors.taskTitle && touched.taskTitle
                                  ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                                  : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                              }`}
                              value={values.taskTitle}
                              onChange={(e) => {
                                handleChange(e);
                                newWorkData(e);
                              }}
                              onBlur={handleBlur}
                            />
                            {errors.taskTitle && touched.taskTitle && (
                              <ValidateForm error={errors.taskTitle} />
                            )}
                          </div>
                          <div className="text-sm grid gap-2 relative">
                            <label>Assign to</label>
                            <select
                              name="assignTo"
                              className={`${
                                errors.assignTo && touched.assignTo
                                  ? "border border-red-800 outline-none  text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                                  : "outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                              }`}
                              value={values.assignTo}
                              onChange={(e) => {
                                handleChange(e);
                                newWorkData(e);
                              }}
                              onBlur={handleBlur}
                            >
                              <option>Select Staff</option>
                              <option>All clients</option>
                            </select>
                            {errors.assignTo && touched.assignTo && (
                              <ValidateForm error={errors.assignTo} />
                            )}
                          </div>
                          <div className="text-sm grid gap-2">
                            <label>Status</label>
                            <select
                              className={`${
                                errors.fullName && touched.fullName
                                  ? "border border-red-800 outline-none  text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                                  : "outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                              }`}
                              name="status"
                              value={values.status}
                              onChange={(e) => {
                                handleChange(e);
                                newWorkData(e);
                              }}
                              onBlur={handleBlur}
                            >
                              <option>In Progress</option>
                              <option>All clients</option>
                            </select>
                          </div>
                          <div className="text-sm grid gap-2 relative">
                            <label>Task Cost</label>
                            <input
                              name="taskCost"
                              type="text"
                              value={values.taskCost}
                              onChange={(e) => {
                                handleChange(e);
                                newWorkData(e);
                              }}
                              onBlur={handleBlur}
                              className={`${
                                errors.taskCost && touched.taskCost
                                  ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae] "
                                  : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae] "
                              }`}
                              placeholder="N0.00"
                            />
                            {errors.taskCost && touched.taskCost && (
                              <ValidateForm error={errors.taskCost} />
                            )}
                          </div>
                        </div>
                        <div className="text-sm grid gap-2 relative">
                          <label>Task Description</label>
                          <textarea
                            placeholder="Task Description"
                            className={`${
                              errors.taskDesc && touched.taskDesc
                                ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae] h-20"
                                : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae] h-20"
                            }`}
                            name="taskDesc"
                            value={values.taskDesc}
                            onChange={(e) => {
                              handleChange(e);
                              newWorkData(e);
                            }}
                            onBlur={handleBlur}
                          />
                          {errors.taskDesc && touched.taskDesc && (
                            <ValidateForm error={errors.taskDesc} />
                          )}
                        </div>
                        <div className="grid sm:grid-cols-4 items-center gap-4 relative">
                          <DatePicker
                            label="Due Date"
                            name={"dueDate"}
                            date={values.dueDate}
                            setDate={(e) => {
                              handleChange(e);
                              newWorkData(e);
                            }}
                            onBlur={handleBlur}
                          />
                          <div className="text-sm grid gap-2">
                            <label>Due Time</label>
                            <input
                              type="time"
                              className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                              name="dueTime"
                              value={values.dueTime}
                              onChange={(e) => {
                                handleChange(e);
                                newWorkData(e);
                              }}
                            />
                          </div>
                          <div className="text-sm grid gap-2 sm:col-span-2">
                            <label>Select required parts</label>
                            <select
                              className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                              name="requiredParts"
                              value={values.requiredParts}
                              onChange={(e) => {
                                handleChange(e);
                                newWorkData(e);
                              }}
                            >
                              <option>Select required parts</option>
                              <option>All clients</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className=" border">
                      <h2 className="text-[#364a63] text-lg font-bold px-4 py-2">
                        #2 Check Vehicle Startability Issue.
                      </h2>
                      <hr />
                      <div className="grid gap-8 p-4">
                        <div className="grid sm:grid-cols-4 gap-4">
                          <div className="text-sm grid gap-2">
                            <label>Task Title</label>
                            <input
                              type="text"
                              placeholder="Check Vehicle Startability Issue"
                              className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                              // value={user}
                            />
                          </div>
                          <div className="text-sm grid gap-2">
                            <label>Assign to</label>
                            <select
                              className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                              // value={user}
                            >
                              <option>Select Staff</option>
                              <option>All clients</option>
                            </select>
                          </div>
                          <div className="text-sm grid gap-2">
                            <label>Status</label>
                            <select
                              className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                              // value={user}
                            >
                              <option>In Progress</option>
                              <option>All clients</option>
                            </select>
                          </div>
                          <div className="text-sm grid gap-2">
                            <label>Task Cost</label>
                            <input
                              name="description"
                              type="text"
                              //   value={title}
                              //   onChange={updateCampaignDetails}
                              className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                              placeholder="N0.00"
                            />
                          </div>
                        </div>
                        <div className="text-sm grid gap-2">
                          <label>Task Description</label>
                          <textarea
                            placeholder="Task Description"
                            className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae] h-20"
                          />
                        </div>
                        <div className="grid sm:grid-cols-4 items-center gap-4">
                          <DatePicker label="Due Date" />
                          <div className="text-sm grid gap-2">
                            <label>Due Time</label>
                            <input
                              type="time"
                              className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                            />
                          </div>
                          <div className="text-sm grid gap-2 sm:col-span-2">
                            <label>Select required parts</label>
                            <select
                              className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                              // value={user}
                            >
                              <option>Select required parts</option>
                              <option>All clients</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
                      <article
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                        onClick={() => setWorkRequested(false)}
                      >
                        <MdOutlineCancel />
                        <p className="text-xs">cancel</p>
                      </article>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`${
                          isSubmitting
                            ? "opacity-40 flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
                            : "flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer"
                        }`}
                      >
                        <MdTaskAlt />
                        <p className="text-xs">Create work form</p>
                      </button>
                    </div>
                  </form>
                  <SuccessPrompt
                    message="work form created successfully"
                    open={success}
                    setOpen={setSuccess}
                    setModals={setWorkRequested}
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

export default NewWorkRequestedForm;
