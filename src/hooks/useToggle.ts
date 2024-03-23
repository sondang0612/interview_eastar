import React from "react";

export const useToggle = () => {
  const first = React.useRef<boolean>(false);
  const [value, setValue] = React.useState(false);

  const onToggle = () => {
    if (!first.current) {
      first.current = true;
    }
    setValue((prev) => !prev);
  };

  const onReset = () => {
    first.current = false;
    setValue(false);
  };

  return { first, value, onToggle, onReset };
};

export type Toggle = {
  first: React.MutableRefObject<boolean>;
  value: boolean;
  onToggle: () => void;
};
