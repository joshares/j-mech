import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel, MdTaskAlt } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useFormContext } from "@/context/form_context";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import ValidateForm from "../ValidateForm";
import { newItemSchema } from "@/schemas";
import SuccessPrompt from "../SuccessPrompt";

const NewItemForm = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const {
    inventoryForm: {
      itemName,
      quantity,
      quantityUnit,
      restock,
      unitCost,
      supplier,
      itemCode,
      shelfNumber,
    },
    newInventoryData,
    addNewInventory,
  } = useFormContext();
  const onSubmit = async (values, actions) => {
    addNewInventory();
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
      itemName: itemName,
      quantity: quantity,
      quantityUnit: quantityUnit,
      restock: restock,
      unitCost: unitCost,
      supplier: supplier,
      itemCode: itemCode,
      shelfNumber: shelfNumber,
    },
    validationSchema: newItemSchema,
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
                  <div className="pb-4 px-4 border border-transparent border-b-gray-300 flex justify-between items-center text-xl">
                    <h3>Create Item</h3>
                    <AiOutlineClose
                      className="text-2xl cursor-pointer text-[#8094ae]"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  <p className="text-xs font-semibold mt-6 normal-case px-4">
                    Add an item
                  </p>
                  <form
                    className="mt-3 grid gap-8 px-4 pb-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="text-sm grid gap-2 relative">
                      <label>Item Name</label>
                      <input
                        name="itemName"
                        type="text"
                        value={values.itemName}
                        onChange={(e) => {
                          handleChange(e);
                          newInventoryData(e);
                        }}
                        onBlur={handleBlur}
                        className={`${
                          errors.itemName && touched.itemName
                            ? "w-full outline-none border  border-red-800 rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                            : "w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        }`}
                        placeholder="Item Name"
                      />
                      {errors.itemName && touched.itemName && (
                        <ValidateForm error={errors.itemName} />
                      )}
                    </div>
                    <section className="grid grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2 relative">
                        <label>Quantity</label>
                        <input
                          name="quantity"
                          type="number"
                          value={values.quantity}
                          onChange={(e) => {
                            handleChange(e);
                            newInventoryData(e);
                          }}
                          onBlur={handleBlur}
                          className={`${
                            errors.quantity && touched.quantity
                              ? "w-full outline-none border  border-red-800 rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
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
                            newInventoryData(e);
                          }}
                        >
                          <option>Units</option>
                          <option>Litres</option>
                          <option>Kilograms</option>
                          <option>Pounds</option>
                          <option>Gallons</option>
                          <option>Meters</option>
                        </select>
                      </div>
                    </section>
                    <div className="text-sm grid gap-2">
                      <label>Restock Quantity</label>
                      <input
                        name="restock"
                        type="number"
                        value={values.restock}
                        onChange={(e) => {
                          handleChange(e);
                          newInventoryData(e);
                        }}
                        className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                        placeholder="Restock Quantity"
                      />
                      <p className="text-xs text-[#8094ae] normal-case italic">
                        Item will show restock if item quantity is below this
                        level.
                      </p>
                    </div>
                    <section className="grid grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2">
                        <label>Unit Cost</label>
                        <input
                          name="unitCost"
                          type="number"
                          value={values.unitCost}
                          onChange={(e) => {
                            handleChange(e);
                            newInventoryData(e);
                          }}
                          className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                          placeholder="0.00"
                        />
                      </div>
                      <div className="text-sm grid gap-2">
                        <label>Select Supplier</label>
                        <select
                          className="outline-none border rounded-md py-2 px-2 font-medium capitalize"
                          name="supplier"
                          value={values.supplier}
                          onChange={(e) => {
                            handleChange(e);
                            newInventoryData(e);
                          }}
                        >
                          <option>Select Supplier</option>
                          <option>Litres</option>
                        </select>
                      </div>
                    </section>
                    <section className="grid grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2">
                        <label>Item Code</label>
                        <input
                          name="itemCode"
                          type="text"
                          value={values.itemCode}
                          onChange={(e) => {
                            handleChange(e);
                            newInventoryData(e);
                          }}
                          className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                          placeholder="Item Code"
                        />
                      </div>
                      <div className="text-sm grid gap-2">
                        <label>Shelf Number</label>
                        <input
                          name="shelfNumber"
                          type="text"
                          value={values.shelfNumber}
                          onChange={(e) => {
                            handleChange(e);
                            newInventoryData(e);
                          }}
                          className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
                          placeholder="Shelf Number"
                        />
                      </div>
                    </section>
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
                        <p className="text-xs">Add Item</p>
                      </button>
                    </div>
                  </form>
                  <SuccessPrompt
                    message="Item added successfully"
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

export default NewItemForm;
