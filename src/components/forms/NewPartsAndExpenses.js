import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import DatePicker from "../DatePicker";
import ToggleInputForm from "../ToggleInputForm";
import { useFormContext } from "@/context/form_context";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import ValidateForm from "../ValidateForm";
import { newPartsandExpSchema } from "@/schemas";
import SuccessPrompt from "../SuccessPrompt";

const NewPartsAndExpenses = ({ parts, setParts }) => {
  const cancelButtonRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const {
    expenseForm: {
      source,
      itemName,
      supplier,
      quantity,
      quantityUnit,
      total,
      expense,
      type,
      status,
      paymentDue,
    },
    newExpenseData,
    addNewExpense,
  } = useFormContext();
  const onSubmit = async (values, actions) => {
    addNewExpense();
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
      source: source,
      itemName: itemName,
      supplier: supplier,
      quantity: quantity,
      quantityUnit: quantityUnit,
      total: total,
      expense: expense,
      type: type,
      status: status,
      paymentDue: paymentDue,
    },
    validationSchema: newPartsandExpSchema,
    onSubmit,
  });

  return (
    <Transition.Root show={parts} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setParts}
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
                    <h3>Add Expense</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setParts(false)}
                    />
                  </div>
                  <p className="text-xs font-semibold mt-6 normal-case px-4">
                    Add a project expense
                  </p>
                  <form
                    className="mt-3 grid gap-8 px-4 pb-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="text-sm grid gap-2">
                      <label>Source</label>
                      <select
                        className="outline-none border rounded-md py-2 px-2 font-medium capitalize"
                        name="source"
                        value={values.source}
                        onChange={(e) => {
                          handleChange(e);
                          newExpenseData(e);
                        }}
                        onBlur={handleBlur}
                      >
                        <option>External Suppliers</option>
                        <option>From inventory</option>
                      </select>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2 relative">
                        <label>Expense / Item name</label>
                        <input
                          name="itemName"
                          type="text"
                          value={values.itemName}
                          onChange={(e) => {
                            handleChange(e);
                            newExpenseData(e);
                          }}
                          onBlur={handleBlur}
                          className={`${
                            errors.itemName && touched.itemName
                              ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                              : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                          }`}
                          placeholder="Expense / Item name"
                        />
                        {errors.itemName && touched.itemName && (
                          <ValidateForm error={errors.itemName} />
                        )}
                      </div>
                      <div className="text-sm grid gap-2">
                        <label>Supplier</label>
                        <select
                          className={`${
                            errors.experience && touched.experience
                              ? "border border-red-800 outline-none  rounded-md py-2 px-2 font-medium capitalize"
                              : "outline-none border rounded-md py-2 px-2 font-medium capitalize"
                          }`}
                          name="supplier"
                          value={values.supplier}
                          onChange={(e) => {
                            handleChange(e);
                            newExpenseData(e);
                          }}
                          onBlur={handleBlur}
                        >
                          <option>Select Supplier</option>
                          <optgroup>
                            <label>New Supplier</label>
                            <option>Create new suplier</option>
                          </optgroup>
                          <optgroup>
                            <label>New Supplier</label>
                            <option>okon</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2 relative">
                        <label>Quantity</label>
                        <input
                          name="quantity"
                          type="text"
                          value={values.quantity}
                          onChange={(e) => {
                            handleChange(e);
                            newExpenseData(e);
                          }}
                          onBlur={handleBlur}
                          className={`${
                            errors.quantity && touched.quantity
                              ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                              : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                          }`}
                          placeholder="Quantity"
                        />
                        {errors.quantity && touched.quantity && (
                          <ValidateForm error={errors.quantity} />
                        )}
                      </div>
                      <div className="text-sm grid gap-2">
                        <label>Quantity Unit</label>
                        <select
                          className="outline-none border rounded-md py-2 px-2 font-medium capitalize"
                          name="quantityUnit"
                          value={values.quantityUnit}
                          onChange={(e) => {
                            handleChange(e);
                            newExpenseData(e);
                          }}
                        >
                          <option>units</option>
                          <option>Litres</option>
                          <option>kilograms</option>
                          <option>pounds</option>
                          <option>Galons</option>
                          <option>Metres</option>
                          <option>Set</option>
                        </select>
                      </div>
                    </div>
                    <section className="grid grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2 relative">
                        <label>Total Amount</label>
                        <input
                          type="text"
                          name="total"
                          value={values.total}
                          onChange={(e) => {
                            handleChange(e);
                            newExpenseData(e);
                          }}
                          onBlur={handleBlur}
                          className={`${
                            errors.total && touched.total
                              ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                              : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                          }`}
                        />
                        {errors.total && touched.total && (
                          <ValidateForm error={errors.total} />
                        )}
                      </div>
                      <DatePicker
                        label="Expense Date"
                        name={"expense"}
                        date={values.expense}
                        onChange={(e) => {
                          handleChange(e);
                          newExpenseData(e);
                        }}
                      />
                    </section>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2">
                        <label>Type</label>
                        <input
                          name="type"
                          type="text"
                          value={values.type}
                          onChange={(e) => {
                            handleChange(e);
                            newExpenseData(e);
                          }}
                          className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                          placeholder="Type"
                        />
                      </div>
                      <div className="text-sm grid gap-2">
                        <label>Status</label>
                        <select
                          className="outline-none border rounded-md py-2 px-2 font-medium capitalize"
                          name="status"
                          value={values.status}
                          onChange={(e) => {
                            handleChange(e);
                            newExpenseData(e);
                          }}
                        >
                          <option>Delivered</option>
                          <option>Ordered</option>
                          <option>Awaiting Delivery</option>
                          <option>To Order</option>
                        </select>
                      </div>
                    </div>
                    <ToggleInputForm label={"Expense / Item supplier paid"} />
                    <DatePicker
                      label="Payment due on"
                      name={"paymentDue"}
                      date={values.paymentDue}
                      setDate={(e) => {
                        handleChange(e);
                        newExpenseData(e);
                      }}
                    />
                    <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
                      <article
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                        onClick={() => setParts(false)}
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
                        <p className="text-xs">Add expense</p>
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
          <SuccessPrompt
            message="expenses added successfully"
            open={success}
            setOpen={setSuccess}
            setModals={setParts}
          />
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NewPartsAndExpenses;
