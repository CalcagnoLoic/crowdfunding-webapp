import { useMobile } from "../../hooks/useMobile";
import { useState } from "react";

import IconBookmark from "../../icons/IconBookmark";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const isMobile = useMobile();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <button
      className={`relative flex cursor-pointer rounded-full font-bold ${isClicked ? "text-genoa " : "text-boulder "} ${isMobile ? "bg-transparent" : "bg-wildSand"}  `}
      onClick={() => setIsClicked(!isClicked)}
    >
      <IconBookmark clicked={isClicked} />

      <Paragraph
        kind="p"
        content={isClicked ? "Bookmarked" : "Bookmark"}
        css={`px-5 self-center block mx-auto ${isMobile ? "hidden" : ""}`}
      />
    </button>
  );
};

export default Component;
