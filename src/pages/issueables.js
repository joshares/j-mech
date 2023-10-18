import React from "react";
import Layout from "../../layout/Layout";

const Issueables = () => {
  return (
    <Layout>
      <div className="mb-6 pl-6 sm:pl-0">
        <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
          Issueables
        </h1>
        <p className="text-sm text-[#8094ae] ">
          Inventory items to be issued to specific vehicles.
        </p>
      </div>

      <div className="w-full min-h-[9em] bg-white rounded-sm drop-shadow-md mt-12 mx-auto px-6 text-[#8094ae] font-bold text-md pb-4">
        <section className="flex items-center justify-between pt-6 pb-4 text-xs">
          <p>#</p>
          <p>Supplier</p>
          <p>Vehicle</p>
          <p>Item</p>
          <p>Quantity</p>
          <p>Unit Cost</p>
          <p>Status</p>
        </section>
        <hr className="mb-3" />
      </div>
    </Layout>
  );
};

export default Issueables;
