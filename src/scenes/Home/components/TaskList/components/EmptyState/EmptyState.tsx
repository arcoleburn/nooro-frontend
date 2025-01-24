import Image from "next/image";
import { FC } from "react";

const EmptyState: FC = () => {
  return (
    <div className="flex flex-col border-t border-[#333333] w-full items-center gap-4 pt-[16px]">
      <Image src="/clipboard.svg" alt="" width={56} height={56} />

      <p className="font-inter text-[16px] font-bold leading-[22.4px] text-center">
        {"You don't have any tasks registered yet."}
      </p>

      <p className="font-inter text-[16px] font-normal leading-[22.4px] text-center">
        Create tasks and organize your to-do items.
      </p>
    </div>
  );
};

export default EmptyState;
