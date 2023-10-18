import React,{useState} from "react";
import Settings from ".";
import { CgMenuRight } from "react-icons/cg";

const Personal = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(false);
  return (
    <Settings activeSubmenu={activeSubmenu} setActiveSubmenu={setActiveSubmenu}>
      <div className="px-10">
        <section className="pt-20 flex justify-between items-center">
          <div>
            <h3 className="text-lg lg:text-[1.6rem] font-bold mb-2">
              Personal Information
            </h3>
            <p className="text-sm lg:text-md w-[90%] sm:w-full">
              Basic info, like your name and email, that you use on 1Mech.
            </p>
          </div>
          <div className="lg:hidden text-2xl cursor-pointer">
            <CgMenuRight onClick={() => setActiveSubmenu(true)} />
          </div>
        </section>
        <form className="w-[95%] lg:w-[65%] grid gap-4 mt-8 text-sm">
          <div className="grid gap-2">
            <label className="font-medium">First Name</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Last Name</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
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

export default Personal;
