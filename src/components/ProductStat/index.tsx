import { useEffect, useState } from "react";
import BoxLayout from "../../layout/BoxLayout";
import Line from "../Line";
import StatsInformations from "../StatsInformations";

type ProductStatProps = {
  positionCSS: string;
};

const Component = ({ positionCSS }: ProductStatProps) => {
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
    <BoxLayout
      css={`
        ${positionCSS} p-12
      `}
    >
      <>
        <div className="flex flex-col text-center md:flex-row md:gap-12 lg:mr-36 lg:justify-between">
          <StatsInformations title="$89,914" subtitle="of $100.000 backed" />
          <Line isMobile={isMobile} />
          <StatsInformations title="5,007" subtitle="total backers" />
          <Line isMobile={isMobile} />
          <StatsInformations title="56" subtitle="days left" />
        </div>

        <input
          type="range"
          value={56}
          max={70}
          name=""
          id=""
          className="mt-8 w-full accent-keppel [&::-webkit-slider-thumb]:opacity-0"
        />
      </>
    </BoxLayout>
  );
};

export default Component;
