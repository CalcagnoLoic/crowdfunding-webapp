import { useMobile } from "../../hooks/useMobile";

import bgMobile from "../../../public/images/image-hero-mobile.jpg";
import bgDesktop from "../../../public/images/image-hero-desktop.jpg";
import IconLogo from "../../icons/IconLogo";
import Navbar from "../Navbar";

const Component = () => {
  const isMobile = useMobile();

  return (
    <header
      className="flex h-[300px] justify-between bg-cover bg-center bg-no-repeat px-10 pt-5 md:px-24 md:pt-12 lg:h-[400px] lg:px-40"
      style={{
        backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})`,
      }}
    >
      <IconLogo isMainLogo={true} />
      <Navbar />
    </header>
  );
};

export default Component;
