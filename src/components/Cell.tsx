import React from "react";

export type CellProps = {
  value: number;
  isSelected: boolean;
  selectedClassName: string;
  onClick: (value: number) => void;
};

const Cell = (props: CellProps) => {
  const { value, isSelected, selectedClassName, onClick } = props;
  return (
    <div
      className={`text-[14px] w-[23.6px] h-[25.8px] flex items-center justify-center border-[#9fa5ac] border-[0.8px] cursor-pointer hover:bg-[#D1D3D7] ${
        isSelected ? selectedClassName : "text-primary bg-white"
      }`}
      onClick={() => onClick(value)}
    >
      {value + 1}
    </div>
  );
};

export default React.memo(Cell);
