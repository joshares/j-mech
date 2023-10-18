import { useState } from "react";
import DetailsPage from ".";
import { BiPlus } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import MoreButton from "@/components/MoreButton";
import { HiOutlinePencil } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TiCancel } from "react-icons/ti";
import NewTeamPaymentForm from "@/components/forms/NewTeamPaymentForm";
import { useFormContext } from "@/context/form_context";

const Payments = () => {
  const [payment, setPayment] = useState(false);
  const [show, setShow] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [jobCard, setJobCard] = useState(false);
  const [quote, setQuote] = useState(false);
  const [info, setInfo] = useState(false);
  const { singleTeam } = useFormContext();
  const extraInfo = [
    { name: "Edit Details", icon: <HiOutlinePencil /> },
    { name: "Delete", icon: <BsTrash /> },
  ];
  const handleClick = (index) => {
    // Perform different setState functions based on index
    if (index === 0) {
      setInfo(true);
    } else if (index === 1) {
      setJobCard(true);
    } else if (index === 2) {
      setQuote(true);
    } else if (index === 3) {
      setInvoice(true);
    } else {
      return "none";
    }
  };

  return (
    <DetailsPage>
      {payment && (
        <NewTeamPaymentForm payment={payment} setPayment={setPayment} />
      )}
      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-xl font-semibold">Payments</h3>
            <p className="text-sm text-[#526484]">
              A list of payments made to Solace Enyinnaya.
            </p>
          </div>
          <button
            className="flex items-center gap-2 bg-[#0971fe] py-2 px-4 rounded-md text-sm text-white cursor-pointer font-bold"
            onClick={() => setPayment(true)}
          >
            <BiPlus className="text-lg sm:text-sm" />
            <span className="hidden sm:block">Add Payment</span>
          </button>
        </div>
        <div class="relative min-h-[70vh] overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-black">
            <thead class="text-xs text-[#8094ae] capitalize border-b">
              <tr>
                <th scope="col" class="px-6 py-3">
                  #
                </th>
                <th scope="col" class="px-4 py-3">
                  Member
                </th>
                <th scope="col" class="px-4 py-3">
                  Amount
                </th>
                <th scope="col" class="px-4 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Mode
                </th>
                <th scope="col" class="px-6 py-3">
                  Note
                </th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            {singleTeam?.payment?.length >= 1 &&
              singleTeam?.payment?.map((payment, index) => {
                return (
                  <tbody key={payment?.id}>
                    <tr class="bg-white border-b hover:bg-gray-50">
                      <td class="px-6 py-3">
                        <div className="flex items-center">{index + 1}</div>
                      </td>
                      <th
                        scope="row"
                        class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <div>
                          <h3 className="font-medium text-black">
                            {singleTeam?.team?.fullName}
                          </h3>
                          <p className="text-[#8094ae] text-[13px]">
                            {singleTeam?.team?.phone}
                          </p>
                        </div>
                      </th>
                      <td class="px-4 py-4">KSh{payment?.amount}.00</td>
                      <td class="px-4 py-4 text-[#8094ae] text-[13px]">
                        {payment?.paymentDate}
                      </td>
                      <td class="px-4 py-4">{payment?.paymentMode}</td>
                      <td class="px-6 py-4">{payment?.paymentNote}</td>
                      <td class="px-6 py-4 text-lg cursor-pointer">
                        <BsThreeDots onClick={() => setShow(!show)} />
                        {show && (
                          <MoreButton
                            // href={"clients/:99/details"}
                            extraInfo={extraInfo}
                            handleClick={handleClick}
                          />
                        )}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </DetailsPage>
  );
};

export default Payments;
