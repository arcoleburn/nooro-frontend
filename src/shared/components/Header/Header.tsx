import Image from "next/image";
import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="bg-[#0d0d0d] h-[200px] flex items-center justify-center relative w-full">
      <div className="flex items-center space-x-4">
        <Image
          src="/rocket.svg"
          alt="Icon"
          width="22"
          height="36"
          className="mt-[8.2px]"
        />
        <h1 className="text-left">
          <span className="font-inter text-[40px] font-extrabold leading-[48.41px]  -offset-4 decoration-slice text-[#4ea8de]">
            Todo
          </span>
          <span className="font-inter text-[40px] font-extrabold leading-[48.41px] text-[#5f60ce] ml-2">
            App
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
