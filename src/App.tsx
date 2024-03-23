import React from "react";
import { TicketLine } from "./containers/public";
import { totalLines } from "./constants";
import generateNElements from "./utils/generateNElements";
import { useToggle } from "./hooks/useToggle";

const App = () => {
  const [selectedTotalLine, setSelectedTotalLine] = React.useState(
    totalLines[0]
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
        {totalLines.map((totalLine) => (
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
        ))}
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
      <div className="grid grid-cols-5 gap-3">
        {generateNElements(selectedTotalLine).map((value) => (
          <TicketLine
            key={value}
            toggleClear={toggleClear}
            toggleQuickPick={toggleQuickPick}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
