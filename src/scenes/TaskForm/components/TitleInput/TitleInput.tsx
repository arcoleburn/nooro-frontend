import { FC } from "react";

interface InputProps {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TitleInput: FC<InputProps> = ({ title, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-inter text-[14px] font-bold text-[#4EA8DE]">
        Title
      </label>
      <input
        type="text"
        placeholder="Ex. Brush your teeth"
        className="w-full p-2 bg-[#262626] border border-transparent rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={title}
        onChange={onChange}
      />
    </div>
  );
};

export default TitleInput;
