import React from 'react'
import Layout from "../../layout/Layout";
import { BsCheckLg } from "react-icons/bs";

const Receivables = () => {
  return (
    <Layout>
      <div className="mb-6 pl-6 sm:pl-0">
        <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
          Receiveables
        </h1>
        <p className="text-sm text-[#8094ae] ">
          Confirm receipt of parts into inventory.
        </p>
      </div>
      <div className="bg-white min-h-[85vh] p-6">
        <div className="flex justify-between mb-4">
          <input
            className="placeholder:text-xs border pl-2 py-1 rounded-sm"
            placeholder="Type in to Search"
          />
          <div className="flex items-center gap-2">
            <p className="text-md">Show</p>
            <select className="outline-none border rounded-md text-sm px-1">
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>
        <div className="border rounded-md min-h-[30vh] overflow-x-auto ">
          <main className="font-semibold text-[#8094ae] text-sm grid grid-cols-[3em,8em,7em,5em,8em,12em] md:grid-cols-[3em,8em,10em,7em,5em,8em,12em] lg:grid-cols-[3%,20%,17%,12%,10%,18%,20%] p-2.5 border border-transparent border-b-gray-200">
            <div>#</div>
            <div className="hidden md:block">Supplier</div>
            <div>Vehicle</div>
            <div>Item</div>
            <div className="opacity-0 sm:opacity-100">Quantity</div>
            <div className="opacity-0 sm:opacity-100">Unit Cost</div>
            <div>Confirm</div>
          </main>
          <div className="font-medium text-[#364a63] text-sm grid grid-cols-[3em,8em,7em,5em,8em,12em] md:grid-cols-[3em,8em,10em,7em,5em,8em,12em] lg:grid-cols-[3%,20%,17%,12%,10%,18%,20%] items-center p-2.5 py-4 border border-transparent border-b-gray-200 hover:shadow-hoverPurple">
            <div>1</div>
            <div className="md:grid hidden">
              <p className="text-xs">--|--</p>
            </div>
            <div>
              <h3 className="font-medium">RENAULT • 6688</h3>
            </div>
            <div>
              <p className="font-medium">Brake pad</p>
            </div>
            <div>
              <p>1.00</p>
            </div>
            <div>
              <p className="font-medium">N25,000.00</p>
            </div>

            <div>
              <button className="flex items-center gap-2 bg-[#0971fe] py-0.5 px-2.5 rounded-sm text-xs text-white cursor-pointer font-bold">
                <BsCheckLg className="text-xl" />
                <span>Confirm Receipt</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Receivables