import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useFormContext } from "@/context/form_context";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import ValidateForm from "../../ValidateForm";
import { newSupplierSchema } from "@/schemas";
import SuccessPrompt from "../../SuccessPrompt";

const EditSuppliersForm = ({ open, setOpen, supplier }) => {
  const cancelButtonRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const {
    // supplierForm: { supplierName, phone, email, address, vat },
    newSupplierData,
    editSupplier,
  } = useFormContext();
  const onSubmit = async (values, actions) => {
    editSupplier(supplier?.id);
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
      supplierName: supplier?.supplierForm?.supplierName,
      phone: supplier?.supplierForm?.phone,
      email: supplier?.supplierForm?.email,
      address: supplier?.supplierForm?.address,
      vat: supplier?.supplierForm?.vat,
    },
    validationSchema: newSupplierSchema,
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
                <div className="border bg-white rounded-lg capitalize text-gray-700 pt-4 flex flex-col">
                  <div className="pb-4 px-4 border border-transparent border-b-[#8094ae] flex justify-between items-center text-xl">
                    <h3>Add a Supplier</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  <p className="text-xs font-semibold mt-6 normal-case px-4">
                    Add a Supplier
                  </p>
                  <form
                    className="mt-3 grid gap-8 px-4 pb-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="text-sm grid gap-2 relative">
                      <label>Supplier Name</label>
                      <input
                        name="supplierName"
                        type="text"
                        value={values.supplierName}
                        onChange={(e) => {
                          handleChange(e);
                          newSupplierData(e);
                        }}
                        onBlur={handleBlur}
                        className={`${
                          errors.supplierName && touched.supplierName
                            ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                            : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        }`}
                        placeholder="Supplier Name"
                      />
                      {errors.supplierName && touched.supplierName && (
                        <ValidateForm error={errors.supplierName} />
                      )}
                    </div>
                    <section className="grid grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2 relative">
                        <label>Phone Number</label>
                        <input
                          name="phone"
                          type="tel"
                          value={values.phone}
                          onChange={(e) => {
                            handleChange(e);
                            newSupplierData(e);
                          }}
                          placeholder="Phone Number"
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
                            newSupplierData(e);
                          }}
                          placeholder="Email Address"
                          onBlur={handleBlur}
                          className={`${
                            errors.email && touched.email
                              ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                              : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                          }`}
                        />
                        {errors.email && touched.email && (
                          <ValidateForm error={errors.email} />
                        )}
                      </div>
                    </section>
                    <div className="text-sm grid gap-2">
                      <label>Address</label>
                      <input
                        name="address"
                        type="text"
                        value={values.address}
                        onChange={(e) => {
                          handleChange(e);
                          newSupplierData(e);
                        }}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Address"
                      />
                    </div>
                    <div className="text-sm grid gap-2">
                      <label>VAT PIN Number</label>
                      <input
                        name="vat"
                        type="text"
                        value={values.vat}
                        onChange={(e) => {
                          handleChange(e);
                          newSupplierData(e);
                        }}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="VAT PIN Number"
                      />
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
                        <p className="text-xs">Save Changes</p>
                      </button>
                    </div>
                  </form>
                  <SuccessPrompt
                    message="Supplier added successfully"
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

export default EditSuppliersForm;
