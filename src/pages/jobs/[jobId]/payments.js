import { useEffect, useState } from "react";
import JobDetails from ".";
import { BiPlus } from "react-icons/bi";
import NewPaymentForm from "@/components/forms/NewPaymentForm";
import { HiOutlinePencil } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TiCancel } from "react-icons/ti";
import { useFormContext } from "@/context/form_context";
import PaymentList from "@/components/PaymentList";
import SinglePaymentList from "@/components/SinglePaymentList";

const Payments = () => {
  const [payment, setPayment] = useState(false);
  const [singlePayment, setSinglePayment] = useState([]);
  const { paymentsList, singleJob } = useFormContext();
  const id = singleJob.id;

  const extraInfo = [
    { name: "Edit Details", icon: <HiOutlinePencil /> },
    {
      name: "Create Job Card",
      icon: <HiOutlineMenuAlt2 />,
      state: "setJobCard",
    },
    { name: "Create Quote", icon: <HiOutlineMenuAlt2 /> },
    {
      name: "Create Invoice",
      icon: <HiOutlineMenuAlt2 />,
    },
    {
      name: "Cancel Project",
      icon: <TiCancel />,
    },
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
  const fetchSinglePayment = (id) => {
    const payment = paymentsList.filter((p) => p.paymentsForm.job.id === id);
    setSinglePayment(payment);
    console.log(payment);
  };
  useEffect(() => {
    fetchSinglePayment(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <JobDetails>
      {payment && <NewPaymentForm payment={payment} setPayment={setPayment} />}
      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              Project Payments
            </h3>
            <p className="text-xs sm:text-sm text-[#526484]">
              A list of payments for TOYOTA Camry - KSF-178-HX project.
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
        <div className="grid w-full border overflow-x-hidden">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-black">
              <thead class="text-xs text-[#8094ae] uppercase border-b">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Project
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Invoice
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Payment Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3"></th>
                </tr>
              </thead>
              {/* <tbody>
                <tr class="bg-white border-b hover:bg-gray-50">
                  <td class="px-6 py-3">
                    <div className="flex items-center">1</div>
                  </td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <div>
                      <h3 className="font-medium text-black">DODGE Journey</h3>
                      <p className="text-[#8094ae]">LND398FC</p>
                    </div>
                  </th>
                  <td class="px-6 py-4">Silver</td>
                  <td class="px-6 py-4">Laptop</td>
                  <td class="px-6 py-4">Yes</td>
                  <td class="px-6 py-4">
                    <div className="font-medium bg-[#1ee0ac26] text-[#1ee0ac] py-1.5 px-4 text-center text-xs rounded-xl">
                      Active
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600">
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody> */}
              {singlePayment &&
                singlePayment.map((payment, index) => {
                  return (
                    <SinglePaymentList
                      key={payment?.id}
                      payment={payment}
                      index={index}
                      handleClick={handleClick}
                      extraInfo={extraInfo}
                    />
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </JobDetails>
  );
};

export default Payments;
