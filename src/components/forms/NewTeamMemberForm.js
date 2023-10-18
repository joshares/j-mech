import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useFormContext } from "@/context/form_context";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import ValidateForm from "../ValidateForm";
import { newTeamSchema } from "@/schemas";
import SuccessPrompt from "../SuccessPrompt";

export default function NewTeamMemberForm({ open, setOpen }) {
  const cancelButtonRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const {
    teamForm: {
      firstName,
      lastName,
      phone,
      email,
      role,
      type,
      status,
      address,
    },
    newTeamMemberData,
    addNewTeamMember,
  } = useFormContext();
  const onSubmit = async (values, actions) => {
    addNewTeamMember();
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
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      role: role,
      type: type,
      status: status,
      address: address,
    },
    validationSchema: newTeamSchema,
    onSubmit,
  });
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="border bg-white rounded-lg capitalize text-gray-700 pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-gray-300 flex justify-between items-center text-xl">
                    <h3>Create Team Member</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => {
                        setOpen(false);
                      }}
                    />
                  </div>
                  <p className="text-xs font-semibold mt-6 normal-case px-4">
                    Create a team member account
                  </p>
                  <form
                    className="mt-3 grid gap-8 px-4 pb-4"
                    onSubmit={handleSubmit}
                  >
                    <section className="grid grid-cols-2 gap-4 relative">
                      <div className="text-sm grid gap-2">
                        <label>First Name</label>
                        <input
                          name="firstName"
                          type="text"
                          value={values.firstName}
                          onChange={(e) => {
                            handleChange(e);
                            newTeamMemberData(e);
                          }}
                          onBlur={handleBlur}
                          className={`${
                            errors.firstName && touched.firstName
                              ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                              : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                          }`}
                          placeholder="First Name"
                        />
                        {errors.firstName && touched.firstName && (
                          <ValidateForm error={errors.firstName} />
                        )}
                      </div>
                      <div className="text-sm grid gap-2 relative">
                        <label>Last Name</label>
                        <input
                          name="lastName"
                          type="text"
                          value={values.lastName}
                          onChange={(e) => {
                            handleChange(e);
                            newTeamMemberData(e);
                          }}
                          onBlur={handleBlur}
                          className={`${
                            errors.lastName && touched.lastName
                              ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                              : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                          }`}
                          placeholder="Last Name"
                        />
                        {errors.lastName && touched.lastName && (
                          <ValidateForm error={errors.lastName} />
                        )}
                      </div>
                    </section>
                    <section className="grid grid-cols-2 gap-4 relative">
                      <div className="text-sm grid gap-2">
                        <label>Phone Number</label>
                        <input
                          name="phone"
                          type="tel"
                          value={values.phone}
                          onChange={(e) => {
                            handleChange(e);
                            newTeamMemberData(e);
                          }}
                          onBlur={() => {
                            handleBlur;
                            if (errors.phone && touched.phone) {
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
                            newTeamMemberData(e);
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
                    <div className="text-sm grid gap-2">
                      <label>Role</label>
                      <select
                        className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                        name="role"
                        value={values.role}
                        onChange={(e) => {
                          handleChange(e);
                          newTeamMemberData(e);
                        }}
                      >
                        <option>Staff</option>
                        <option>Manager</option>
                        <option>booking manager</option>
                        <option>Inventory manager</option>
                        <option>Owner</option>
                      </select>
                      <p className="text-xs text-[#8094ae] normal-case italic">
                        Owner has full access of the system. Manager have full
                        access but has no delete permissions. Booking Manager
                        books vehicles IN and OUT. Inventory Manager has access
                        to inventory module. Staff have no access to the system.
                      </p>
                    </div>
                    <section className="grid grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2">
                        <label>Type</label>
                        <select
                          className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                          name="type"
                          value={values.type}
                          onChange={(e) => {
                            handleChange(e);
                            newTeamMemberData(e);
                          }}
                        >
                          <option>Full Time</option>
                          <option>Part time</option>
                          <option>Subcontractor</option>
                        </select>
                      </div>
                      <div className="text-sm grid gap-2">
                        <label>Status</label>
                        <select
                          className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                          name="status"
                          value={values.status}
                          onChange={(e) => {
                            handleChange(e);
                            newTeamMemberData(e);
                          }}
                        >
                          <option>Active</option>
                          <option>Un available</option>
                          <option>On Leave</option>
                        </select>
                      </div>
                    </section>
                    <div className="text-sm grid gap-2">
                      <label>Address</label>
                      <select
                        className="outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                        name="address"
                        value={values.address}
                        onChange={(e) => {
                          handleChange(e);
                          newTeamMemberData(e);
                        }}
                      >
                        <option>Select State</option>
                        <option>Abia</option>
                      </select>
                    </div>
                    <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
                      <article
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                        onClick={() => {
                          setOpen(false);
                        }}
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
                        <p className="text-xs">Create Member</p>
                      </button>
                    </div>
                  </form>
                  <SuccessPrompt
                    message="Member created successfully"
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
}
