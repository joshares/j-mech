import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { BsThreeDots } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import { RiAddCircleLine } from "react-icons/ri";
import NewItemForm from "@/components/forms/NewItemForm";
import { CgMenuRight } from "react-icons/cg";
import { useFormContext } from "@/context/form_context";
import MoreButton from "@/components/MoreButton";
import { HiOutlinePencil } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { BsTrash, BsEye } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdTaskAlt } from "react-icons/md";

const InventoryList = () => {
  const [open, setOpen] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const { inventoryList } = useFormContext();
  const [show, setShow] = useState(false);
  const extraInfo = [
    { name: "Edit Details", icon: <HiOutlinePencil /> },
    { name: "Issue", icon: <MdTaskAlt /> },
    { name: "Add Stock", icon: <RiAddCircleLine /> },
    {
      name: "View Report",
      icon: <TbReportAnalytics />,
    },
    { name: "Delete Item", icon: <BsTrash /> },
  ];
  const handleClick = (index) => {
    // Perform different setState functions based on index
    if (index === 0) {
      setOpen(true);
    }
  };

  return (
    <Layout>
      {open && <NewItemForm open={open} setOpen={setOpen} />}
      <section className="flex justify-between items-center mb-6 px-6 sm:px-0">
        <div>
          <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
            Inventory
          </h1>
          <p className="text-sm text-[#8094ae] ">
            Create and manage your inventory here.
          </p>
        </div>
        <button
          className="sm:flex hidden items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold ml-auto"
          onClick={() => setOpen(true)}
        >
          <BiPlus />
          <span>Create Item</span>
        </button>
        <div
          className="sm:hidden text-2xl cursor-pointer"
          onClick={() => setMoreInfo(!moreInfo)}
        >
          <CgMenuRight />
        </div>
      </section>
      <div className="bg-white min-h-[85vh] p-6 relative">
        <div
          className={`px-6 flex sm:hidden items-center justify-between transition-all duration-300 linear bg-white absolute left-0 top-0 w-full shadow-md ${
            moreInfo ? " h-20 opacity-100" : " h-0 opacity-0"
          }`}
        >
          {moreInfo && (
            <button
              className="flex sm:hidden items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold"
              onClick={() => {
                setOpen(true);
              }}
            >
              <BiPlus />
              <span>Create Item</span>
            </button>
          )}
        </div>
        <div className="flex justify-between mb-4">
          <input
            className="placeholder:text-xs border pl-2 py-1 rounded-sm"
            placeholder="Type in to Search"
          />
          <div className="flex items-center gap-2">
            <p className="text-sm hidden sm:block">Show</p>
            <select className="outline-none border rounded-md text-xs px-1">
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
        <div className="border rounded-md min-h-[30vh] overflow-x-auto ">
          <main className="font-semibold text-[#8094ae] text-sm grid grid-cols-[3em,8em,10em,7em,8em,8em,3em] md:grid-cols-[3em,8em,10em,7em,5em,8em,3em] lg:grid-cols-[3%,20%,20%,17%,12%,15%,5%] p-2.5 border border-transparent border-b-gray-200 gap-2">
            <div>#</div>
            <div>Item/Shelf No.</div>
            <div className="opacity-0 text-xs sm:opacity-100 sm:text-sm">
              Quantity/Item Code
            </div>
            <div className="opacity-0 sm:opacity-100">Unit Cost</div>
            <div className="hidden sm:block">Supplier</div>
            <div className="opacity-0 sm:opacity-100">Status</div>
            <div></div>
          </main>
          <div className="font-medium text-[#364a63] text-sm grid grid-cols-[3em,8em,10em,7em,8em,8em,3em] md:grid-cols-[3em,8em,10em,7em,5em,8em,3em] lg:grid-cols-[3%,20%,20%,17%,12%,15%,5%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="grid">
              <h2 className="font-medium">Brake pad</h2>
              <p className="text-xs text-[#8094ae]">#002</p>
            </div>
            <div>
              <h3 className="font-medium">97.00</h3>
              <p className="text-xs text-[#8094ae]">2 years</p>
            </div>
            <div>
              <p className="font-medium">N25,000.00</p>
            </div>
            <div className="hidden sm:block">
              <p>--|--</p>
            </div>
            <div className="py-1.5 px-2.5 text-[#1ee0ac] bg-[#1ee0ac26] rounded-2xl flex items-center gap-1 mr-auto">
              <RxDotFilled className="text-lg" />
              <p className="text-xs font-bold">In Stock</p>
            </div>
            <div>
              <BsThreeDots
                className="cursor-pointer text-xl"
                onClick={() => setShow(!show)}
              />
              {show && (
                <MoreButton
                  href={""}
                  extraInfo={extraInfo}
                  handleClick={handleClick}
                />
              )}
            </div>
          </div>
          {inventoryList &&
            inventoryList.map((inventory, index) => {
              return (
                <div
                  key={index + 5}
                  className="font-medium text-[#364a63] text-sm grid grid-cols-[3em,8em,10em,7em,8em,8em,3em] md:grid-cols-[3em,8em,10em,7em,5em,8em,3em] lg:grid-cols-[3%,20%,20%,17%,12%,15%,5%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple"
                >
                  <div>{index + 1}</div>
                  <div className="grid">
                    <h2 className="font-medium">{inventory.itemName}</h2>
                    <p className="text-xs text-[#8094ae]">
                      {inventory.shelfNumber}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">{inventory.quantity}</h3>
                    <p className="text-xs text-[#8094ae]">
                      {inventory.itemCode}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">{inventory.unitCost}</p>
                  </div>
                  <div className="hidden sm:block">
                    <p>{inventory.supplier || "--|--"}</p>
                  </div>
                  <div className="py-1.5 px-2.5 text-[#1ee0ac] bg-[#1ee0ac26] rounded-2xl flex items-center gap-1 mr-auto">
                    <RxDotFilled className="text-lg" />
                    <p className="text-xs font-bold">In Stock</p>
                  </div>
                  <div>
                    <BsThreeDots
                      className="cursor-pointer text-xl"
                      onClick={() => setShow(!show)}
                    />
                    {show && (
                      <MoreButton
                        href={""}
                        extraInfo={extraInfo}
                        handleClick={handleClick}
                      />
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default InventoryList;
