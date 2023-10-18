import { useState } from "react";
import JobDetails from ".";
import { BiPlus, BiTask } from "react-icons/bi";
import { BsFileMedical, BsThreeDots } from "react-icons/bs";
import { RiArrowLeftRightFill } from "react-icons/ri";
import NewPartsAndExpenses from "@/components/forms/NewPartsAndExpenses";
import NewWorkRequestedForm from "@/components/forms/NewWorkRequestedForm";
import JobCardImport from "@/components/JobCardImport";
import MoreButton from "@/components/MoreButton";
import { HiOutlinePencil } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TiCancel } from "react-icons/ti";
import NewInvoiceForm from "@/components/forms/NewInvoiceForm";
import NewJobCard from "@/components/forms/NewJobCard";
import NewQuotesForm from "@/components/forms/NewQuotesForm";
import NewInfoUpdate from "@/components/forms/NewInfoUpdate";
import { useFormContext } from "@/context/form_context";

const PartsAndExpenses = () => {
  const [parts, setParts] = useState(false);
  const [show, setShow] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [workRequested, setWorkRequested] = useState(false);
  const [jobImport, setJobImport] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [jobCard, setJobCard] = useState(false);
  const [quote, setQuote] = useState(false);
  const [info, setInfo] = useState(false);
  const { singleJob } = useFormContext();

  const extraInfo = [{ name: "Delete", icon: <BsTrash /> }];
  const handleClick = (index) => {
    // Perform different setState functions based on index
    if (index === 0) {
      // setInfo(true);
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
    <JobDetails>
      {invoice && <NewInvoiceForm invoice={invoice} setInvoice={setInvoice} />}
      {jobCard && <NewJobCard jobCard={jobCard} setJobCard={setJobCard} />}
      {quote && <NewQuotesForm quote={quote} setQuote={setQuote} />}
      {info && <NewInfoUpdate info={info} setInfo={setInfo} />}
      {parts && <NewPartsAndExpenses parts={parts} setParts={setParts} />}
      {jobImport && (
        <JobCardImport jobImport={jobImport} setJobImport={setJobImport} />
      )}

      {workRequested && (
        <NewWorkRequestedForm
          workRequested={workRequested}
          setWorkRequested={setWorkRequested}
        />
      )}

      <div className="px-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              Project Expenses
            </h3>
            <p className="text-xs sm:text-sm text-[#526484]">
              A list of expenses for TOYOTA Camry - KSF-178-HX project totalling
              N0.00.
            </p>
          </div>
          <div className="grid sm:flex items-center gap-2">
            <button
              className="flex items-center gap-2 hover:bg-[#0971fe] hover:text-white border border-[#9dc6ff] bg-[#e4efff] text-[#0971fe] py-2 px-4 rounded-md text-sm cursor-pointer font-bold relative"
              onClick={() => setShow(!show)}
            >
              <RiArrowLeftRightFill />
              <span>Import From</span>
              {show && (
                <div className="absolute py-6 shadow-lg sm:grid hidden gap-4 bg-white rounded-md text-lg font-medium top-[2.4rem] -left-7 z-10">
                  <div
                    className="flex items-center gap-2 px-4 cursor-pointer text-[#364a63]"
                    onClick={() => setWorkRequested(true)}
                  >
                    <BiTask />
                    <p className="text-[0.76rem]">Work Requested</p>
                  </div>
                  <div
                    className="flex items-center px-4 gap-2 cursor-pointer text-[#364a63]"
                    onClick={() => setJobImport(true)}
                  >
                    <BsFileMedical />
                    <p className="text-[0.76rem]">Approved Jobcard</p>
                  </div>
                </div>
              )}
            </button>
            <button
              className="flex items-center gap-2 bg-[#0971fe] py-2 px-4 rounded-md text-sm text-white cursor-pointer font-bold"
              onClick={() => setParts(true)}
            >
              <BiPlus />
              <span>Add Expense</span>
            </button>
          </div>
        </div>
        <div className="grid min-h-[70vh] w-full border overflow-x-hidden">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-black">
              <thead class="text-xs text-[#8094ae] capitalize border-b">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3">
                    supplier
                  </th>
                  <th scope="col" class="px-6 py-3">
                    expense/quantity
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Payment
                  </th>
                  <th scope="col" class="px-6 py-3"></th>
                </tr>
              </thead>
              {/* <tbody>
                <tr class="bg-white border-b hover:bg-gray-50">
                  <td class="px-4 py-3">
                    <div className="flex items-center">1</div>
                  </td>
                  <td class="px-6 py-4">Okon</td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <div>
                      <h3 className="font-medium text-black">window</h3>
                      <p className="text-[#8094ae] font-light">1.00 Pieces</p>
                    </div>
                  </th>
                  <td class="px-6 py-4">June 26, 2023</td>
                  <td class="px-6 py-4">Ksh 10.00</td>
                  <td class="px-6 py-4">
                    <div className="font-medium bg-[#1ee0ac26] text-[#1ee0ac] py-1.5 px-4 text-center text-xs rounded-xl">
                      Delivered
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div className="font-bold text-[#1ee0ac] text-xs">Paid</div>
                  </td>
                  <td class="px-6 py-4">
                    <div>
                      <BsThreeDots
                        className="cursor-pointer text-xl"
                        onClick={() => setShow(!show)}
                      />
                      {show && (
                        <MoreButton
                          href={"/jobs/99/details"}
                          extraInfo={extraInfo}
                          handleClick={handleClick}
                        />
                      )}
                    </div>
                  </td>
                </tr>
              </tbody> */}
              {singleJob?.expenses?.length >= 1 &&
                singleJob?.expenses?.map((expense, index) => {
                  return (
                    <tbody key={index + 6}>
                      <tr class="bg-white border-b hover:bg-gray-50">
                        <td class="px-4 py-3">
                          <div className="flex items-center">1</div>
                        </td>
                        <td class="px-6 py-4">
                          {expense?.expenseForm?.supplier
                            ? expense.expenseForm?.supplier
                            : "From inventory"}
                        </td>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          <div>
                            <h3 className="font-medium text-black">
                              {expense?.expenseForm?.itemName}
                            </h3>
                            <p className="text-[#8094ae] font-light">
                              {expense?.expenseForm?.quantityUnit}{" "}
                              {expense?.expenseForm?.type}
                            </p>
                          </div>
                        </th>
                        <td class="px-6 py-4">
                          {expense?.expenseForm?.paymentDue}
                        </td>
                        <td class="px-6 py-4">Ksh 10.00</td>
                        <td class="px-6 py-4">
                          <div className="font-medium bg-[#1ee0ac26] text-[#1ee0ac] py-1.5 px-4 text-center text-xs rounded-xl">
                            {expense?.expenseForm?.status}
                          </div>
                        </td>
                        <td class="px-6 py-4">
                          <div className="font-bold text-[#1ee0ac] text-xs">
                            {expense?.expenseForm?.paid === "true"
                              ? "paid"
                              : "not paid"}
                          </div>
                        </td>
                        <td class="px-6 py-4">
                          <div>
                            <BsThreeDots
                              className="cursor-pointer text-xl"
                              onClick={() => setShowOptions(!showOptions)}
                            />
                            {showOptions && (
                              <MoreButton
                                // href={"/jobs/99/details"}
                                extraInfo={extraInfo}
                                handleClick={handleClick}
                              />
                            )}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </JobDetails>
  );
};

export default PartsAndExpenses;
