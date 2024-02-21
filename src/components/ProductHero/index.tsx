import { useEffect, useState } from "react";

import Button from "../Button";
import Heading from "../../typographies/Heading";
import IconLogo from "../../icons/IconLogo";
import Paragraph from "../../typographies/Paragraph";
import IconBookmark from "../../icons/IconBookmark";

const Component = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768 ? true : false,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768 ? true : false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative rounded-xl bg-white py-8 ">
      <IconLogo
        isMainLogo={false}
        css="absolute -top-7 left-1/2 -translate-x-1/2"
      />

      <Heading kind="h1" content="mastercraft bamboo monitor riser" />

      <Paragraph
        kind="p"
        content="A beautiful & handcrafted monitor stand to reduce neck and eye strain."
        css="mt-4 px-8 text-center text-boulder"
      />

      <div className="mt-10 flex justify-center px-2 md:justify-between md:px-12">
        <Button
          content="Back this project"
          css="bg-keppel hover:bg-genoa duration-300 transition ease text-white px-5 lg:px-10 py-4 "
          isIcon={false}
        />

        {isMobile ? (
          <IconBookmark />
        ) : (
          <Button
            content="Bookmark"
            css="text-boulder bg-wildSand"
            isMobile={isMobile}
            isIcon={true}
          />
        )}
      </div>
    </div>
  );
};

export default Component;
