import { useEffect, useState } from "react";
import DetailsPage from ".";
import { BiPlus } from "react-icons/bi";
import NewInvoiceForm from "@/components/forms/NewInvoiceForm";
import { BsTrash } from "react-icons/bs";
import { TiCancel } from "react-icons/ti";
import { HiOutlineMenuAlt2, HiOutlinePencil } from "react-icons/hi";
import { useFormContext } from "@/context/form_context";
import SingleInvoiceList from "@/components/SingleInvoiceList";

const Invoices = () => {
  const [invoice, setInvoice] = useState(false);
  const [singleInvoice, setSingleInvoice] = useState([]);
  const { invoiceList, singleInsurance } = useFormContext();
  const id = singleInsurance.id;

  const fetchSingleInvoice = (id) => {
    const invoice = invoiceList.filter(
      (I) => I.invoiceForm.insuranceCovered === id
    );
    console.log(invoice);
    setSingleInvoice(invoice);
  };
  useEffect(() => {
    fetchSingleInvoice(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
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

  return (
    <DetailsPage>
      {invoice && <NewInvoiceForm invoice={invoice} setInvoice={setInvoice} />}
      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="py-6 md:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              Company Invoices
            </h3>
            <p className="text-xs sm:text-sm text-[#526484]">
              A list of invoices for Autogirl Nig Ltd.
            </p>
          </div>
          <button
            className="flex items-center gap-2 bg-[#0971fe] py-2 px-4 rounded-md text-sm text-white cursor-pointer font-bold"
            onClick={() => setInvoice(true)}
          >
            <BiPlus className="text-lg sm:text-sm" />
            <span className="hidden sm:block">Create Invoice</span>
          </button>
        </div>
        <div class="relative min-h-[70vh] overflow-x-auto shadow-md sm:rounded-lg border-t">
          <table class="w-full text-sm text-left text-black">
            <thead class="text-xs text-[#8094ae] capitalize border-b">
              <tr>
                <th scope="col" class="px-4 py-3">
                  #
                </th>
                <th scope="col" class="px-6 py-3">
                  Project
                </th>
                <th scope="col" class="px-6 py-3">
                  Items
                </th>
                <th scope="col" class="px-6 py-3">
                  Date / Due
                </th>
                <th scope="col" class="px-6 py-3">
                  Total / Balance
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            {singleInvoice &&
              singleInvoice?.length >= 1 &&
              singleInvoice.map((invoice, index) => {
                return (
                  <SingleInvoiceList
                    key={invoice?.id}
                    invoice={invoice}
                    index={index}
                    handleClick={handleClick}
                    extraInfo={extraInfo}
                  />
                );
              })}
            {/* <tbody>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td class="px-4 py-3">
                  <div className="flex items-center">1</div>
                </td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div>
                    <h3 className="font-medium text-black">RENAULT ZOOM</h3>
                    <p className="text-[#8094ae] text-xs">u7687o89</p>
                  </div>
                </th>
                <td class="px-6 py-4">2</td>
                <td class="px-6 py-4 text-[#8094ae] text-[13px]">
                  <div>May 25, 2023</div>
                  <div>May 25, 2023</div>
                </td>
                <td class="px-6 py-4 text-[#8094ae] text-[13px]">
                  <div className="text-black">KSh120.00</div>
                  <div>KSh120.00</div>
                </td>
                <td class="px-6 py-4">
                  <div className="font-medium bg-[#1ee0ac26] text-[#1ee0ac] py-1.5 px-4 text-center text-xs rounded-xl">
                    Paid
                  </div>
                </td>
                <td class="px-6 py-4 text-lg cursor-pointer">
                  <BsThreeDots onClick={() => setShow(!show)} />
                  {show && (
                    <MoreButton
                      href={"clients/:99/details"}
                      extraInfo={extraInfo}
                      handleClick={handleClick}
                    />
                  )}
                </td>
              </tr>
            </tbody> */}
          </table>
          {singleInvoice?.length < 1 && (
            <p className="text-xs text-center mt-5">It`s empty here!</p>
          )}
        </div>
      </div>
    </DetailsPage>
  );
};

export default Invoices;
