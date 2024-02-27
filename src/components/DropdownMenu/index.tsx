import { useClickOutside } from "../../hooks/useClickOutside";
import { useRef } from "react";

import NavItems from "../NavItems";

type DropdownMenuProps = {
  setIsOpen: (newValue: boolean) => void;
};

const Component = ({ setIsOpen }: DropdownMenuProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside({ callback: setIsOpen, ref: dropdownRef });

  return (
    <>
      <div className="opacity z-10 bg-gradient-to-b from-black via-dustyGray to-transparent opacity-70"></div>
      <div className="relative" ref={dropdownRef}>
        <NavItems
          ulStyle="absolute left-1/2 top-9 z-20 w-full -translate-x-[50%] rounded-lg border-[1px] bg-white"
          liStyle="nav-items-mobile"
        />
      </div>
    </>
  );
};

export default Component;
