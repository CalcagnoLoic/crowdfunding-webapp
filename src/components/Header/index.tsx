import { useOverflow } from "../../hooks/useOverflow";
import { useMobile } from "../../hooks/useMobile";
import { useState } from "react";

import DropdownMenu from "../DropdownMenu";
import IconLogo from "../../icons/IconLogo";
import IconMenu from "../../icons/IconMenu";
import NavItems from "../NavItems";

const Component = () => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick: React.MouseEventHandler<SVGElement> = (e): void => {
    e.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };

  useOverflow({ state: isOpen });

  return (
    <header className="bg-headerMobile md:bg-headerDesktop h-[300px] bg-cover px-10 pt-5 md:px-24 md:pt-12 lg:h-[400px] lg:px-40">
      <nav className="flex justify-between">
        <IconLogo isMainLogo={true} css="z-20" />

        {isMobile ? (
          <IconMenu isOpen={isOpen} setIsOpen={handleClick} />
        ) : (
          <NavItems
            ulStyle="flex gap-5 font-bold text-white"
            liStyle="nav-items-desktop"
          />
        )}
      </nav>

      {isOpen && <DropdownMenu setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Component;
