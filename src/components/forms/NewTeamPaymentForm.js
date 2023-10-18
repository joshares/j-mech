import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import DatePicker from "../DatePicker";
import { useFormContext } from "@/context/form_context";
import { useFormik } from "formik";
import ValidateForm from "../ValidateForm";
import { newPaymentSchema } from "@/schemas";
import SuccessPrompt from "../SuccessPrompt";
import ToggleInputForm from "../ToggleInputForm";

const NewTeamPaymentForm = ({ payment, setPayment }) => {
  const cancelButtonRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const {
    paymentsForm: { job, amount, paymentDate, paymentMethod, notes },
    newPaymentData,
    addNewPayment,
  } = useFormContext();
  const onSubmit = async (values, actions) => {
    // addNewPayment();
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
      job: job,
      amount: amount,
      paymentDate: paymentDate,
      paymentMethod: paymentMethod,
      notes: notes,
    },
    validationSchema: newPaymentSchema,
    onSubmit,
  });

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
                    <h3>Add Payment</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setPayment(false)}
                    />
                  </div>
                  <p className="text-xs font-medium mt-6 normal-case px-4 text-[#8094ae]">
                    Record a payment
                  </p>
                  <form
                    className="mt-3 grid gap-8 px-4 pb-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="text-sm grid gap-2 relative">
                      <label>Amount</label>
                      <input
                        name="amount"
                        type="text"
                        value={values.amount}
                        onChange={(e) => {
                          handleChange(e);
                          newPaymentData(e);
                        }}
                        onBlur={handleBlur}
                        className={`${
                          errors.amount && touched.amount
                            ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                            : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        }`}
                        placeholder="0.00"
                      />
                      {errors.amount && touched.amount && (
                        <ValidateForm error={errors.amount} />
                      )}
                      <p className="text-xs text-[#8094ae] normal-case italic">
                        The amout in brackets is the balance due.
                      </p>
                    </div>
                    <div className="text-sm grid gap-2 relative">
                      <label>Payment Note</label>
                      <input
                        name="paymentNote"
                        type="text"
                        // value={values.amount}
                        onChange={(e) => {
                          handleChange(e);
                          newPaymentData(e);
                        }}
                        onBlur={handleBlur}
                        className={`${
                          errors.amount && touched.amount
                            ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                            : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        }`}
                        placeholder="Payment Note"
                      />
                      {errors.amount && touched.amount && (
                        <ValidateForm error={errors.amount} />
                      )}
                      <p className="text-xs text-[#8094ae] normal-case italic">
                        Optional
                      </p>
                    </div>
                    <section className="grid grid-cols-2 gap-4">
                      <DatePicker
                        label="Payment Date"
                        name={"paymentDate"}
                        date={paymentDate}
                        setDate={newPaymentData}
                      />
                      <div className="text-sm grid gap-2">
                        <label>Payment Mode</label>
                        <select
                          className="outline-none border rounded-md py-2 px-2 font-medium capitalize"
                          name="paymentMethod"
                          value={values.paymentMethod}
                          onChange={(e) => {
                            handleChange(e);
                            newPaymentData(e);
                          }}
                        >
                          <option>Cash</option>
                          <option>Card</option>
                          <option>Mobile Money</option>
                          <option>Bank</option>
                          <option>Cheque</option>
                          <option>Online Payment</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </section>
                    <div className="text-sm grid gap-2">
                      <ToggleInputForm
                        label={"Deduct from Okon's balance of KSh12,364.00"}
                      />
                    </div>
                    <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
                      <article
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                        onClick={() => setPayment(false)}
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
                        <p className="text-xs">Save payment</p>
                      </button>
                    </div>
                  </form>
                  <SuccessPrompt
                    message="Payment added successfully "
                    open={success}
                    setOpen={setSuccess}
                    setModals={setPayment}
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

export default NewTeamPaymentForm;
