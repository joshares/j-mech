import React, { useState } from "react";
import { BiShow } from "react-icons/bi";
import Settings from ".";
import { CgMenuRight } from "react-icons/cg";

const SecuritySettings = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(false);
  return (
    <Settings activeSubmenu={activeSubmenu} setActiveSubmenu={setActiveSubmenu}>
      <div className="px-10">
        <section className="pt-16 flex justify-between items-center">
          <div>
            <h3 className="text-[1.6rem] font-bold mb-2">Security Settings</h3>
            <p className="text-sm">
              Set a unique password to protect your account.
            </p>
          </div>
          <div className="lg:hidden text-2xl cursor-pointer">
            <CgMenuRight onClick={() => setActiveSubmenu(true)} />
          </div>
        </section>
        <form className="w-[95%] lg:w-[65%] grid gap-5 mt-8 text-sm">
          <div className="grid gap-2">
            <label className="font-medium">Current Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full border outline-none py-3 pl-2 rounded-md placeholder:text-sm"
              />
              <BiShow className="absolute top-3 right-2 text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="font-medium">New Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="New Password"
                className="w-full border outline-none py-3 pl-2 rounded-md placeholder:text-sm"
              />
              <BiShow className="absolute top-3 right-2 text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Confirm New Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full border outline-none py-3 pl-2 rounded-md placeholder:text-sm"
              />
              <BiShow className="absolute top-3 right-2 text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="p-3 bg-blue-500 text-white rounded-md text-md font-bold ml-auto">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </Settings>
  );
};

export default SecuritySettings;
