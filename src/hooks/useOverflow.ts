import { useEffect } from "react";

type useOverflowProps = {
  state: boolean;
};

export const useOverflow = ({ state }: useOverflowProps) => {
  useEffect(() => {
    const handleOverFlow = (shouldOverflow: boolean): void => {
      document.body.classList.toggle("no-scroll", shouldOverflow);
    };

    state ? handleOverFlow(true) : handleOverFlow(false);

    return (): void => {
      handleOverFlow(false);
    };
  }, [state]);
};
