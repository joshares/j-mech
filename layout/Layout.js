import React, { useState } from "react";
import Link from "next/link";
import {
  RiFileList3Fill,
  RiMoneyPoundCircleFill,
  RiSettings3Fill,
  RiMenuFill,
} from "react-icons/ri";
import {
  BsFillClipboard2CheckFill,
  BsChatDotsFill,
  BsPlusLg,
} from "react-icons/bs";
import NewVehicleForm from "@/components/forms/NewVehicleForm";
import { FaUser, FaUserClock } from "react-icons/fa";
import {
  BiPlus,
  BiUser,
  BiChevronDown,
  BiDoughnutChart,
  BiPulse,
} from "react-icons/bi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { TbMessageDots } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";
import oneMech from "../public/logo-dark.png";
import Image from "next/image";
import NewFeedbackForm from "@/components/forms/NewFeedbackForm";
import { useRouter } from "next/router";
import MenuItems from "@/components/MenuItems";

const menuItems = [
  {
    name: "Job Center",
    icon: <RiFileList3Fill />,
    subMenus: [
      { name: "Jobs / Vehicles", href: "/jobs" },
      { name: "Pending Tasks", href: "/pendingTasks" },
      { name: "Expected Parts", href: "/expectedParts" },
      { name: "Unpaid Parts", href: "/unpaidParts" },
      { name: "Insurance Co.", href: "/insurance" },
    ],
  },
  {
    name: "Accounting",
    icon: <RiMoneyPoundCircleFill />,
    subMenus: [
      { name: "Quotes", href: "/quotes" },
      { name: "Invoices", href: "/invoices" },
      { name: "Payments", href: "/payments" },
    ],
  },
  {
    name: "Inventory",
    icon: <BsFillClipboard2CheckFill />,
    subMenus: [
      { name: "Inventory List", href: "/inventoryList" },
      { name: "Receivables", href: "/receivables" },
      { name: "Issueables", href: "/issueables" },
      { name: "Suppliers", href: "/suppliers" },
    ],
  },
];

