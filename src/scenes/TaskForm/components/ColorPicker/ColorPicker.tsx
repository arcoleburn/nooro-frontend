import { FC } from "react";
import { colors } from "@/utils/colors";

interface PickerProps {
  colorIdx: number;
  onClick: (val: number) => void;
}

const ColorPicker: FC<PickerProps> = ({ colorIdx, onClick }) => {
  return (
    <div className="flex flex-col gap-1 mt-4">
      <label className="font-inter text-[14px] font-bold text-[#4EA8DE]">
        Color
      </label>
      <div className="flex items-center gap-4 flex-wrap ">
        {colors.map((c, index) => (
          <button
            key={index}
            onClick={() => onClick(index)}
            className={`w-[52px] h-[52px] rounded-full border-2 ${
              colorIdx === index ? "border-purple-500" : "border-transparent"
            } ${c} flex items-center justify-center focus:outline-none`}
          >
            {colorIdx === index && (
              <span className="w-3 h-3 bg-white rounded-full"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
