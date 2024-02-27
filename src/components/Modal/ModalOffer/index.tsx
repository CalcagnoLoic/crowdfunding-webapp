import { useState } from "react";
import OfferLayout from "../../../layout/OfferLayout";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import PledgeSection from "../../PledgeSection";

type ModalOfferProps = {
  title: string;
  subtitle?: string;
  id: string;
  offer: string;
  isDisabled?: true;
  isFreeOffer?: boolean;
};

const Component = ({
  title,
  subtitle,
  id,
  offer,
  isDisabled,
  isFreeOffer,
}: ModalOfferProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(true);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <OfferLayout css="mt-8" state={isClicked}>
      <div className={isDisabled ? "opacity-30" : "cursor-pointer"}>
        <label
          htmlFor={id}
          className={`flex  ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          <input
            type="checkbox"
            name="selectOffer"
            id={id}
            disabled={isDisabled}
          />
          <div className="ml-4 flex flex-col md:flex-row" onClick={handleClick}>
            <Heading
              kind="h2"
              content={title}
              css={`font-bold ${isDisabled ? "" : "hover:text-keppel"} ${isClicked ? "" : "text-keppel"}`}
            />

            {subtitle && (
              <Heading
                kind="h3"
                content={subtitle}
                css="text-keppel mt-2 md:mt-0 md:ml-4"
              />
            )}
          </div>
        </label>

        <Paragraph
          kind="p"
          content={offer}
          css="ml-7 mt-3 leading-7 text-boulder"
        />

        {!isClicked && !isDisabled && !isFreeOffer && <PledgeSection />}
      </div>
    </OfferLayout>
  );
};

export default Component;
