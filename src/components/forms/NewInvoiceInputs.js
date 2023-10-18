import React from "react";
import ValidateForm from "../ValidateForm";
import { useFormik } from "formik";
import { useFormContext } from "@/context/form_context";
import { newInvoiceSchema } from "@/schemas";
import { MdCancel } from "react-icons/md";

export default function NewInvoiceInputs({ setInputArray, input, inputArray }) {
  const id = input.id;
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

  const reduceArray = (id) => {
    const newArray = inputArray.filter((array) => array.id !== id);
    setInputArray(newArray);
    console.log(inputArray);
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
      itemDesc: itemDesc,
    },
    validationSchema: newInvoiceSchema,
    onSubmit,
  });

  return (
    <section className="grid grid-cols-[35%,5%,15%,15%,15%,5%] gap-4 items-end">
      <div className="text-sm grid gap-2 relative">
        <label>Item Description</label>
        <input
          name="itemDesc"
          type="text"
          value={values.itemDesc}
          onChange={(e) => {
            handleChange(e);
            newInvoiceData(e);
          }}
          onBlur={handleBlur}
          className={`${
            errors.itemDesc && touched.itemDesc
              ? "border border-red-800 outline-none  text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
              : "outline-none border text-[#8094ae] rounded-md py-2 px-2 font-medium capitalize"
          }`}
          placeholder="Item Description"
        />
        {errors.itemDesc && touched.itemDesc && (
          <ValidateForm error={errors.itemDesc} />
        )}
      </div>
      <div className="text-sm grid gap-2">
        <label>Qty</label>
        <input
          name="quantity"
          type="text"
          value={quantity}
          onChange={(e) => {
            handleChange(e);
            newInvoiceData(e);
          }}
          className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
          placeholder="1"
        />
      </div>
      <div className="text-sm grid gap-2">
        <label>Unit Cost ( N )</label>
        <input
          name="unitCost"
          type="text"
          value={unitCost}
          onChange={(e) => {
            handleChange(e);
            newInvoiceData(e);
          }}
          className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
          placeholder="0.00"
        />
      </div>
      <div className="text-sm grid gap-2">
        <label>Tax (%)</label>
        <input
          name="tax"
          type="text"
          value={tax}
          onChange={(e) => {
            handleChange(e);
            newInvoiceData(e);
          }}
          className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
          placeholder="Tax (%)"
        />
      </div>
      <div className="text-sm grid gap-2">
        <label>Total ( N )</label>
        <input
          name="total"
          type="text"
          value={total}
          onChange={(e) => {
            handleChange(e);
            newInvoiceData(e);
          }}
          className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
          placeholder="0.00"
        />
      </div>
      <MdCancel
        className="text-red-600 bg-red-200 rounded-full p-2 border border-red-500 text-4xl"
        onClick={() => reduceArray(id)}
      />
    </section>
  );
}
