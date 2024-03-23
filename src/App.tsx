import React from "react";
import { SYSTEMATIC_LABELS, totalLines } from "./constants";
import { TicketLine } from "./containers/public";
import { useToggle } from "./hooks/useToggle";
import generateNElements from "./utils/generateNElements";

const App = () => {
  const [selectedTotalLine, setSelectedTotalLine] = React.useState(
    totalLines[0]
  );
  const [systematicLimitNumber, setSystematicLimitNumber] = React.useState(
    SYSTEMATIC_LABELS[0].num
  );
  const toggleClear = useToggle();
  const toggleQuickPick = useToggle();

  React.useEffect(() => {
    toggleClear.onReset();
    toggleQuickPick.onReset();
  }, [selectedTotalLine, toggleClear, toggleQuickPick]);

  return (
    <div className="mt-5 pb-[50px] min-w-[1350px] flex-col flex items-center gap-3">
      <div className="flex flex-row gap-4">
        {totalLines.map((totalLine) =>
          typeof totalLine === "number" ? (
            <p
              onClick={() => setSelectedTotalLine(totalLine)}
              className={`cursor-pointer text-[16px] ${
                !(selectedTotalLine === totalLine)
                  ? "text-[#004cc6] underline"
                  : "text-[#000]"
              }`}
              key={totalLine}
            >
              {totalLine} Lines
            </p>
          ) : (
            <p
              className={`cursor-pointer text-[16px] font-bold ${
                !(selectedTotalLine === totalLine)
                  ? "text-[#004cc6] underline"
                  : "text-[#000]"
              }`}
              onClick={() => setSelectedTotalLine(totalLine)}
              key={totalLine}
            >
              {totalLine}
            </p>
          )
        )}
        <div
          className="text-[14px] bg-white rounded-full py-0.5 px-1.5 cursor-pointer text-red-500 border-solid border-[1px] border-red-500"
          onClick={toggleQuickPick.onToggle}
        >
          Quick Pick
        </div>
        <div className="bg-white rounded-full cursor-pointer py-0.5 px-1.5  border-solid border-[1px] border-red-500">
          <img
            src="trash-red.svg"
            alt="Trash Icon"
            className="size-[18px] text-red-500"
            onClick={toggleClear.onToggle}
          />
        </div>
      </div>

      {typeof selectedTotalLine === "number" ? (
        <div className="grid grid-cols-5 gap-3">
          {generateNElements(selectedTotalLine).map((value) => (
            <TicketLine
              key={value}
              toggleClear={toggleClear}
              toggleQuickPick={toggleQuickPick}
            />
          ))}
        </div>
      ) : (
        <div className="flex gap-20">
          <TicketLine
            mainCellsLimit={systematicLimitNumber}
            toggleClear={toggleClear}
            toggleQuickPick={toggleQuickPick}
          />

          <div className="flex gap-2 flex-col">
            {SYSTEMATIC_LABELS.map((item, index) => (
              <div
                className={`text-[#3F3F3F] text-[16px] w-[520px] flex gap-2 px-2 py-1 cursor-pointer ${
                  item.num !== systematicLimitNumber
                    ? "bg-[#e3ebf9]"
                    : "bg-[#80a6e3]"
                }`}
                key={index}
                onClick={() => {
                  toggleClear.onToggle();
                  setSystematicLimitNumber(item.num);
                }}
              >
                <input
                  type="radio"
                  checked={item.num === systematicLimitNumber}
                />
                <span>
                  {item.num} Numbers = {item.lines} Lines
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
