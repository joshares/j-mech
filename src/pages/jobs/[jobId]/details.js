import { useState } from "react";
import JobDetails from ".";
import { RiInformationLine } from "react-icons/ri";
import { BsPlus, BsFileMedical } from "react-icons/bs";
import NewNotes from "@/components/forms/NewNotes";
import Link from "next/link";
import { useFormContext } from "@/context/form_context";

const Details = () => {
  const [notes, setNotes] = useState(false);
  const { singleJob } = useFormContext();

  return (
    <JobDetails>
      {notes && <NewNotes notes={notes} setNotes={setNotes} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-16 px-6 text-sm">
        <div className="flex items-center justify-between py-6 md:col-span-2">
          <div>
            <h3 className="text-xl font-semibold">Project Information</h3>
            <p className="text-sm text-[#526484]">
              Basic project info, that gives project summary.
            </p>
          </div>
          <div className="grid sm:flex items-center gap-2">
            <Link
              href={"/"}
              className="flex items-center gap-2 hover:bg-[#0971fe] hover:text-white border border-[#9dc6ff] bg-[#e4efff] text-[#0971fe] py-2 px-4 rounded-md text-sm cursor-pointer font-bold"
            >
              <BsFileMedical />
              <span>Vehicle Booking</span>
            </Link>
            <Link
              href={"/"}
              className="flex items-center gap-2 bg-[#0971fe] py-2 px-4 rounded-md text-sm text-white cursor-pointer font-bold"
            >
              <BsFileMedical />
              <span>Vehicle Report</span>
            </Link>
          </div>
        </div>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Project</p>
          <p className="font-medium text-[#364a63]">
            {singleJob?.jobForm?.make}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Registration</p>
          <p className="font-medium text-[#364a63]">
            {singleJob?.jobForm?.regNo}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">VIN</p>
          <p className="font-medium text-[#364a63]">
            {singleJob?.jobForm?.vin}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Color</p>
          <p className="font-medium text-[#364a63]">
            {singleJob?.jobForm?.color}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Car Year</p>
          <p className="font-medium text-[#364a63]">
            {singleJob?.jobForm?.carYear}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Insurance Company</p>
          {singleJob?.jobForm?.insurance ? (
            <p className="font-medium text-[#364a63]">
              {singleJob?.jobForm?.insurance}
            </p>
          ) : (
            <p className="font-medium text-[#364a63]">nil</p>
          )}
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Booking Date & Time</p>
          <p className="font-medium text-[#364a63]">
            {singleJob?.jobForm?.dateIn}
            {singleJob?.jobForm?.timeIn}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Client Name</p>
          <p className="font-medium text-[#364a63]">
            {singleJob?.jobForm?.client?.fullName}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Start Date</p>
          <p className="font-medium text-[#364a63]">
            {singleJob?.jobForm?.startDate}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Completion</p>
          <p className="font-medium text-[#364a63]">
            {singleJob?.jobForm?.expectedDate}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Mileage In</p>
          <p className="font-medium text-[#364a63]">
            {singleJob?.jobForm?.milleageIn
              ? singleJob?.jobForm?.milleageIn
              : ""}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Road Test In</p>
          <p className="font-medium text-[#364a63]">None</p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Invoiced</p>
          <p className="font-medium text-[#364a63]">N0.00</p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Total Cost</p>
          <p className="font-medium text-[#364a63]">N0.00</p>
        </article>
        <article className="flex items-center justify-between ">
          <p className="text-[#8094ae]">Insurance Covered Repairs</p>
          <p className="py-1.5 px-3 font-semibold text-[#e85347] bg-[#e8534726] rounded-2xl flex items-center text-xs gap-2 ">
            {singleJob?.jobForm?.insuranceCovered
              ? singleJob?.jobForm?.insuranceCovered
              : "not covered"}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Insurance covering repairs</p>
          <p className="font-medium text-[#364a63]">N/A</p>
        </article>
        <article className="md:col-span-2 text-xs font-medium">
          ADDITIONAL INFORMATION
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Tasks</p>
          <p className="font-medium text-[#364a63]">0/0</p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Client Phone</p>
          <p className="font-medium text-[#364a63]">
            {singleJob?.jobForm?.client?.phone}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Profit</p>
          <p className="font-medium text-[#364a63]">N0.00</p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Status</p>
          <div className="font-semibold bg-[#f4bd0e26] text-[#f4bd0e] py-1.5 px-4 text-xs rounded-xl">
            {singleJob?.jobForm?.status}
          </div>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Brought In By</p>
          {singleJob?.jobForm?.valetFullName?.length > 1 ? (
            <p className="font-medium text-[#364a63]">
              {singleJob?.jobForm?.valetFullName}
            </p>
          ) : (
            <p className="font-medium text-[#364a63]">client</p>
          )}
        </article>
        <hr className="md:col-span-2" />
        <div className="md:col-span-2">
          <div className="flex items-center justify-between">
            <p className="text-[#364a63] text-lg font-semibold">
              Project Notes
            </p>
            <div
              className="flex gap-1 text-[#0971fe]"
              // onClick={() => setNotes(true)}
            >
              <BsPlus />
              <p className="font-medium cursor-pointer text-xs">Add Note</p>
            </div>
          </div>
          <div className="min-h-[40vh] flex flex-col items-center justify-center gap-2 text-[#8094ae]">
            <RiInformationLine className="text-5xl" />
            <p>No notes added yet</p>
          </div>
        </div>
      </div>
    </JobDetails>
  );
};

export default Details;