const Layout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const toggleShowProfile = () => {
    if (showProfile) setShowProfile(false);
  };
  const router = useRouter();

  return (
    <main className="flex relative" onClick={toggleShowProfile}>
      {activeMenu && (
        <div
          className="fixed z-20 inset-0 bg-[#10192466] transition duration-200s"
          onClick={() => {
            setActiveMenu(false);
          }}
        ></div>
      )}
      {open ? <NewVehicleForm open={open} setOpen={setOpen} /> : null}
      {feedback ? (
        <NewFeedbackForm feedback={feedback} setFeedback={setFeedback} />
      ) : null}
      <div
        className={`scrollbar fixed min-h-screen top-0 left-0 w-72 overflow-auto h-full xl:w-72 xl:translate-x-0 transition-{transform,width} duration-500 linear z-30 bg-white ${
          activeMenu ? "translate-x-0 w-72" : "-translate-x-full"
        } pt-8`}
      >
        <div className="mb-8 text-2xl font-extrabold px-8 flex justify-between items-center text-[#526484]">
          <Link href={"/overview"}>
            <Image src={oneMech} alt="oneMech" className="w-[3.5em] my-auto" />
          </Link>
          {activeMenu && (
            <HiArrowNarrowLeft
              onClick={() => {
                setActiveMenu(false);
              }}
              className="cursor-pointer"
            />
          )}
        </div>
        <div className="uppercase font-semibold text-[15px] mb-6 text-[#526484]">
          <div className="uppercase font-medium text-xs mb-3 px-8  tracking-wider">
            Overview
          </div>
          <div>
            <Link
              href={"/overview"}
              className={`${
                router.pathname === `${"/overview"}` &&
                "text-blue-500 bg-[#ebeef2]"
              }
              font-bold capitalize flex items-center gap-4 py-2 mb-2 ml-4 mr-2 px-4  rounded-md hover:bg-[#ebeef2] hover:text-[#0971fe]`}
            >
              <div className="text-2xl">
                <BiPulse />
              </div>
              <div className="text-md font-bold">Overview</div>
            </Link>
          </div>
        </div>
        <div className="uppercase font-semibold text-[15px] mb-6 text-[#526484]">
          <div className="uppercase font-bold text-xs mb-3 px-8 tracking-wider">
            Application
          </div>
          <div>
            <Link
              href={"/clients"}
              className={`${
                router.pathname === `${"/clients"}` &&
                "text-blue-500 bg-[#ebeef2]"
              }
              font-bold capitalize flex items-center gap-4 py-3 mb-2 ml-4 mr-2 px-4  rounded-md hover:bg-[#ebeef2] hover:text-[#0971fe]`}
            >
              <div className="text-2xl">
                <FaUser />
              </div>
              <div className="text-md font-bold">Clients</div>
            </Link>
            {menuItems?.map((menu, index) => (
              <div key={index + 1} className="flex flex-col gap-1">
                <MenuItems data={menu} />
              </div>
            ))}
            <Link
              href={"/marketing"}
              className={`${
                router.pathname === `${"/marketing"}` &&
                "text-blue-500 bg-[#ebeef2]"
              }
              font-bold capitalize flex items-center gap-4 py-3 mb-2 ml-4 mr-2 px-4  rounded-md hover:bg-[#ebeef2] hover:text-[#0971fe]`}
            >
              <div className="text-2xl">
                <BsChatDotsFill />
              </div>
              <div className="text-md font-bold">Marketing</div>
            </Link>
          </div>
        </div>
        <div className="uppercase font-semibold text-[15px] mb-4 text-[#526484]">
          <div className="uppercase font-bold text-xs mb-3 px-8 tracking-wider">
            Management
          </div>
          <div>
            <Link
              href={"/teamMembers"}
              className={`${
                router.pathname === `${"/teamMembers"}` &&
                "text-blue-500 bg-[#ebeef2]"
              }
              font-bold capitalize flex items-center gap-4 py-3 mb-2 ml-4 mr-2 px-4  rounded-md hover:bg-[#ebeef2] hover:text-[#0971fe]`}
            >
              <div className="text-2xl">
                <FaUserClock />
              </div>
              <div className="text-md font-bold">Team Members</div>
            </Link>
          </div>
          <div>
            <Link
              href={"/settings/personal"}
              className={`${
                router.pathname === `${"/settings"}` &&
                "text-blue-500 bg-[#ebeef2]"
              }
              font-bold capitalize flex items-center gap-4 py-3 mb-2 ml-4 mr-2 px-4  rounded-md hover:bg-[#ebeef2] hover:text-[#0971fe]`}
            >
              <div className="text-2xl">
                <RiSettings3Fill />
              </div>
              <div className="text-md font-bold">Settings</div>
            </Link>
          </div>
        </div>
      </div>
      <div className=" xl:ml-72 ml-0 duration-300 linear w-full">
        <div className="h-16 w-full fixed z-20 bg-white flex items-center shadow-md">
          <div className="flex w-full justify-between items-center pr-8">
            <div className="flex gap-4 items-center xl:hidden pl-8">
              <div className="text-xl">
                <RiMenuFill
                  onClick={() => {
                    setActiveMenu(true);
                  }}
                  className="cursor-pointer"
                />
              </div>

              <Image src={oneMech} alt="oneMech" className="w-[5em]" />
            </div>
            <div className="xl:mr-[18rem] ml-auto flex items-center gap-6 cursor-pointer relative">
              <div
                className="hidden sm:flex items-center gap-2 bg-[#0971fe] py-1.5 px-5 rounded-sm text-xs text-white cursor-pointer font-bold"
                onClick={() => setOpen(true)}
              >
                <BiPlus />
                <span>New Vehicle</span>
              </div>
              <div onClick={() => setOpen(true)}>
                <BsPlusLg className="block sm:hidden p-2 text-3xl bg-[#0971fe] rounded-full text-white" />
              </div>
              <div
                className="flex items-center gap-2"
                onClick={() => setShowProfile(!showProfile)}
              >
                <BiUser className="p-2 text-3xl bg-[#0971fe] rounded-full text-white" />
                <div className="font-bold hidden sm:grid">
                  <p className="text-green-400 text-xs">Owner</p>
                  <div className="flex items-center gap-1">
                    <h3 className="text-xs text-[#364a63]">Emmanuel Johnson</h3>
                    <BiChevronDown />
                  </div>
                </div>
              </div>
              {showProfile && (
                <div className="bg-white absolute top-12 w-[19em] h-[17em] rounded-md shadow-lg right-0 grid">
                  <div className="flex items-center gap-4 bg-gray-100 px-6">
                    <p className="p-2.5 bg-[#0971fe] rounded-full text-white">
                      MJ
                    </p>
                    <div>
                      <h2 className="text-sm text-[#526484]">
                        Mr. Emmanuel Johnson
                      </h2>
                      <p className="text-xs">+2348167821219</p>
                    </div>
                  </div>
                  <div className="px-6 grid border border-transparent border-y-gray-200">
                    <Link
                      href={"/settings/personal"}
                      className="mt-2 text-sm flex items-center text-[#526484] gap-2"
                    >
                      <CiSettings className="text-lg" />
                      <p>Account Setting</p>
                    </Link>
                    <div
                      className="mt-2 text-sm flex items-center text-[#526484] gap-2"
                      onClick={() => setFeedback(true)}
                    >
                      <TbMessageDots className="text-lg" />
                      <p>Feedback</p>
                    </div>
                    <Link
                      href={"/"}
                      className="mt-2 text-sm flex items-center text-[#526484] gap-2"
                    >
                      <BiDoughnutChart className="text-lg" />
                      <p>Help Center</p>
                    </Link>
                  </div>
                  <Link
                    href={"/"}
                    className="px-6 my-auto text-sm flex items-center text-[#526484] gap-2"
                  >
                    <HiOutlineLogout className="text-lg" />
                    <p>Sign Out</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="sm:px-8 py-8 min-h-screen bg-[#f5f6fa] mt-16 relative">
          {children}
        </div>
        <div className="px-8 text-gray-400 h-16 text-sm">
          © 2023 One-Mech • All Rights Reserved.
        </div>
      </div>
    </main>
  );
};

export default Layout;
