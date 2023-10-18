import React from 'react'
import Layout from '../../layout/Layout'

const UnpaidParts = () => {
  return (
    <Layout>
      <div className="mb-6 pl-6 sm:pl-0">
        <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
          Unpaid Parts
        </h1>
        <p className="text-sm text-[#8094ae]">
          List of services and parts that are not paid for.
        </p>
      </div>
      <div className="w-full min-h-[9em] bg-white rounded-sm drop-shadow-md mt-12 px-6 text-[#8094ae] font-bold text-md pb-4">
        <section className="flex items-center justify-between pt-6 pb-4 px-2 text-xs">
          <p>#</p>
          <p>Project</p>
          <p>Expense / Supplier</p>
          <p>Date / Due Date</p>
          <p>Amount</p>
          <p>Status</p>
          <p>Payment</p>
        </section>
        <hr className="mb-3" />
        <p className="text-center font-light text-sm">It`s empty here</p>
      </div>
    </Layout>
  );
}

export default UnpaidParts