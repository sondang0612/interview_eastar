import React from "react";
import { Cell, GuestHint, LineSpacer } from "~/components";
import generateNElements from "~/utils/generateNElements";

type Props = {
  totalCells: number;
  limit: number;
  selectedCellClassName: string;
  cells: number[];
  setCells: React.Dispatch<React.SetStateAction<number[]>>;
};

const SubTicket = (props: Props) => {
  const { limit, totalCells, selectedCellClassName, cells, setCells } = props;

  const onCellClick = React.useCallback(
    (cellValue: number) => {
      setCells((prev) => {
        const isExisted = prev.includes(cellValue);
        if (isExisted) {
          return prev.filter((item) => item !== cellValue);
        } else {
          if (prev.length < limit) {
            return [...prev, cellValue];
          }
          return prev;
        }
      });
    },
    [limit, setCells]
  );

  return (
    <div className="flex flex-col pl-[5px] pr-2 items-center">
      <GuestHint limit={limit - cells.length} />
      <LineSpacer marginTop={3} marginBottom={13} />

      <div className="grid grid-cols-6 gap-[2.4px]">
        {generateNElements(totalCells).map((value) => (
          <Cell
            key={value}
            value={value}
            selectedClassName={selectedCellClassName}
            isSelected={cells.includes(value)}
            onClick={onCellClick}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(SubTicket);
