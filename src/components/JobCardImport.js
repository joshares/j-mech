import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { RiInformationLine } from "react-icons/ri";
import {MdOutlineCancel} from 'react-icons/md'

const JobCardImport = ({jobImport,setJobImport}) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={jobImport} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setJobImport}
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-5/6 lg:w-3/6 ">
                <div className="border bg-white rounded-lg capitalize text-gray-700 pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-[#8094ae] flex justify-between items-center text-xl font-semibold">
                    <h3>Select Jobcard</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setJobImport(false)}
                    />
                  </div>
                  <p className="text-sm font-semibold mt-6 normal-case px-6">
                    Select a jobcard to import from.
                  </p>
                  <div className="min-h-[30vh] flex flex-col items-center justify-center gap-2 text-[#8094ae]">
                    <RiInformationLine className="text-5xl" />
                    <p>No job card created yet!</p>
                  </div>
                  <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
                    <article
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                      onClick={() => setJobImport(false)}
                    >
                      <MdOutlineCancel />
                      <p className="text-xs">cancel</p>
                    </article>
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

export default JobCardImport;
