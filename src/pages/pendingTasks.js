import React from "react";
import Layout from "../../layout/Layout";

const PendingTasks = () => {
  return (
    <Layout>
      <div className="mb-6 pl-6 sm:pl-0">
        <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
          Pending Tasks
        </h1>
        <p className="text-sm text-[#8094ae] ">List of pending tasks</p>
      </div>
      <div className="w-full min-h-[9em] bg-white rounded-sm drop-shadow-md mt-12 mx-auto px-6 text-[#8094ae] font-bold text-md pb-4">
        <section className="flex items-center justify-between pt-6 pb-4 px-10 text-xs">
          <p>#</p>
          <p>Project</p>
          <p>Assigned To</p>
          <p>Title</p>
          <p>Due Date</p>
          <p>Cost</p>
          <p>Status</p>
        </section>
        <hr className="mb-3" />
        <p className="text-center font-light text-sm">It`s empty here</p>
      </div>
    </Layout>
  );
};

export default PendingTasks;
