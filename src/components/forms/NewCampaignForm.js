import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useFormContext } from "@/context/form_context";
import { useFormik } from "formik";
import ValidateForm from "../ValidateForm";
import { newCampaignSchema } from "@/schemas";
import SuccessPrompt from "../SuccessPrompt";

const NewCampaignForm = ({ open, setOpen }) => {
  const [success, setSuccess] = useState(false);
  const cancelButtonRef = useRef(null);
  const {
    campaignForm: { campaignTitle, send, message },
    newCampaignData,
    addNewCampaign,
  } = useFormContext();
  const onSubmit = async (values, actions) => {
    addNewCampaign();
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
      campaignTitle: campaignTitle,
      send: send,
      message: message,
    },
    validationSchema: newCampaignSchema,
    onSubmit,
  });
  // MdTaskAlt IMPORTANT
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
                <div className="bg-white rounded-lg capitalize text-gray-700 pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-[#8094ae] flex justify-between items-center text-xl">
                    <h3>Create Campaign</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  <p className="text-xs font-semibold mt-6 normal-case px-4">
                    Create a Campaign
                  </p>
                  <form
                    className="mt-3 grid gap-8 px-4 pb-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="text-sm grid gap-2 relative">
                      <label>Campaign title</label>
                      <input
                        name="campaignTitle"
                        type="text"
                        value={values.campaignTitle}
                        onChange={(e) => {
                          handleChange(e);
                          newCampaignData(e);
                        }}
                        onBlur={handleBlur}
                        className={`${
                          errors.campaignTitle && touched.campaignTitle
                            ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                            : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        }`}
                        placeholder="Campaign Title"
                      />
                      <p className="text-xs text-[#8094ae] normal-case italic">
                        This will not be shown to customers
                      </p>
                      {errors.campaignTitle && touched.campaignTitle && (
                        <ValidateForm error={errors.campaignTitle} />
                      )}
                    </div>
                    <div className="text-sm grid gap-2 relative">
                      <label>Send to</label>
                      <select
                        className={`${
                          errors.send && touched.send
                            ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                            : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        }`}
                        name="send"
                        value={values.send}
                        onChange={(e) => {
                          handleChange(e);
                          newCampaignData(e);
                        }}
                        onBlur={handleBlur}
                      >
                        <option>Select</option>
                        <option>All clients</option>
                        <option>selected clients</option>
                        <option>All team members</option>
                        <option>selected team members</option>
                        <option>enter number manually</option>
                        <option>filtered clients by car make / model</option>
                      </select>
                      {errors.send && touched.send && (
                        <ValidateForm error={errors.send} />
                      )}
                    </div>
                    <div className="text-sm grid gap-2 relative">
                      <label>Message</label>
                      <textarea
                        name="message"
                        type="text"
                        value={values.message}
                        onChange={(e) => {
                          handleChange(e);
                          newCampaignData(e);
                        }}
                        onBlur={handleBlur}
                        className={`${
                          errors.message && touched.message
                            ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                            : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        }`}
                        placeholder="Campaign Title"
                      />
                      <p className="text-xs text-[#8094ae] normal-case italic">
                        We`ll include your company name One-Mech Limited at the
                        end of every message.
                      </p>
                      {errors.message && touched.message && (
                        <ValidateForm error={errors.message} />
                      )}
                    </div>
                    <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
                      <article
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                        onClick={() => setOpen(false)}
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
                        <p className="text-xs">Create Campaign</p>
                      </button>
                    </div>
                  </form>
                  <SuccessPrompt
                    message="Campaign is successfully created"
                    open={success}
                    setOpen={setSuccess}
                    setModals={setOpen}
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

export default NewCampaignForm;
