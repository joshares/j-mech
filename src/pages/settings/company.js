import React, { useState } from "react";
import { HiPhoto } from "react-icons/hi2";
import ToggleInputForm from "@/components/ToggleInputForm";
import Settings from ".";
import { CgMenuRight } from "react-icons/cg";

const Company = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(false);
  return (
    <Settings activeSubmenu={activeSubmenu} setActiveSubmenu={setActiveSubmenu}>
      <div className="px-10">
        <section className="pt-16 flex justify-between items-center">
          <div>
            <h3 className="text-[1.6rem] font-bold mb-2">
              Company Information
            </h3>
            <p className="text-sm lg:text-md w-[90%] sm:w-full">
              Basic company information and system preferences.
            </p>
          </div>
          <div className="lg:hidden text-2xl cursor-pointer">
            <CgMenuRight onClick={() => setActiveSubmenu(true)} />
          </div>
        </section>
        <form className="w-[95%] lg:w-[65%] grid gap-4 mt-8 text-sm">
          <div className="grid gap-2">
            <label className="font-medium">Company Name</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="col-span-full">
            <label for="cover-photo" className="block font-medium leading-6">
              Company Logo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <HiPhoto className="text-3xl mx-auto" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    for="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
            <p className="italic text-xs">
              Your logo will be displayed on your invoices and quotes.
            </p>
          </div>

          <div className="grid gap-2">
            <label className="font-medium">Email Address</label>
            <input
              type="email"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Phone Number</label>
            <input
              type="tel"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Address</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Town/City</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Country</label>
            <select className="w-full border outline-none py-2 pl-2 rounded-md">
              <option>Nigerian</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="font-medium">TimeZone</label>
            <select className="w-full border outline-none py-2 pl-2 rounded-md">
              <option>Nigerian</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Currency</label>
            <select className="w-full border outline-none py-2 pl-2 rounded-md">
              <option>Nigerian Naira (NGN)</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="font-medium">KRA PIN</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
            <p className="italic text-xs">
              This printed on invoices and quotes.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="font-medium">VAT Tax (%)</label>
            <input
              type="number"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Payment Details</label>
            <textarea
              type="number"
              className="w-full border outline-none py-2 pl-2 rounded-md "
            />
            <p className="italic text-xs">
              Payment details will be printed on the invoices.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Invoice Disclaimer</label>
            <textarea
              type="number"
              className="w-full border outline-none py-2 pl-2 rounded-md "
            />
            <p className="italic text-xs">
              Payment details will be printed on the invoices.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Quotes Disclaimer</label>
            <textarea
              type="number"
              className="w-full border outline-none py-2 pl-2 rounded-md "
            />
            <p className="italic text-xs">
              Payment details will be printed on the invoices.
            </p>
          </div>
          <ToggleInputForm label="Send SMS to team members when new tasks are created." />
          <ToggleInputForm label="Fix insurance covered repairs." />
          <ToggleInputForm label="Add vehicle parts/expenses to inventory." />
          <ToggleInputForm label="Vehicle tasks should be completed before marking a vehicle as completed." />
          <ToggleInputForm label="Vehicles must be marked as completed before checking out." />
          <ToggleInputForm label="Restrict check out until all parts, expenses, receivables & issuables are cleared." />
          <ToggleInputForm label="Enable client signatures on invoices." />
          <ToggleInputForm label="Enable client signatures on invoices." />
          <div className="flex justify-end">
            <button className="p-3 bg-blue-500 text-white rounded-md text-md font-bold ml-auto">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Settings>
  );
};

export default Company;
