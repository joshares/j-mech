import { HiOutlineEye } from "react-icons/hi";
import Link from "next/link";

function MoreButton({ handleClick, href, extraInfo }) {
  return (
    <div className="absolute py-2 shadow-lg grid bg-white rounded-md text-md font-medium top-0 right-16 z-10">
      {href && (
        <Link
          href={href}
          className="flex items-center gap-2 pl-6 pr-8 py-2.5 cursor-pointer text-[#526484] hover:bg-[#f5f6fa] hover:text-[#0971fe]"
        >
          <HiOutlineEye className="text-lg" />
          <p className="text-[0.75rem]">View Details</p>
        </Link>
      )}
      {extraInfo.map((extras, index) => {
        return (
          <div
            key={index + 3}
            className="flex items-center gap-2 pl-6 pr-12 py-2.5 cursor-pointer text-[#526484] text-lg hover:bg-[#f5f6fa] hover:text-[#0971fe]"
            onClick={() => handleClick(index)}
          >
            {extras.icon}
            <p className="text-[0.75rem]">{extras.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MoreButton;
