import React from "react";
import SubTicket from "./SubTicket";

const TicketLine = () => {
  return (
    <div className="relative w-[178px] h-[606px]">
      <div className="flex flex-col bg-primary gap-2 pb-[17px] ticket_container absolute w-full">
        <div className="flex bg-[#6A96DD] items-center justify-between ticket_operation absolute left-[-4.8px] top-[-39px] z-10">
          <div className="text-[14px] bg-white rounded-full py-0.5 px-1.5 cursor-pointer">
            Quick Pick
          </div>
          <div className="bg-white rounded-full cursor-pointer py-0.5 px-1.5">
            <img src="trash.svg" alt="Trash Icon" className="size-[18px]" />
          </div>
        </div>
        <div className="sub_ticket_container">
          <SubTicket
            limit={5}
            totalCells={70}
            selectedCellClassName="text-white bg-[#374456] hover:bg-[#374456] hover:text-primary"
          />
          <div className="h-2" />
          <SubTicket
            limit={1}
            totalCells={25}
            selectedCellClassName="text-primary1 border-primary1 bg-secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TicketLine);
