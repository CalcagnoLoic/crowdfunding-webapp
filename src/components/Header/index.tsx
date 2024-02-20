import bgMobile from "../../../public/images/image-hero-mobile.jpg";
import bgDesktop from "../../../public/images/image-hero-desktop.jpg";

import IconLogo from "../../icons/IconLogo";
import Navbar from "../Navbar";

const Component = () => {
  const isMobile = window.innerWidth < 768 ? true : false;

  return (
    <header
      className="h-[300px] bg-cover bg-center bg-no-repeat px-10 pt-5 md:px-24 lg:px-40 md:pt-12 lg:h-[400px] flex justify-between"
      style={{
        backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})`,
      }}
    >
      <IconLogo />
      <Navbar />
    </header>
  );
};

export default Component;
