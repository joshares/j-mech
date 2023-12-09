import { Fragment, use, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdCancel, MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import DatePicker from "../DatePicker";
import { useFormContext } from "@/context/form_context";
import { useFormik } from "formik";
import { newInvoiceSchema } from "@/schemas";
import ValidateForm from "../ValidateForm";
import SuccessPrompt from "../SuccessPrompt";
import NewInvoiceInputs from "./NewInvoiceInputs";

const NewInvoiceForm = ({ invoice, setInvoice }) => {
  const cancelButtonRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [inputArray, setInputArray] = useState([{ id: 1 }]);
  const [taxRate, setTaxRate] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totals, setTotals] = useState(0);
  const [data, setData] = useState([
    {
      itemDesc: "",
      quantity: 1,
      unitCost: 0,
      tax: 0,
      total: 0,
    },
  ]);

  const addItem = () => {
    return data.push({
      itemDesc: "",
      quantity: 1,
      unitCost: 0,
      tax: 0,
      total: 0,
    });
  };

  const closeItem = (i) => {
    const updateData = [...data];
    updateData.splice(i, 1);
    setData(updateData);
  };

  const handleItemChange = (index, property, value) => {
    const newData = [...data]; // Create a copy of the data array
    newData[index][property] = value; // Update the property of the specified item
    setData(newData); // Update the state with the modified data
  };

  const recalculateTotal = (index) => {
    const item = data[index];
    const tax = item.quantity * item.unitCost * (item.tax / 100);
    const total = item.quantity * item.unitCost + tax;
    handleItemChange(index, "total", total);
  };

  //function to calculate all the totals
  const calculateTotalSum = () => {
    return data.reduce((acc, item) => acc + item.total, 0);
  };

  // Function to calculate the sum of all taxes
  const calculateTaxSum = () => {
    return data.reduce(
      (acc, item) => acc + item.quantity * item.unitCost * (item.tax / 100),
      0
    );
  };

  const addInput = () => {
    const newArray = { id: Date.now() };
    setInputArray([...inputArray, newArray]);
  };

  const {
    invoiceForm: {
      job,
      itemDesc,
      quantity,
      unitCost,
      tax,
      total,
      notes,
      invoiceDate,
      paymentDate,
      paymentDetails,
    },
    newInvoiceData,
    addNewInvoice,
  } = useFormContext();

  const onSubmit = async (values, actions) => {
    addNewInvoice();
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
      itemDesc: itemDesc,
      quantity: quantity,
      unitCost: unitCost,
      tax: tax,
      total: total,
      notes: notes,
      invoiceDate: invoiceDate,
      paymentDate: paymentDate,
      paymentDetails: paymentDetails,
    },
    validationSchema: newInvoiceSchema,
    onSubmit,
  });

  return (
    <Transition.Root show={invoice} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setInvoice}
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
                  <div className="pb-4 px-4 border border-transparent border-b-[#8094ae] flex justify-between items-center text-xl">
                    <h3>Create Invoice</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setInvoice(false)}
                    />
                  </div>
                  <p className="text-xs font-semibold mt-6 normal-case px-6">
                    Create an invoice
                  </p>
                  <form
                    className="mt-3 grid gap-8 p-4 px-6 "
                    onSubmit={handleSubmit}
                  >
                    <div className="text-sm grid gap-2 relative">
                      <label>Select Job</label>
                      <select
                        name="job"
                        value={values.job}
                        onChange={(e) => {
                          handleChange(e);
                          newInvoiceData(e);
                        }}
                        onBlur={handleBlur}
                        className={`${
                          errors.job && touched.job
                            ? "border border-red-800 outline-none  text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                            : "outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
                        }`}
                      >
                        <option>Select Job</option>
                        <option>All clients</option>
                      </select>
                      {errors.job && touched.job && (
                        <ValidateForm error={errors.job} />
                      )}
                    </div>
                    <hr />
                    {data.map((d, i) => {
                      return (
                        <main key={i}>
                          <section className="grid grid-cols-[35%,5%,15%,15%,15%,5%] gap-4 items-end">
                            <div className="text-sm grid gap-2  relative">
                              <label>Item Description</label>
                              <input
                                name="itemDesc"
                                type="text"
                                value={d.itemDesc}
                                onChange={(e) =>
                                  handleItemChange(
                                    i,
                                    "itemDesc",
                                    e.target.value
                                  )
                                }
                                // value={values.itemDesc}
                                // onChange={(e) => {
                                //   handleChange(e);
                                //   newQuoteData(e);
                                // }}
                                // onBlur={handleBlur}
                                // className={`${
                                //   errors.itemDesc && touched.itemDesc
                                //     ? "border border-red-800 w-full outline-none  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                                //     : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                                // }`}
                                className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                                placeholder="Item Description"
                              />
                              {/* {errors.itemDesc && touched.itemDesc && (
                                <ValidateForm error={errors.itemDesc} />
                              )} */}
                            </div>
                            <div className="text-sm grid gap-2">
                              <label>Qty</label>
                              <input
                                name="quantity"
                                type="text"
                                value={d.quantity}
                                onChange={(e) => {
                                  handleItemChange(
                                    i,
                                    "quantity",
                                    e.target.value
                                  );
                                  recalculateTotal(i);
                                }}
                                // value={values.quantity}
                                // onChange={(e) => {
                                //   handleChange(e);
                                //   newQuoteData(e);
                                // }}
                                className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                                placeholder="1"
                              />
                            </div>
                            <div className="text-sm grid gap-2">
                              <label>Unit Cost ( N )</label>
                              <input
                                name="unitCost"
                                type="text"
                                value={d.unitCost}
                                onChange={(e) => {
                                  handleItemChange(
                                    i,
                                    "unitCost",
                                    e.target.value
                                  );
                                  recalculateTotal(i);
                                }}
                                // value={values.unitCost}
                                // onChange={(e) => {
                                //   handleChange(e);
                                //   newQuoteData(e);
                                // }}
                                className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                                placeholder="0.00"
                              />
                            </div>
                            <div className="text-sm grid gap-2">
                              <label>Tax (%)</label>
                              <input
                                name="tax"
                                type="text"
                                value={d.tax}
                                onChange={(e) => {
                                  handleItemChange(i, "tax", e.target.value);
                                  recalculateTotal(i);
                                }}
                                // value={values.tax}
                                // onChange={(e) => {
                                //   handleChange(e);
                                //   newQuoteData(e);
                                // }}
                                className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                                placeholder="Tax (%)"
                              />
                            </div>
                            <div className="text-sm grid gap-2">
                              <label>Total ( N )</label>
                              <input
                                name="total"
                                type="text"
                                value={d.total}
                                // onChange={(e) => {
                                //   handleChange(e);
                                //   newQuoteData(e);
                                // }}
                                className="w-full outline-none border  rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                                placeholder="0.00"
                              />
                            </div>
                            {i !== 0 && (
                              <div
                                onClick={() => closeItem(i)}
                                className="border border-red-600 bg-red-300  rounded-full p-1 w-max h-max mx-auto"
                              >
                                <MdCancel className="text-red-600 mx-auto text-2xl w-max" />
                              </div>
                            )}
                          </section>
                        </main>
                      );
                    })}
                    <section className="flex items-center justify-between gap-4">
                      <button
                        className="flex items-center gap-2 bg-blue-300 hover:bg-blue-500 p-2.5 rounded-md text-sm text-blue-500 hover:text-white cursor-pointer font-bold"
                        onClick={addItem}
                      >
                        <BiPlus />
                        <span>Add Item</span>
                      </button>
                      <div className="w-80 grid gap-2">
                        <div className="flex justify-between">
                          <p>Sub Total:</p>
                          <p className="font-semibold">
                            {calculateTotalSum() - calculateTaxSum()}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p>Tax:</p>
                          <p className="font-semibold">{calculateTaxSum()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between text-md font-semibold">
                          <p>Total:</p>
                          <p className="font-semibold">
                            N{calculateTotalSum()}
                          </p>
                        </div>
                      </div>
                    </section>
                    <hr />
                    <section className="grid grid-cols-2 items-center gap-4">
                      <DatePicker
                        label="Invoice Date"
                        name={"invoiceDate"}
                        date={invoiceDate}
                        setDate={newInvoiceData}
                      />
                      <DatePicker
                        label="Payment Date"
                        name={"paymentDate"}
                        date={paymentDate}
                        setDate={newInvoiceData}
                      />
                    </section>
                    <section className="grid grid-cols-2 items-center gap-4">
                      <div className="text-sm grid gap-2">
                        <label>Notes</label>
                        <textarea
                          name="notes"
                          value={values.notes}
                          onChange={(e) => {
                            handleChange(e);
                            newInvoiceData(e);
                          }}
                          placeholder="Notes"
                          className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        />
                        <p className="text-xs italic text-[#8094ae]">
                          Notes will be printed on the quote.
                        </p>
                      </div>
                      <div className="text-sm grid gap-2">
                        <label>Payment Details</label>
                        <textarea
                          name="paymentDetails"
                          value={values.paymentDetails}
                          onChange={(e) => {
                            handleChange(e);
                            newInvoiceData(e);
                          }}
                          placeholder="Notes"
                          className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        />
                        <p className="text-xs italic text-[#8094ae]">
                          Payment Details will be printed on the quote.
                        </p>
                      </div>
                    </section>
                    <div className="flex mt-auto border py-8 bg-gray-200 justify-end gap-2 px-4">
                      <article
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer"
                        onClick={() => setInvoice(false)}
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
                        <p className="text-xs">Create Invoice</p>
                      </button>
                    </div>
                  </form>
                  <SuccessPrompt
                    message="Invoice created successfully"
                    open={success}
                    setOpen={setSuccess}
                    setModals={setInvoice}
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

export default NewInvoiceForm;
