import React from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import ToggleInputForm from "./ToggleInputForm";
import { FcCheckmark } from "react-icons/fc";

const SuccessPrompt = ({ message, setOpen, open, setModals }) => {
  const cancelButtonRef = useRef(null);
  const closeModals = () => {
    setOpen(false);
    setModals(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={closeModals}
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
                <div className="bg-white h-80 flex flex-col items-center p-6 justify-between text-center relative">
                  <div
                    className="sa-icon sa-success animate"
                    // style="display: block;"
                  >
                    <span className="sa-line sa-tip animateSuccessTip"></span>
                    <span className="sa-line sa-long animateSuccessLong"></span>

                    <div className="sa-placeholder"></div>
                    <div className="sa-fix"></div>
                  </div>
                  <h3 className="text-[1.8rem] text-[#364a63] font-semibold">
                    Alright!
                  </h3>
                  <p className="text-sm">{message}</p>
                  <button
                    className="bg-[#0971fe] py-3 px-6 rounded-md text-md text-white cursor-pointer font-medium"
                    onClick={() => setModals(false)}
                  >
                    Okay
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SuccessPrompt;
