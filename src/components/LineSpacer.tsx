import React from "react";

type Props = {
  marginTop?: number;
  marginBottom?: number;
  borderColor?: string;
};

const LineSpacer = (props: Props) => {
  const { marginTop = 0, marginBottom = 0, borderColor = "#808080" } = props;
  return (
    <div
      className={`border-[1px] w-full line_spacer`}
      style={{
        marginTop,
        marginBottom,
        borderColor,
      }}
    />
  );
};

export default React.memo(LineSpacer);
