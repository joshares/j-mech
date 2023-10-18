import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { IoIosArrowDown } from "react-icons/io";

const MenuItems = ({ data }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="text-[16px] text-[#526484]">
      <li
        className={`font-bold capitalize flex items-center justify-between py-2 mb-2 ml-4 mr-2 px-4 rounded-md hover:bg-[#ebeef2] hover:text-[#0971fe] ${
          subMenuOpen && "bg-[#ebeef2] text-[#0971fe]"
        }`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <div className="flex items-center gap-4 text-2xl font-bold hover:text-[#0971fe]">
          {data.icon}
          <p className="text-[15px]">{data.name}</p>
        </div>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="pl-[4.5em] overflow-hidden grid gap-2"
      >
        {data.subMenus?.map((menu) => (
          <li key={menu.name}>
            <Link
              href={menu.href}
              className={`${router.pathname === menu.href && "text-blue-500"}
              capitalize text-sm font-normal`}
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default MenuItems;
