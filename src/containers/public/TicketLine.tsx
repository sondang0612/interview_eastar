import React from "react";
import {
  LIMIT_CELL_LARGE,
  LIMIT_CELL_SMALL,
  LIMIT_LARGE,
  LIMIT_SMALL,
  RANDOM_SPEED,
  TOTAL_RANDOM_TIMES,
} from "~/constants";
import { Toggle } from "~/hooks/useToggle";
import randomNonRepeatingNumbers from "~/utils/randomIntFromInterval";
import SubTicket from "./SubTicket";
type Props = {
  toggleClear: Toggle;
  toggleQuickPick: Toggle;
  mainCellsLimit?: number;
};
const TicketLine = (props: Props) => {
  const { toggleClear, toggleQuickPick, mainCellsLimit = LIMIT_LARGE } = props;
  const [mainCells, setMainCells] = React.useState<number[]>([]);
  const [subCells, setSubCells] = React.useState<number[]>([]);

  const onQuickPickMainCells = React.useCallback(() => {
    for (let i = 0; i < TOTAL_RANDOM_TIMES; i++) {
      setTimeout(() => {
        setMainCells(
          randomNonRepeatingNumbers(LIMIT_CELL_LARGE, mainCellsLimit)
        );
      }, i * RANDOM_SPEED);
    }
  }, [mainCellsLimit]);

  const onQuickPickSubCells = React.useCallback(() => {
    for (let i = 0; i < TOTAL_RANDOM_TIMES; i++) {
      setTimeout(() => {
        setSubCells(randomNonRepeatingNumbers(LIMIT_CELL_SMALL, LIMIT_SMALL));
      }, i * RANDOM_SPEED);
    }
  }, []);

  const onClearSelectedCells = React.useCallback(() => {
    setMainCells([]);
    setSubCells([]);
  }, []);

  const onQuickPick = React.useCallback(() => {
    onQuickPickMainCells();
    onQuickPickSubCells();
  }, [onQuickPickMainCells, onQuickPickSubCells]);

  const isSuccess = React.useMemo(() => {
    return mainCells.length === LIMIT_LARGE && subCells.length === LIMIT_SMALL;
  }, [mainCells.length, subCells.length]);

  React.useEffect(() => {
    if (toggleClear.first.current) {
      onClearSelectedCells();
    }
  }, [toggleClear, onClearSelectedCells]);

  React.useEffect(() => {
    if (toggleQuickPick.first.current) {
      onQuickPick();
    }
  }, [toggleQuickPick, onQuickPick]);

  return (
    <div className="relative w-[178px] h-[606px]">
      <div className="flex flex-col bg-primary gap-2 pb-[17px] ticket_container absolute w-full">
        <div className="flex bg-[#6A96DD] items-center justify-between ticket_operation absolute left-[-4.8px] top-[-39px] z-10">
          <div
            className="text-[14px] bg-white rounded-full py-0.5 px-1.5 cursor-pointer"
            onClick={onQuickPick}
          >
            Quick Pick
          </div>
          {isSuccess && (
            <div
              className="bg-white rounded-full cursor-pointer py-0.5 px-1.5"
              onClick={onClearSelectedCells}
            >
              <img src="trash.svg" alt="Trash Icon" className="size-[18px]" />
            </div>
          )}
        </div>
        <div className="sub_ticket_container">
          <SubTicket
            limit={mainCellsLimit}
            totalCells={LIMIT_CELL_LARGE}
            selectedCellClassName="text-white bg-[#374456] hover:bg-[#374456] hover:text-primary"
            cells={mainCells}
            setCells={setMainCells}
          />
          <div className="h-2" />
          <SubTicket
            limit={LIMIT_SMALL}
            totalCells={LIMIT_CELL_SMALL}
            selectedCellClassName="text-primary1 border-primary1 bg-secondary"
            cells={subCells}
            setCells={setSubCells}
          />
        </div>
        {isSuccess && (
          <div className="hidden absolute size-[38px] bg-[#3ED8B2] bottom-[-18px] rounded-full items-center justify-center right-[-15px] z-50 show_success">
            <img src="tick.svg" alt="Tick Icon" className="size-[24px]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(TicketLine);
