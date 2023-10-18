import { useState } from "react";
import { GiTwoCoins } from "react-icons/gi";
import { AiOutlineHistory } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import NewCampaignForm from "@/components/forms/NewCampaignForm";
import Layout from "../../layout/Layout";
import { CgMenuRight } from "react-icons/cg";
import { useFormContext } from "@/context/form_context";


const Marketing = () => {
  const [open, setOpen] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };
  const {campaignList} = useFormContext();


  return (
    <Layout>
      <main className="bg-gray-100 min-h-screen">
        {open && <NewCampaignForm open={open} setOpen={setOpen} />}

        <div className="flex items-center justify-between px-6 sm:px-0">
          <div className="mb-6">
            <h1 className="text-2xl lg:text-[1.75rem] font-bold text-[#364a63]">
              Marketing
            </h1>
            <p className="text-sm text-[#8094ae] ">
              Create and manage your campaigns here
            </p>
          </div>
          <div className="md:flex hidden capitalize gap-5">
            <article
              className="flex items-center gap-2 px-5 py-2 bg-blue-200 rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer relative"
              onClick={toggleDropDown}
            >
              <GiTwoCoins />
              <p className="text-xs">balance & history</p>
              <div
                className={`rounded-md p-2 absolute top-[2.2em] right-0 z-10 transition-[height] duration-500s linear ${
                  dropDown
                    ? "min-h-[4em] min-w-[10.3em] bg-blue-100"
                    : "h-0 m-0 overflow-hidden bg-transparent"
                } `}
              >
                <ul className="text-center">
                  <li className="py-2.5 cursor-pointer text-[0.6em] font-bold flex items-center gap-2 justify-center">
                    <AiOutlineHistory />
                    <span>SMS History</span>
                  </li>
                  <li className="py-2.5 cursor-pointer text-[0.6em] font-bold flex items-center gap-2 justify-center">
                    <GiTwoCoins />
                    <span>SMS Balance</span>
                  </li>
                </ul>
              </div>
              <div
                className="sm:hidden text-2xl cursor-pointer"
                onClick={() => setMoreInfo(!moreInfo)}
              >
                <CgMenuRight />
              </div>
            </article>
            <article
              className="flex items-center gap-2 px-5 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer "
              onClick={() => setOpen(true)}
            >
              <BsPlusLg />
              <p className="text-xs">create campaign</p>
            </article>
          </div>
          <div
            className="sm:hidden text-2xl cursor-pointer"
            onClick={() => setMoreInfo(!moreInfo)}
          >
            <CgMenuRight />
          </div>
        </div>
        <div className="w-full min-h-[9em] bg-white rounded-sm drop-shadow-md mt-12 mx-auto px-6 text-[#364a63] font-bold text-md pb-4 relative">
          <div
            className={`px-6 flex sm:hidden gap-3 items-center justify-start transition-all duration-300 linear bg-white absolute left-0 top-0 w-full shadow-md ${
              moreInfo ? " h-20 opacity-100" : " h-0 opacity-0"
            }`}
          >
            {moreInfo && (
              <>
                <article
                  className="flex items-center gap-2 px-5 py-2 bg-blue-200 rounded-md border border-blue-400 font-bold text-blue-700 cursor-pointer relative"
                  onClick={toggleDropDown}
                >
                  <GiTwoCoins />
                  <p className="text-xs">balance & history</p>
                  <div
                    className={`rounded-md p-2 absolute top-[2.2em] right-0 z-10 transition-[height] duration-500s linear ${
                      dropDown
                        ? "min-h-[4em] min-w-[10.3em] bg-blue-100"
                        : "h-0 m-0 overflow-hidden bg-transparent"
                    } `}
                  >
                    <ul className="text-center">
                      <li className="py-2.5 cursor-pointer text-[0.6em] font-bold flex items-center gap-2 justify-center">
                        <AiOutlineHistory />
                        <span>SMS History</span>
                      </li>
                      <li className="py-2.5 cursor-pointer text-[0.6em] font-bold flex items-center gap-2 justify-center">
                        <GiTwoCoins />
                        <span>SMS Balance</span>
                      </li>
                    </ul>
                  </div>
                </article>
                <article
                  className="flex items-center gap-2 px-5 py-2 bg-blue-700 rounded-md border border-blue-400 font-bold text-white cursor-pointer "
                  onClick={() => setOpen(true)}
                >
                  <BsPlusLg />
                  <p className="text-xs">create campaign</p>
                </article>
              </>
            )}
          </div>
          <section className="flex items-center justify-between pt-6 pb-4 px-2 text-xs text-[#8094ae]">
            <p>#</p>
            <p>Campaign</p>
            <p>Date</p>
            <p>Sent SMS</p>
            <p>Status</p>
          </section>
          <hr className="mb-3" />
          {/* {campaigns && campaigns.length < 1 ? (
           <p className="text-center font-light text-sm">It's empty here</p>
         ) : (
           <OfferNewCampaign />
         )} */}
        </div>
      </main>
    </Layout>
  );
};

export default Marketing;
