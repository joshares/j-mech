import React,{useState} from "react";
import Settings from ".";
import { CgMenuRight } from "react-icons/cg";

const SystemSettings = () => {
    const [activeSubmenu, setActiveSubmenu] = useState(false);
  return (
    <Settings activeSubmenu={activeSubmenu} setActiveSubmenu={setActiveSubmenu}>
      <div className="px-10">
        <section className="pt-16 flex justify-between items-center">
          <div>
            <h3 className="text-xl lg:text-[1.6rem] font-bold mb-2 lg:mb-5">
              System Settings
            </h3>
            <p className="text-sm">Manage system settings and API keys.</p>
          </div>
          <div className="lg:hidden text-2xl cursor-pointer">
            <CgMenuRight onClick={() => setActiveSubmenu(true)} />
          </div>
        </section>
        <form className="w-[95%] lg:w-[65%] grid gap-4 mt-5 lg:mt-8 text-sm">
          <div className="grid gap-2">
            <label className="font-medium">System Name</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <hr />
          <p className="text-sm">Africa`s Talking API Keys</p>
          <div className="grid gap-2">
            <label className="font-medium">Username</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-medium">API Key</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Sender ID</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <hr />
          <p className="text-sm">SMTP Settings</p>
          <div className="grid gap-2">
            <label className="font-medium">Username</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Send Email as</label>
            <input
              type="email"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Host</label>
            <input
              type="email"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Password</label>
            <input
              type="password"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Port</label>
            <input
              type="text"
              className="w-full border outline-none py-2 pl-2 rounded-md"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Encryption</label>
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

export default SystemSettings;
