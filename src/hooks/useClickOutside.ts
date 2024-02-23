import { useEffect } from "react";

type useClickOutsideProps = {
  callback: (newValue: boolean) => void;
  ref: React.RefObject<HTMLDivElement>;
};

export const useClickOutside = ({ callback, ref }: useClickOutsideProps) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (callback && ref.current && !ref.current.contains(e.target as Node)) {
        callback(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback, ref]);
};
