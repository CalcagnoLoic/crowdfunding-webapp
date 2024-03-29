import { ProductStatProps } from "../../../types/type";
import { useOfferContext } from "../../../hooks/useOfferContext";
import { useMobile } from "../../../hooks/useMobile";

import BoxLayout from "../../../layout/BoxLayout";
import Line from "../../Line";
import StatsInformations from "../../StatsInformations";
import { formatPrice } from "../../../utils/formatPrice";

const Component = ({ positionCSS }: ProductStatProps) => {
  const isMobile = useMobile();
  const { amount } = useOfferContext();

  const price = formatPrice(amount);

  return (
    <BoxLayout
      css={`
        ${positionCSS} p-12
      `}
    >
      <>
        <div className="mx-12 flex flex-col justify-between text-center md:flex-row">
          <StatsInformations
            title={`$ ${price}`}
            subtitle="of $100.000 backed"
          />
          <Line isMobile={isMobile} />
          <StatsInformations title="5,007" subtitle="total backers" />
          <Line isMobile={isMobile} />
          <StatsInformations title="56" subtitle="days left" />
        </div>

        <input
          type="range"
          defaultValue={amount}
          max={100000}
          className="pointer-events-none mt-8 w-full accent-keppel"
        />
      </>
    </BoxLayout>
  );
};

export default Component;
