import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { useFormContext } from "@/context/form_context";
import { newJobSchema } from "@/schemas";
import { useFormik } from "formik";
import ValidateForm from "../ValidateForm";
import SuccessPrompt from "../SuccessPrompt";

const NewJobCard = ({ jobCard, setJobCard, selectOptions, projectName }) => {
  const cancelButtonRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const {
    jobCardForm: { project, body, mechanical, electrical, approval },
    newJobCardData,
    addNewJobCard,
  } = useFormContext();

  const onSubmit = async (values, actions) => {
    addNewJobCard();
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
      project: project,
      body: body,
      mechanical: mechanical,
      electrical: electrical,
      approval: approval,
    },
    validationSchema: newJobSchema,
    onSubmit,
  });

  return (
    <Transition.Root show={jobCard} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setJobCard}
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 md:w-full lg:w-4/6 ">
                <div className="border bg-white rounded-lg capitalize text-gray-700 pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-[#8094ae] flex justify-between items-center text-xl font-semibold">
                    <h3>Manage Info</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setJobCard(false)}
                    />
                  </div>
                  <p className="text-sm font-semibold mt-6 normal-case px-6">
                    Create a job card.
                  </p>
                  <form
                    className="mt-3 grid gap-8 p-4 px-6 "
                    onSubmit={handleSubmit}
                  >
                    {selectOptions?.length >= 1 ? (
                      <div className="text-sm grid gap-2 relative">
                        <label className="text-md font-semibold">
                          Select Project
                        </label>
                        <select
                          type="number"
                          name="project"
                          value={values.project}
                          onChange={(e) => {
                            handleChange(e);
                            newJobCardData(e);
                          }}
                          onBlur={handleBlur}
                          className={`${
                            errors.project && touched.project
                              ? "outline-none border border-red-800 text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                              : "outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                          }`}
                        >
                          <option className="text-md font-semibold">
                            Select Project
                          </option>
                          {selectOptions.map((job, index) => {
                            const { make, regNo } = job.jobForm;
                            const id = parseInt(job?.id, 10);
                            return (
                              <option value={id} key={job?.id}>
                                {make} - {regNo}
                              </option>
                            );
                          })}
                        </select>
                        {errors.project && touched.project && (
                          <ValidateForm error={errors.project} />
                        )}
                      </div>
                    ) : (
                      <p className="lowercase">
                        <span className="capitalize">Create</span> a project job
                        card for{" "}
                        <span className="uppercase font-bold">
                          {projectName?.make}
                        </span>
                        -<span className="font-bold">{projectName?.regNo}</span>
                      </p>
                    )}
                    <div className="text-sm grid gap-3">
                      <label className="text-md font-semibold">
                        Body Report
                      </label>
                      <input
                        name="body"
                        type="text"
                        value={values.body}
                        onChange={(e) => {
                          handleChange(e);
                          newJobCardData(e);
                        }}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Body Report"
                      />
                      <input
                        name="body"
                        type="text"
                        value={values.body}
                        onChange={(e) => {
                          handleChange(e);
                          newJobCardData(e);
                        }}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Body Report"
                      />
                      <button className="flex items-center gap-2 hover:bg-[#0971fe] bg-[#e4efff] text-[#0971fe]  hover:text-white p-2.5 rounded-md text-sm cursor-pointer font-bold mr-auto">
                        <BiPlus />
                        <span>Add Item</span>
                      </button>
                    </div>
                    <div className="text-sm grid gap-3">
                      <label className="text-md font-semibold">
                        Mechanical Report
                      </label>
                      <input
                        name="mechanical"
                        type="text"
                        value={values.mechanical}
                        onChange={(e) => {
                          handleChange(e);
                          newJobCardData(e);
                        }}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Mechanical Report"
                      />
                      <input
                        name="mechanical"
                        type="text"
                        value={values.mechanical}
                        onChange={(e) => {
                          handleChange(e);
                          newJobCardData(e);
                        }}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Mechanical Report"
                      />
                      <button className="flex items-center gap-2 hover:bg-[#0971fe] bg-[#e4efff] text-[#0971fe]  hover:text-white p-2.5 rounded-md text-sm cursor-pointer font-bold mr-auto">
                        <BiPlus />
                        <span>Add Item</span>
                      </button>
                    </div>
                    <div className="text-sm grid gap-3">
                      <label className="text-md font-semibold">
                        Electrical Report
                      </label>
                      <input
                        name="electrical"
                        type="text"
                        value={values.electrical}
                        onChange={(e) => {
                          handleChange(e);
                          newJobCardData(e);
                        }}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Electrical Report"
                      />
                      <input
                        name="electrical"
                        type="text"
                        value={values.electrical}
                        onChange={(e) => {
                          handleChange(e);
                          newJobCardData(e);
                        }}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Electrical Report"
                      />
                      <button className="flex items-center gap-2 hover:bg-[#0971fe] bg-[#e4efff] text-[#0971fe]  hover:text-white p-2.5 rounded-md text-sm cursor-pointer font-bold mr-auto">
                        <BiPlus />
                        <span>Add Item</span>
                      </button>
                    </div>
                    <div className="text-sm grid gap-2">
                      <label className="text-md font-semibold">
                        Is this job card approved by the client?
                      </label>
                      <select
                        className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                        name="approval"
                        value={values.approval}
                        onChange={(e) => {
                          handleChange(e);
                          newJobCardData(e);
                        }}
                      >
                        <option>Not Yet</option>
                        <option>Yes</option>
                      </select>
                    </div>
                    <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
                      <article
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                        onClick={() => setJobCard(false)}
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
                        <p className="text-xs">Create Job Card</p>
                      </button>
                    </div>
                  </form>
                  <SuccessPrompt
                    message="Job card created successfully"
                    open={success}
                    setOpen={setSuccess}
                    setModals={setJobCard}
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

export default NewJobCard;
