"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

const BackButton: FC = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-2 text-[#4EA8DE] font-inter font-bold text-[14px] leading-[16.94px] mt-16 mb-8"
      onClick={() => router.push("/")}
    >
      <Image src="/backArrow.svg" alt="Back" width={16} height={16} />
    </button>
  );
};

export default BackButton;
