import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { FaSms } from "react-icons/fa";
import { useFormContext } from "@/context/form_context";
import { useFormik } from "formik";
import ValidateForm from "../ValidateForm";
import { toast } from "react-toastify";
import { newMessageSchema } from "@/schemas";
import SuccessPrompt from "../SuccessPrompt";

const NewSMSForm = ({ sms, setSms }) => {
  const cancelButtonRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const {
    smsForm: { sendTo, phone, message },
    newSms,
    sendSms,
  } = useFormContext();

  const onSubmit = async (values, actions) => {
    sendSms();
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
      sendTo: sendTo,
      phone: phone,
      message: message,
    },
    validationSchema: newMessageSchema,
    onSubmit,
  });

  return (
    <Transition.Root show={sms} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setSms}
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-5/6 sm:my-8 sm:w-full sm:max-w-lg">
                <div className="border bg-white rounded-lg capitalize text-gray-700 pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-gray-300 flex justify-between items-center text-xl">
                    <h3>Send SMS</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setSms(false)}
                    />
                  </div>
                  <p className="text-sm font-semibold mt-6 normal-case px-4">
                    Create an SMS
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    className="mt-3 grid gap-8 px-4 pb-4"
                  >
                    <div className="text-sm grid gap-2 relative">
                      <label>Send To</label>
                      <input
                        name="sendTo"
                        type="text"
                        value={values.sendTo}
                        onChange={(e) => {
                          newSms(e);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        className={`${
                          errors.sendTo && touched.sendTo
                            ? " border border-red-500 outline-none w-full  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                            : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        }`}
                        placeholder="Send To"
                      />
                      {errors.sendTo && touched.sendTo && (
                        <ValidateForm error={errors.sendTo} />
                      )}
                    </div>
                    <div className="text-sm grid gap-2 relative">
                      <label>Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={(e) => {
                          newSms(e);
                          handleChange(e);
                        }}
                        onBlur={(e) => {
                          handleBlur(e);
                          if (errors.phone) {
                            toast.error(errors.phone);
                          }
                        }}
                        className={`${
                          errors.phone && touched.phone
                            ? " border border-red-500 outline-none w-full  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                            : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        }`}
                      />
                      {errors.phone && touched.phone && (
                        <ValidateForm error={errors.phone} />
                      )}
                    </div>
                    <div className="text-sm grid gap-2 relative">
                      <label>Message</label>
                      <textarea
                        name="message"
                        type="text"
                        value={values.message}
                        onChange={(e) => {
                          newSms(e);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        className={`${
                          errors.message && touched.message
                            ? " border border-red-500 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae] h-20"
                            : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae] h-20"
                        }`}
                        placeholder="Message"
                      />
                      <p className="italic text-xs">
                        We`ll include your company name One-Mech Limited at the
                        end of the message
                      </p>
                      {errors.message && touched.message && (
                        <ValidateForm error={errors.message} />
                      )}
                    </div>
                    <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
                      <article
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                        onClick={() => setSms(false)}
                      >
                        <MdOutlineCancel />
                        <p className="text-xs">cancel</p>
                      </article>
                      <article className="flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer">
                        <MdTaskAlt />
                        <button
                          disabled={isSubmitting}
                          className={`${
                            isSubmitting ? "opacity-40 text-xs" : "text-xs"
                          }`}
                          type="submit"
                        >
                          Send Messages
                        </button>
                      </article>
                    </div>
                  </form>
                  <SuccessPrompt
                    message="message sent successfully"
                    open={success}
                    setOpen={setSuccess}
                    setModals={setSms}
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

export default NewSMSForm;
