import Image from "next/image";
import { FC } from "react";
interface ButtonProps {
  buttonText: string;
  onClick: () => void;
  icon: string;
}
const ActionButton: FC<ButtonProps> = ({ buttonText, icon, onClick }) => {
  return (
    <button
      className="w-full md:w-[736px] h-[52px] px-4 flex items-center justify-center gap-[8px] bg-[#1E6F9F] rounded-[8px] -mt-[26px] font-inter text-[14px] font-bold leading-[19.6px] text-white z-10"
      onClick={onClick}
    >
      {buttonText}
      {icon && (
        <Image
          src={`${icon === "plus" ? "/plus.svg" : "/check.svg"}`}
          alt=""
          width={16}
          height={16}
          className="ml-2"
        />
      )}
    </button>
  );
};

export default ActionButton;
