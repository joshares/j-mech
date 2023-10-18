import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useFormContext } from "@/context/form_context";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import ValidateForm from "../ValidateForm";
import { newUpdateInfoSchema } from "@/schemas";
import SuccessPrompt from "../SuccessPrompt";

const NewInfoUpdate = ({ info, setInfo }) => {
  const [success, setSuccess] = useState(false);
  const cancelButtonRef = useRef(null);
  const {
    updateForm: { fullName, phone, email, address },
    newUpdateData,
    addNewUpdate,
  } = useFormContext();
  const onSubmit = async (values, actions) => {
    addNewUpdate;
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
      fullName: fullName,
      phone: phone,
      email: email,
      address: address,
    },
    validationSchema: newUpdateInfoSchema,
    onSubmit,
  });

  return (
    <Transition.Root show={info} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setInfo}
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
                    <h3>Update Info</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setInfo(false)}
                    />
                  </div>
                  <p className="text-sm font-semibold mt-6 normal-case px-4">
                    Update client account.
                  </p>
                  <form
                    className="mt-3 grid gap-8 px-4 pb-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="text-sm grid gap-2 relative">
                      <label>Full Name</label>
                      <input
                        name="fullName"
                        type="text"
                        value={values.fullName}
                        onChange={(e) => {
                          handleChange(e);
                          newUpdateData(e);
                        }}
                        onBlur={handleBlur}
                        className={`${
                          errors.fullName && touched.fullName
                            ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                            : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        }`}
                        placeholder="Full Name"
                      />
                      {errors.fullName && touched.fullName && (
                        <ValidateForm error={errors.fullName} />
                      )}
                    </div>
                    <section className="grid sm:grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2 relative">
                        <label>Phone Number</label>
                        <input
                          name="phone"
                          type="tel"
                          value={values.phone}
                          onChange={(e) => {
                            handleChange(e);
                            newUpdateData(e);
                          }}
                          onBlur={(e) => {
                            handleBlur(e);
                            if (errors.phone) {
                              toast.error(errors.phone);
                            }
                          }}
                          className={`${
                            errors.phone && touched.phone
                              ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                              : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                          }`}
                          placeholder="Phone Number"
                        />
                        {errors.phone && touched.phone && (
                          <ValidateForm error={errors.phone} />
                        )}
                      </div>
                      <div className="text-sm grid gap-2 relative">
                        <label>Email Address</label>
                        <input
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={(e) => {
                            handleChange(e);
                            newUpdateData(e);
                          }}
                          onBlur={handleBlur}
                          className={`${
                            errors.email && touched.email
                              ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                              : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                          }`}
                          placeholder="Email Address"
                        />
                        {errors.email && touched.email && (
                          <ValidateForm error={errors.email} />
                        )}
                      </div>
                    </section>
                    <div className="text-sm grid gap-2 relative">
                      <label>Address</label>
                      <input
                        name="address"
                        type="text"
                        value={values.address}
                        onChange={(e) => {
                          handleChange(e);
                          newUpdateData(e);
                        }}
                        onBlur={handleBlur}
                        className={`${
                          errors.address && touched.address
                            ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                            : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        }`}
                        placeholder="Address"
                      />
                      {errors.address && touched.address && (
                        <ValidateForm error={errors.address} />
                      )}
                    </div>
                    <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
                      <article
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                        onClick={() => setInfo(false)}
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
                        <p className="text-xs">Save Changes</p>
                      </button>
                    </div>
                  </form>
                  <SuccessPrompt
                    message="updated successfully"
                    open={success}
                    setOpen={setSuccess}
                    setModals={setInfo}
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

export default NewInfoUpdate;
