import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import DatePicker from "./DatePicker";
import { useFormContext } from "@/context/form_context";
import { useFormik } from "formik";
import ValidateForm from "./ValidateForm";
import { newPaymentSchema } from "@/schemas";
import SuccessPrompt from "./SuccessPrompt";
import ToggleInputForm from "./ToggleInputForm";

const ManageTeamInfo = ({ payment, setPayment, task }) => {
  const cancelButtonRef = useRef(null);
  const [success, setSuccess] = useState(false);

  return (
    <Transition.Root show={payment} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setPayment}
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
                    <h3>Manage Info</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setPayment(false)}
                    />
                  </div>
                  <p className="text-xs font-medium mt-6 normal-case px-4 text-[#8094ae]">
                    Task Details
                  </p>
                  <div className="mt-3 grid gap-8 px-4 pb-4">
                    <div className="grid gap-2">
                      <h2 className="text-lg font-semibold">
                        {task?.taskTitle}
                      </h2>
                      <div className="font-medium bg-[#1ee0ac26] text-[#1ee0ac] py-1 px-4 text-center text-xs rounded-xl mr-auto">
                        {task?.status}
                      </div>
                    </div>
                    <div className="font-medium">
                      <div className="text-xs flex w-3/5 justify-between">
                        <h3 className="text-[#8094ae]">Cost:</h3>
                        <p>KSh{task?.taskCost}.00</p>
                      </div>
                      <div className="text-xs flex w-3/5 justify-between">
                        <h3 className="text-[#8094ae]">Due Date:</h3>
                        <p>
                          {task?.dueDate} • {task?.dueTime}
                        </p>
                      </div>
                    </div>
                    <div className="font-medium">
                      <div className="text-xs grid">
                        <h3 className="text-[#8094ae]">Task Description</h3>
                        <p>{task?.taskDesc}</p>
                      </div>
                    </div>
                    <div className="font-medium">
                      <div className="text-xs grid">
                        <h3 className="text-[#8094ae]">Required Parts</h3>
                        <p className="italic">
                          {task?.requiredParts
                            ? task?.requiredParts
                            : "No parts required for this task"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-auto border py-5 bg-gray-200 justify-end gap-2 px-4">
                    <button className="flex items-center gap-2 px-3 py-2 bg-white rounded-md border font-bold text-gray-500 cursor-pointer">
                      <MdOutlineCancel />
                      <p className="text-xs">Cancel</p>
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ManageTeamInfo;
