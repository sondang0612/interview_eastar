import React from "react";
import { TicketLine } from "./containers/public";
import { totalLines } from "./constants";
import generateNElements from "./utils/generateNElements";

const App = () => {
  const [selectedTotalLine, setSelectedTotalLine] = React.useState(
    totalLines[0]
  );
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
      </div>
      <div className="grid grid-cols-5 gap-3">
        {generateNElements(selectedTotalLine).map((value) => (
          <TicketLine key={value} />
        ))}
      </div>
    </div>
  );
};

export default App;
