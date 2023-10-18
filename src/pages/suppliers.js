import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { BsThreeDots } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import NewSuppliersForm from "@/components/forms/NewSuppliersForm";
import { CgMenuRight } from "react-icons/cg";
import { useFormContext } from "@/context/form_context";
import { HiOutlinePencil } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { BsTrash } from "react-icons/bs";
import MoreButton from "@/components/MoreButton";
import Loading from "@/components/Loading";
import SupplierList from "@/components/SupplierList";

const Suppliers = () => {
  const [open, setOpen] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [show, setShow] = useState(false);
  const {
    fetchSuppliers,
    clearSupplierForm,
    supplierList,
    client_loading: loading,
  } = useFormContext();

  const handleClick = () => {
    clearSupplierForm();
    setOpen(true);
  };

  useEffect(() => {
    fetchSuppliers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <main className="text-center text-2xl mx-auto">
        <Loading />
      </main>
    );
  }

  return (
    <Layout>
      {open && <NewSuppliersForm open={open} setOpen={setOpen} />}

      <section className="flex justify-between items-center mb-6 px-6 sm:px-0">
        <div>
          <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
            Suppliers
          </h1>
          <p className="text-sm text-[#8094ae] ">
            Create and manage list of your suppliers here.
          </p>
        </div>
        <button
          className="sm:flex hidden items-center gap-2 bg-blue-500 p-2.5 rounded-md text-sm text-white cursor-pointer font-bold ml-auto"
          onClick={() => handleClick()}
        >
          <BiPlus />
          <span>Add Supplier</span>
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
              <span>Add Supplier</span>
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
          <main className="font-normal text-[#8094ae] text-sm grid grid-cols-[6%,50%,30%,6%] lg:grid-cols-[3%,25%,25%,15%,9%,12%,4%] p-2.5 border border-transparent border-b-gray-200 gap-2">
            <div>#</div>
            <div>Name</div>
            <div className="hidden sm:block">Email</div>
            <div className="">Supplied</div>
            <div className="hidden sm:block">A.D</div>
            <div className="hidden sm:block">Owed</div>
            <div></div>
          </main>
          {/* <div className="font-normal text-[#364a63] text-sm grid grid-cols-[6%,50%,30%,6%] lg:grid-cols-[3%,25%,25%,15%,9%,12%,4%] items-center p-2.5 border border-transparent border-b-gray-200 gap-2 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="flex items-center gap-2">
              <p className="p-2.5 bg-blue-500 rounded-full text-white hidden sm:block">
                ME
              </p>
              <div>
                <h2 className="font-medium">Mr. Emmanuel Afolabi</h2>
                <p className="text-xs text-[#8094ae]">+2348167821219</p>
              </div>
            </div>
            <div className="hidden sm:block text-[#8094ae]">
              emmanuel@email.com
            </div>
            <div className="text-[#8094ae]">0</div>
            <div className="hidden sm:block text-[#8094ae]">0</div>
            <div className="hidden sm:block">N0.00</div>
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
          </div> */}
          {supplierList &&
            supplierList.map((supplier, index) => {
              return (
                <SupplierList
                  key={supplier?.id}
                  index={index}
                  supplier={supplier}
                />
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default Suppliers;
