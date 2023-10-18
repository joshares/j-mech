import React,{useState} from "react";
import ToggleInputForm from "@/components/ToggleInputForm";
import Settings from ".";
import { CgMenuRight } from "react-icons/cg";


const BookingForm = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(false);
  return (
    <Settings activeSubmenu={activeSubmenu} setActiveSubmenu={setActiveSubmenu}>
      <div className="px-10">
        <section className="pt-16 flex justify-between items-center">
          <div>
            <h3 className="text-[1.5rem] font-bold mb-2">Booking Form</h3>
            <p className="text-sm lg:text-md w-[90%] sm:w-full">
              Manage your company booking form here.
            </p>
          </div>
          <div className="lg:hidden text-2xl cursor-pointer">
            <CgMenuRight onClick={() => setActiveSubmenu(true)} />
          </div>
        </section>
        <form className="w-[95%] lg:w-[65%] grid gap-4 mt-8 text-sm">
          <div className="grid gap-2">
            <label className="font-medium">Vehicle booking form</label>
            <select className="w-full border outline-none py-2 pl-2 rounded-md">
              <option>Detailed</option>
            </select>
          </div>
          <ToggleInputForm label="Enable car diagram for marking dents and scratches." />
          <div className="grid gap-2">
            <label className="font-medium">
              Vehicle Booking Form Disclaimer IN
            </label>
            <textarea
              type="number"
              className="w-full border outline-none py-2 pl-2 rounded-md "
            />
            <p className="italic text-xs">
              This disclaimer will be printed on the bottom of the booking form.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="font-medium">
              Vehicle Booking Form Disclaimer OUT
            </label>
            <textarea
              type="number"
              className="w-full border outline-none py-2 pl-2 rounded-md "
            />
            <p className="italic text-xs">
              This disclaimer will be printed on the bottom of the booking form.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Terms and Conditions</label>
            <textarea
              type="number"
              className="w-full border outline-none py-2 pl-2 rounded-md "
            />
            <p className="italic text-xs">
              This disclaimer will be printed on the bottom of the booking form.
            </p>
          </div>
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

export default BookingForm;
