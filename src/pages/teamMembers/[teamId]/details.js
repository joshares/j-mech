import { useState } from "react";
import DetailsPage from ".";
import { RiInformationLine } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import NewNotes from "@/components/forms/NewNotes";
import { useFormContext } from "@/context/form_context";

const Details = () => {
  const [notes, setNotes] = useState(false);
  const { notesList, singleTeam } = useFormContext();
  return (
    <DetailsPage>
      {notes && <NewNotes notes={notes} setNotes={setNotes} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-16 px-6 text-sm">
        <div className="py-6 md:col-span-2">
          <h3 className="text-xl font-semibold">Team Information</h3>
          <p className="text-sm text-[#526484]">
            Basic team info, that gives team summary.
          </p>
        </div>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Member Name</p>
          <p className="font-medium text-[#364a63]">
            {singleTeam?.team?.fullName}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Phone Number</p>
          <p className="font-medium text-[#364a63]">
            {singleTeam?.team?.phone}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Email</p>
          <p className="font-medium text-[#364a63]">
            {singleTeam?.team?.email}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Active Jobs</p>
          <p className="font-medium text-[#364a63]">1/1</p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Address</p>
          <p className="font-medium text-[#364a63]">
            {singleTeam?.team?.address}
          </p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Balance</p>
          <p className="font-medium text-[#364a63]">N0.00</p>
        </article>
        <article className="md:col-span-2 text-xs font-medium">
          ADDITIONAL INFORMATION
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Role</p>
          <div className="font-medium bg-[#1ee0ac26] text-[#1ee0ac] py-1.5 px-4 text-xs rounded-xl">
            {singleTeam.role}
          </div>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Type</p>
          <p className="font-medium text-[#364a63]">{singleTeam.type}</p>
        </article>
        <article className="flex items-center justify-between">
          <p className="text-[#8094ae]">Status</p>
          <p className="font-medium text-[#1ee0ac]">{singleTeam.status}</p>
        </article>
        <hr className="md:col-span-2" />
        <div className="md:col-span-2">
          <div className="flex items-center justify-between">
            <p className="text-[#364a63] text-xl font-semibold">Team Notes</p>
            <div
              className="flex gap-1 text-[#0971fe]"
              onClick={() => setNotes(true)}
            >
              <BsPlus />
              <p className="font-medium cursor-pointer text-xs">Add Note</p>
            </div>
          </div>
          {notesList.length >= 1 ? (
            notesList.map((note, index) => {
              return (
                <div
                  key={note?.id}
                  className="h-12 mb-4 grid items-center pl-4 bg-gray-50"
                >
                  {note.note}
                </div>
              );
            })
          ) : (
            <div className="min-h-[40vh] flex flex-col items-center justify-center gap-2 text-[#8094ae]">
              <RiInformationLine className="text-5xl" />
              <p>No notes added yet</p>
            </div>
          )}
        </div>
      </div>
    </DetailsPage>
  );
};

export default Details;
