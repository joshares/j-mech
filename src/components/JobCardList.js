import React from "react";
import { RxDotFilled } from "react-icons/rx";

export default function JobCardList({ job, index }) {
  return (
    <div className="p-6 bg-gray-50 grid gap-4 relative">
      <div className="py-1.5 px-2.5 text-yellow-500 bg-yellow-100 rounded-2xl items-center gap-1 hidden md:flex absolute right-6 top-6">
        <RxDotFilled className="text-xl" />
        <p className="text-xs font-bold">Assessment</p>
      </div>
      <div>
        <h3 className="text-sm font-semibold">Body Report</h3>
        <p className="text-sm pl-4 pt-3">1. {job?.body}</p>
      </div>
      <hr />
      <div>
        <h3 className="text-sm font-semibold">Mechanical Report</h3>
        <p className="text-sm pl-4 pt-3">1. {job?.mechanical}</p>
      </div>
      <hr />
      <div>
        <h3 className="text-sm font-semibold">Electrical Report</h3>
        <p className="text-sm pl-4 pt-3">1. {job?.electrical}</p>
      </div>
      <hr />
      <div>
        <h3 className="text-sm font-semibold">Images</h3>
        <div className="mt-4 text-xs flex flex-wrap justify-between text-[#0971fe] w-3/4 gap-2">
          <p className="text-[#8094ae]">
            Job Card <b>#169</b> on {job.date} at 11:21am
          </p>
          <p className="cursor-pointer">Edit Job Card</p>
          <p className="cursor-pointer">Create Approved Version</p>
          <p className="cursor-pointer">View Job Card</p>
          <p className="cursor-pointer">Download Job Card</p>
          <p className="text-red-600 cursor-pointer">Delete</p>
        </div>
      </div>
    </div>
  );
}
