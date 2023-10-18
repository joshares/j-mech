import React, { useState } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import ToggleInputForm from "./ToggleInputForm";
import { BsExclamationLg } from "react-icons/bs";

const DeletePrompt = () => {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
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

        <div className="fixed inset-0 z-70 overflow-y-auto">
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
                <div className="bg-white h-80 flex flex-col items-center p-6 justify-between text-center">
                  <div className="border-2 border-[#F8BB86] rounded-full p-2 mt-2">
                    <BsExclamationLg className="text-6xl text-[#F8BB86]" />
                  </div>
                  <h3 className="text-[1.8rem] text-[#364a63] font-semibold">
                    Are you sure?
                  </h3>
                  <p className="text-sm">
                    This placeholder will be deleted permanently.
                  </p>
                  <div className="flex items-center gap-2">
                    <button className="bg-gray py-3 px-6 rounded-md text-md text-lightgray cursor-pointer outline-none border font-medium">
                      Cancel
                    </button>
                    <button className="bg-[#0971fe] py-3 px-6 rounded-md text-md text-white cursor-pointer outline-none border font-medium">
                      Yes, delete!
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

export default DeletePrompt;
