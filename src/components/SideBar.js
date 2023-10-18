import React from "react";
import { BiPulse } from "react-icons/bi";
import { BsFillClipboard2CheckFill, BsChatDotsFill } from "react-icons/bs";
import {
  RiFileList3Fill,
  RiMoneyPoundCircleFill,
  RiSettings3Fill,
} from "react-icons/ri";
import Link from "next/link";
import { FaUser, FaUserClock } from "react-icons/fa";

const menuItems = [
  {
    title: "Overview",
    links: [
      {
        name: "Overview",
        icon: <BiPulse />,
        href: "/overview",
      },
    ],
  },

  {
    title: "Application",
    links: [
      {
        name: "Clients",
        icon: <FaUser />,
        href: "/clients",
      },
      {
        name: "Job Center",
        icon: <RiFileList3Fill />,
        href: "#",
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
        href: "#",
        subMenus: [
          { name: "Quotes", href: "/quotes" },
          { name: "Invoices", href: "/invoices" },
          { name: "Payments", href: "/payments" },
        ],
      },
      {
        name: "Inventory",
        icon: <BsFillClipboard2CheckFill />,
        href: "#",
        subMenus: [
          { name: "Inventory List", href: "/inventoryList" },
          { name: "Receivables", href: "/receivables" },
          { name: "Issueables", href: "/issueables" },
          { name: "Suppliers", href: "/suppliers" },
        ],
      },
      {
        name: "Marketing",
        icon: <BsChatDotsFill />,
        href: "/marketing",
      },
    ],
  },
  {
    title: "Management",
    links: [
      {
        name: "Team Members",
        icon: <FaUserClock />,
        href: "/teamMembers",
      },
      {
        name: "Settings",
        icon: <RiSettings3Fill />,
        href: "/settings/personal",
      },
    ],
  },
];
const SingleLink = ({ href, toggleDropdown, name, icon }) => {
  return (
    <Link
      href={href}
      className="font-medium capitalize flex items-center gap-4 py-3 mx-4 px-4  rounded-md hover:bg-gray-200 hover:text-[#0971fe]"
      onClick={toggleDropdown}
    >
      <div className="text-2xl">{icon}</div>
      <div className="text-md font-bold">{name}</div>
    </Link>
  );
};
const SubmenuDropdown = ({ href, name, expand }) => {
  return (
    <ul
      className={`sub-menu pl-[5.1em] max-h-0 overflow-hidden transition-[max-height] duration-200s ease-in grid ${
        expand ? "max-h-[200px]" : null
      }`}
    >
      <Link href={href}>
        <button
          className={` my-1.5 text-sm font-normal inline-block transition-opacity "opacity-100" duration-200s ease-in`}
        >
          {name}
        </button>
      </Link>
    </ul>
  );
};
const SideBar = ({toggleDropdown,expand}) => {
  return (
    <>
      <div className="uppercase font-semibold text-sm mb-9 text-[#6e82a5]">
        <div className="uppercase font-medium text-md mb-3 px-8">Overview</div>
        <div>
          <Link
            href="/overview"
            className="font-medium capitalize flex items-center gap-4 py-3 mx-4 px-4  rounded-md hover:bg-gray-200 hover:text-[#0971fe]"
            // onClick={toggleDropdown}
          >
            <div className="text-2xl">
              <BiPulse />
            </div>
            <div className="text-md font-bold">Overview</div>
          </Link>
        </div>
      </div>
      <div className="uppercase font-semibold text-sm mb-9 text-[#6e82a5]">
        <div className="uppercase font-medium text-md mb-3 px-8">
          Application
        </div>
        <div>
          <Link
            href="/clients"
            className="font-medium capitalize flex items-center gap-4 py-3 mx-4 px-4  rounded-md hover:bg-gray-200 hover:text-[#0971fe]"
            // onClick={toggleDropdown}
          >
            <div className="text-2xl">
              <FaUser />
            </div>
            <div className="text-md font-bold">Clients</div>
          </Link>
        </div>
        <div>
          <div
            className="font-medium capitalize flex items-center gap-4 py-3 mx-4 px-4  rounded-md hover:bg-gray-200 hover:text-[#0971fe]"
            onClick={() => toggleDropdown}
          >
            <div className="text-2xl">
              <RiFileList3Fill />
            </div>
            <div className="text-md font-bold">Job Center</div>
          </div>
          <ul
            className={`sub-menu pl-[5.1em] max-h-0 overflow-hidden transition-[max-height] duration-200s ease-in grid ${
              expand ? "max-h-[200px]" : null
            }`}
          >
            <Link href="/jobs">
              <button
                className={` my-1.5 text-sm font-normal inline-block transition-opacity "opacity-100" duration-200s ease-in`}
              >
                Jobs / Vehicles
              </button>
            </Link>
            <Link href="/pendingTasks">
              <button
                className={` my-1.5 text-sm font-normal inline-block transition-opacity "opacity-100" duration-200s ease-in`}
              >
                Pending Tasks
              </button>
            </Link>
            <Link href="/expectedParts">
              <button
                className={` my-1.5 text-sm font-normal inline-block transition-opacity "opacity-100" duration-200s ease-in`}
              >
                Expected Parts
              </button>
            </Link>
            <Link href="/unpaidParts">
              <button
                className={` my-1.5 text-sm font-normal inline-block transition-opacity "opacity-100" duration-200s ease-in`}
              >
                Unpaid Parts
              </button>
            </Link>
            <Link href="/insurance">
              <button
                className={` my-1.5 text-sm font-normal inline-block transition-opacity "opacity-100" duration-200s ease-in`}
              >
                Insurance Co.
              </button>
            </Link>
          </ul>
        </div>
        <div>
          <div
            className="font-medium capitalize flex items-center gap-4 py-3 mx-4 px-4  rounded-md hover:bg-gray-200 hover:text-[#0971fe]"
            onClick={toggleDropdown}
          >
            <div className="text-2xl">
              <RiMoneyPoundCircleFill/>
            </div>
            <div className="text-md font-bold">Accounting</div>
          </div>
          <ul
            className={`sub-menu pl-[5.1em] max-h-0 overflow-hidden transition-[max-height] duration-200s ease-in grid ${
              expand ? "max-h-[200px]" : null
            }`}
          >
            <Link href="/jobs">
              <button
                className={` my-1.5 text-sm font-normal inline-block transition-opacity "opacity-100" duration-200s ease-in`}
              >
                Jobs / Vehicles
              </button>
            </Link>
            <Link href="/pendingTasks">
              <button
                className={` my-1.5 text-sm font-normal inline-block transition-opacity "opacity-100" duration-200s ease-in`}
              >
                Pending Tasks
              </button>
            </Link>
            <Link href="/expectedParts">
              <button
                className={` my-1.5 text-sm font-normal inline-block transition-opacity "opacity-100" duration-200s ease-in`}
              >
                Expected Parts
              </button>
            </Link>
            <Link href="/unpaidParts">
              <button
                className={` my-1.5 text-sm font-normal inline-block transition-opacity "opacity-100" duration-200s ease-in`}
              >
                Unpaid Parts
              </button>
            </Link>
            <Link href="/insurance">
              <button
                className={` my-1.5 text-sm font-normal inline-block transition-opacity "opacity-100" duration-200s ease-in`}
              >
                Insurance Co.
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
