import React from "react";

type Props = {
  limit: number;
};

const GuestHint = (props: Props) => {
  const { limit } = props;

  return limit !== 0 ? (
    <div className="flex items-center gap-0.5 leading-4">
      <span className="text-[16px] text-[#808080] font-bold">+</span>
      <span className="text-[12px] text-primary">Choose {limit}</span>
    </div>
  ) : (
    <div className="h-4" />
  );
};

export default React.memo(GuestHint);
