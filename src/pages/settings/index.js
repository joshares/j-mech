import { useState } from "react";
import Layout from "../../../layout/Layout";
import {
  BsFilePersonFill,
  BsChevronRight,
  BsBuildingFill,
  BsCalendarWeek,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { IoMdLock } from "react-icons/io";
import { BiPulse } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";

const Settings = ({ children, activeSubmenu, setActiveSubmenu }) => {
  const router = useRouter();
  return (
    <Layout>
      {activeSubmenu && (
        <div
          className="fixed z-[18] inset-0 bg-[#10192466] lg:bg-transparent transition duration-200s"
          onClick={() => {
            setActiveSubmenu(false);
          }}
        ></div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-[18rem,1fr] bg-white min-h-[90vh] pb-8 text-[#364a63] relative">
        <div
          className={`fixed lg:relative min-h-screen top-0 left-0 w-72 overflow-auto h-full lg:w-72 lg:translate-x-0 transition-{transform,width} duration-500 linear z-30 lg:z-[19] bg-white ${
            activeSubmenu ? "translate-x-0 w-72" : "-translate-x-full"
          } pt-8 border border-r-gray-200 border-transparent`}
        >
          <div className="flex items-center gap-2 px-6 py-7 border border-transparent border-b-gray-200">
            <p className="p-2.5 bg-blue-500 rounded-full text-white">ME</p>
            <div>
              <h2 className="font-medium text-black">Mr. Emmanuel Afolabi</h2>
              <p className="text-xs">+2348167821219</p>
            </div>
          </div>
          <ul className="px-6 font-medium text-[#526484] text-sm">
            <li className="my-8 flex items-center justify-between cursor-pointer hover:text-blue-500">
              <Link
                className={`${
                  router.pathname === `${"/settings/personal"}` &&
                  "text-blue-500"
                } flex items-center gap-2`}
                href={"personal"}
              >
                <BsFilePersonFill />
                <p>Personal Information</p>
              </Link>
              <BsChevronRight />
            </li>
            <li className="my-8 flex items-center justify-between cursor-pointer hover:text-blue-500">
              <Link
                className={`${
                  router.pathname === `${"/settings/company"}` &&
                  "text-blue-500"
                } flex items-center gap-2`}
                href={"company"}
              >
                <BsBuildingFill />
                <p>Company Information</p>
              </Link>
              <BsChevronRight />
            </li>
            <li className="my-8 flex items-center justify-between cursor-pointer hover:text-blue-500">
              <Link
                className={`${
                  router.pathname === `${"/settings/bookingForm"}` &&
                  "text-blue-500"
                } flex items-center gap-2`}
                href={"bookingForm"}
              >
                <BsCalendarWeek />
                <p>Booking Form</p>
              </Link>
              <BsChevronRight />
            </li>
            <li className="my-8 flex items-center justify-between cursor-pointer hover:text-blue-500">
              <Link
                className={`${
                  router.pathname === `${"/"}` && "text-blue-500"
                } flex items-center gap-2`}
                href={"/bookingParts"}
              >
                <BsFillCheckCircleFill />
                <p>Booking Parts List</p>
              </Link>
              <BsChevronRight />
            </li>
            <li className="my-8 flex items-center justify-between cursor-pointer hover:text-blue-500">
              <Link
                className={`${
                  router.pathname === `${"/settings/systemSettings"}` &&
                  "text-blue-500"
                } flex items-center gap-2`}
                href={"systemSettings"}
              >
                <BiPulse className="bg-[#8094ae] p-0.5 rounded-full text-white text-lg" />
                <p>System Settings</p>
              </Link>
              <BsChevronRight />
            </li>
            <li className="my-8 flex items-center justify-between">
              <Link
                className={`${
                  router.pathname === `${"/settings/securitySettings"}` &&
                  "text-blue-500"
                } flex items-center gap-2`}
                href={"securitySettings"}
              >
                <IoMdLock />
                <p>Security Settings</p>
              </Link>
              <BsChevronRight />
            </li>
          </ul>
        </div>
        <div className=" ml-0 duration-300 linear w-full relative">
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
