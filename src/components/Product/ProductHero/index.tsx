import { useMobile } from "../../../hooks/useMobile";
import { useState } from "react";

import BoxLayout from "../../../layout/BoxLayout";
import Button from "../../Button";
import Heading from "../../../typographies/Heading";
import IconLogo from "../../../icons/IconLogo";
import Paragraph from "../../../typographies/Paragraph";

const Component = () => {
  const isMobile = useMobile();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <BoxLayout css="relative py-8 ">
      <IconLogo
        isMainLogo={false}
        css="absolute -top-7 left-1/2 -translate-x-1/2"
      />

      <Heading
        kind="h1"
        content="mastercraft bamboo monitor riser"
        css="px-8 text-center text-xl font-bold capitalize text-codGray md:text-3xl lg:mt-5"
      />

      <Paragraph
        kind="p"
        content="A beautiful & handcrafted monitor stand to reduce neck and eye strain."
        css="mt-4 px-8 text-center text-boulder"
      />

      <div className="mt-10 flex justify-center px-2 md:justify-between md:px-12">
        <Button
          content="Back this project"
          css="btn cursor-pointer"
          isIcon={false}
        />

        <Button
          content={isClicked ? "Bookmarked" : "Bookmark"}
          css={` cursor-pointer ${isClicked ? "text-genoa " : "text-boulder "} ${isMobile ? "bg-transparent" : "bg-wildSand"}`}
          isMobile={isMobile}
          isIcon={true}
          handleClick={handleClick}
        />
      </div>
    </BoxLayout>
  );
};

export default Component;
